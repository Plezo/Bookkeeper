import Image from 'next/image';
import { getProviders } from 'next-auth/react';
import loginImg from '../../public/login.png';
import Login from './login'

async function LoginPage() {

    const providers = await getProviders();
    
    return (
        <div className='flex flex-col items-center bg-black min-h-screen w-full justify-center'>
            <Image 
            className='w-52 mb-5'
            src={loginImg}
            width={500}
            height={500}
            alt=''
            />

            {Object.values(providers).map((provider) => 
                <Login provider={provider} key={provider.name}/>
            )}
        </div>
    )
}

export default LoginPage