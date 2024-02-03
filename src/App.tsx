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

  useEffect(() => {
    const handler = () => {
      if (!isScreenSmall()) setShowMenu(false)
    }

    window.addEventListener("resize", handler)

    return () => {
      window.removeEventListener("resize", handler)
    }
  }, [])


  function isScreenSmall() {
    return window.innerWidth < 640
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <nav className={`sm:flex ${showMenu
        ? "flex flex-col fixed right-0 top-20 bg-gray-950 border"
        : "hidden"
        }`
      }>
        {navItens.map(item => (
          <a href={`$item`} className='p-4'>{item}</a>
        ))}
      </nav>
      <button onClick={() => setShowMenu(!showMenu)}>
        {showMenu
          ? <X size={35} className='sm:hidden' />
          : <AlignJustify size={35} className='sm:hidden z-10' />}
      </button>
    </div>
  )
}

function App() {
  return (
    <Navbar />
  )
}

export default App
