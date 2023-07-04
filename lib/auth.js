import GoogleProvider from 'next-auth/providers/google'

async function refreshAccessToken(token) {
    try {
        const url = 'https://www.googleapis.com/oauth2/v4/token?' + new URLSearchParams({
            client_id: process.env.GOOGLE_CLIENT_ID,
            client_secret: process.env.GOOGLE_CLIENT_SECRET,
            grant_type: 'refresh_token',
            refresh_token: token.refreshToken,
        })

        const res = await fetch(url, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'POST',
        })

        const refreshedToken = await res.json();
        
        console.log('REFRESHED TOKEN IS', refreshedToken.access_token)

        if (!res.ok) {
            throw refreshedToken
        }

        return {
            ...token,
            accessToken: refreshedToken.access_token, // Update access_token in the token
            accessTokenExpires: Date.now() + refreshedToken.expires_in * 1000,
            refreshToken: refreshedToken.refresh_token ?? token.refreshToken, // If new refresh token is not sent back from Google, use the old one
        }
    } catch (error) {
        console.log(error)

        return {
            ...token,
            error: 'RefreshAccessTokenError'
        }
    }
}

export const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            authorization: {
                params: {
                    prompt: 'consent',
                    access_type: 'offline',
                    response_type: 'code'
                }
            }
        })
    ],
    secret: process.env.JWT_SECRET,
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async jwt({ token, account, user }) {
            if (account && user) {
                return {
                    ...token,
                    accessToken: account.access_token,
                    refreshToken: account.refresh_token,
                    username: account.providerAccountId,
                    accessTokenExpires: account.expires_at * 1000,
                };
            }

            // if (Date.now() < token.accessTokenExpires) {
            if (Date.now() < 1688459148) {
                console.log('token not expired')
                return token;
            }

            return await refreshAccessToken(token);
        },

        async session({ session, token }) {
            if (token) {
                session.user.accessToken = token.accessToken;
                session.user.refreshToken = token.refreshToken;
                session.user.username = token.username;
            }

            return session;
        }
    }
}