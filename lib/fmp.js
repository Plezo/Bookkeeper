/*

TODO:
figure out how to fetch the data here from the client components
figure out how to include search params like period=annual or period=quarterly

*/

const BASE_URL = 'https://financialmodelingprep.com';

export async function getBalanceSheet(ticker, period='annual') {
    const url = `${BASE_URL}/api/v3/balance-sheet-statement/${ticker}?limit=120&apikey=${process.env.FMP_API_KEY}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function getIncomeStatement(ticker) {
    const url = `${BASE_URL}/api/v3/income-statement/${ticker}?limit=120&apikey=${process.env.FMP_API_KEY}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
}

export async function getCashFlowStatement(ticker) {
    const url = `${BASE_URL}/api/v3/cash-flow-statement/${ticker}?limit=120&apikey=${process.env.FMP_API_KEY}`

    const res = await fetch(url);
    const data = await res.json();
    return data;
}