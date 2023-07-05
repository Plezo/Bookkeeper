import Sidebar from '../components/Sidebar'
import Main from '../components/Main'

export default async function Home() {

  return (
    <div className='bg-black h-screen overflow-hidden'>
      <main className='flex'>
        <Main />   
      </main>
    </div>
  )
}
