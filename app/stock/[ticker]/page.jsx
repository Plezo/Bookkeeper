import { getBalanceSheet, getIncomeSheet, getCashFlowStatement } from '@/lib/fmp'
import { camelToTitle } from '@/lib/utils'

async function Stock({ params }) {

    const data = await getBalanceSheet(params?.ticker);
    
    return (
    <div className='p-12 overflow-y-scroll scrollbar-hide h-screen'>
        <section>
            {Object.entries(data[0]).map(([key, value]) => {
            return (
                <div key={key} className='grid grid-cols-2'>
                <h1>{camelToTitle(key)}:</h1>
                <p>{value}</p>
                </div>
            )
            })}
        </section>
    </div>
  )
}

export default Stock