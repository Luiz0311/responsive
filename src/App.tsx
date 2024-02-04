import { AlignJustify, X } from 'lucide-react'
import { useEffect, useState } from 'react'

function Main() {
  return (
    <main>
      <div className="bg-white w-full h-[300vh]"></div>
    </main>
  )
}

function Header() {
  const [showMenu, setShowMenu] = useState(false)

  const siteName = "Mydoc"
  const navItens = [
    "Home",
    "Company",
    "Resources",
    "About",
    "Contact",
  ]

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
    <header className='w-full sticky top-0 bg-gray-950'>
      <div className="flex justify-between items-center h-[60px] 
      max-w-[1240px] mx-auto px-4 text-white sticky top-0">
        <h1 className='w-full text-3xl font-bold text-[#00df9a]'>
          <a href="/">{siteName.toUpperCase()}</a>
        </h1>
        <nav className={`sm:flex ${showMenu
          ? "flex flex-col fixed right-0 top-20 bg-gray-950 border"
          : "hidden"
          }`
        }>
          {navItens.map(item => (
            <a href={`${item.toLowerCase()}`} className='p-4'>{item.toUpperCase()}</a>
          ))}
        </nav>
        <button onClick={() => setShowMenu(!showMenu)}>
          {showMenu
            ? <X size={35} className='sm:hidden' />
            : <AlignJustify size={35} className='sm:hidden z-10' />}
        </button>
      </div>
    </header>
  )
}

function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  )
}

export default App
