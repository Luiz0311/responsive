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
<<<<<<< HEAD
=======
      <button>
        <AlignJustify size={35} className='sm:hidden' />
      </button>
>>>>>>> 2be5d2d (resposnive header)
      <nav className='sm:flex hidden'>
        {navItens.map(item => (
          <a href={`$item`} className='p-4'>{item}</a>
        ))}
      </nav>
<<<<<<< HEAD
      <AlignJustify size={35} className='sm:hidden' />
=======
>>>>>>> 2be5d2d (resposnive header)
    </div>
  )
}

function App() {
  return (
    <Navbar />
  )
}

export default App
