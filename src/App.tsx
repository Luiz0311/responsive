import { AlignJustify } from 'lucide-react'

function Navbar() {
  const navItens = [
    "Home",
    "Company",
    "Resources",
    "About",
    "Contact",
  ]

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <nav className='sm:flex hidden'>
        {navItens.map(item => (
          <a href={`$item`} className='p-4'>{item}</a>
        ))}
      </nav>
      <AlignJustify size={35} className='sm:hidden' />
    </div>
  )
}

function App() {
  return (
    <Navbar />
  )
}

export default App
