import { AlignJustify, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function Navbar() {
  const navItens = [
    "Home",
    "Company",
    "Resources",
    "About",
    "Contact",
  ]
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
<<<<<<< HEAD
<<<<<<< HEAD
=======
      <button>
        <AlignJustify size={35} className='sm:hidden' />
      </button>
>>>>>>> 2be5d2d (resposnive header)
      <nav className='sm:flex hidden'>
=======
      <nav className={`sm:flex ${showMenu
        ? "flex flex-col fixed right-0 top-20 bg-gray-950 border"
        : "hidden"
        }`
      }>
>>>>>>> 2c6b977 (add button to show menu)
        {navItens.map(item => (
          <a href={`$item`} className='p-4'>{item}</a>
        ))}
      </nav>
<<<<<<< HEAD
<<<<<<< HEAD
      <AlignJustify size={35} className='sm:hidden' />
=======
>>>>>>> 2be5d2d (resposnive header)
=======
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu
          ? <X size={35} className='sm:hidden' />
          : <AlignJustify size={35} className='sm:hidden z-10' />}
      </button>
>>>>>>> 2c6b977 (add button to show menu)
    </div>
  )
}

function App() {
  return (
    <Navbar />
  )
}

export default App
