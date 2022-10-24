import React, { useEffect, useState } from 'react'
import hamburger from '../assets/images/icon-hamburger.svg'
import close from '../assets/images/icon-close.svg'
import tempImg from '../assets/images/mobile-image-hero-1.jpg'
import angleLeft from '../assets/images/icon-angle-left.svg'
import angleRight from '../assets/images/icon-angle-right.svg'


const GalleryCard = ({ img, title, content, action, setIndex, gallery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const nextContent = () => {
    setIndex((prevValue) => {
      return prevValue === gallery.length - 1 ? 0 : prevValue + 1
    })
  }

  const prevContent = () => {
    setIndex((prevValue) => {
      return prevValue === 0 ? gallery.length - 1 : prevValue - 1
    })
  }

  const closeMenu = (e) => {
    e.target.classList.contains('bg-black/50') && setIsMenuOpen(false)
  }

  const keyDown = (e) => {
    if (e.key === "ArrowLeft" || e.key === 'ArrowRight') {
      setIndex((prevValue) => {
        if (e.key === "ArrowRight") {
          return prevValue === gallery.length - 1 ? 0 : prevValue + 1
        }
        if (e.key === "ArrowLeft") {
          return prevValue === 0 ? gallery.length - 1 : prevValue - 1
        }
      }
      )
    }
  }

  useEffect(() => {
    window.document.addEventListener('keydown', keyDown)
  }, [])

  return (
    <section className='relative flex flex-col lg:flex-row w-full lg:h-[65.6vmin]'>

      <div onClick={closeMenu} className={`${isMenuOpen ? "opacity-100 z-10" : "opacity-0 -z-10"} fixed h-screen w-screen bg-black/50 transition-all duration-200 md:hidden`}>
        {/* mobile navigation */}
        <div className={`${isMenuOpen ? "h-28" : "h-0"} absolute flex w-full px-6 h-28 justify-between items-center bg-white z-10 transition-all delay-75 ease-in-out`}>
          <button onClick={() => setIsMenuOpen(false)} className='group w-5'>
            <img src={close} alt="close menu icon" className='w-full group-active:scale-95 transition-transform' />
          </button>

          <nav>
            <ul className='flex gap-6'>
              {["home", "shop", "about", "contact"].map((link, index) => (
                <li key={index + new Date().getTime()}>
                  <a href="#" className="font-bold lowercase text-black">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative w-full h-full lg:w-[60%]">
        <button onClick={() => setIsMenuOpen(true)} className='absolute w-6 top-[2.6rem] left-5 active:scale-95 transition-transform md:hidden'>
          <img src={hamburger} alt="hamburger" className='w-full' />
        </button>
        <h2 className='absolute top-8 left-0 right-0 mx-auto font-semibold text-3xl tracking-wide text-white lowercase justify-self-start w-max md:hidden'>room</h2>

        <img src={img || tempImg} alt="" className='w-full object-cover h-full' />

        {/* desktop navigation */}
        <header className="absolute hidden items-center justify-between w-[29rem] top-16 left-16 md:flex">
          <h3 className="text-5xl text-white lowercase">room</h3>

          <nav className="flex items-center">
            <ul className='flex items-center gap-8'>
              {["home", "shop", "about", "contact"].map((link, index) => (
                <li key={index + new Date().getTime()} className='group'>
                  <a href="#" className="font-bold text-lg lowercase text-white transition-transform relative after:absolute after:-bottom-4 after:left-1/2 after:h-[0.125rem] after:w-0 after:bg-white after:origin-right group-hover:after:w-1/2 after:transition-all before:absolute before:-bottom-4 before:right-1/2 before:h-[0.125rem] before:w-0 before:bg-white before:origin-left before:transition-all group-hover:before:w-1/2">{link}</a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <div className="w-28 h-14 flex bg-black absolute bottom-0 right-0 lg:hidden">
          <button onClick={prevContent} className='w-1/2 h-full bg-black hover:bg-veryDarkGray transition-colors grid place-items-center group'>
            <img src={angleLeft} alt="angle right" className='group-active:scale-95 transition-transform' />
          </button>
          <button onClick={nextContent} className='w-1/2 h-full bg-black hover:bg-veryDarkGray transition-colors grid place-items-center group'>
            <img src={angleRight} alt="angle left" className='group-active:scale-95 transition-transform' />
          </button>
        </div>
      </div>



      <div className="relative flex flex-col justify-center w-full h-full px-9 py-14 bg-white lg:w-[40%] lg:px-10 xl:justify-start lg:py-9 2xl:justify-center transition-all">
        <h1 className="text-black font-bold text-3xl mb-5 lg:text-4xl xl:text-[2.8rem]  transition-all">{title || "Discover innovative ways to decorate"}</h1>
        <p className="text-darkGray mb-7 lg:text-[1.0625rem] xl:text-[1.1rem] transition-all">
          {content || "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life.Create a room in your own style with our collection and make your property a reflection of you and what you love."}
        </p>

        <a href="#" className='bg-transparent w-max flex items-center text-black tracking-[0.6rem] text-lg uppercase hover:text-darkGray group transition-all'>
          {action || 'shop now'}
          <span className='ml-4 group-hover:ml-6 transition-all'>
            <svg width="40" height="12" xmlns="http://www.w3.org/2000/svg" className='fill-black group-hover:fill-darkGray'>
              <path d="M34.05 0l5.481 5.527h.008v.008L40 6l-.461.465v.063l-.062-.001L34.049 12l-.662-.668 4.765-4.805H0v-1h38.206l-4.82-4.86L34.05 0z" fillRule="nonzero" />
            </svg>
          </span>
        </a>

        <div className="hidden w-40 h-20 lg:flex bg-black absolute bottom-0 left-0">
          <button onClick={prevContent} className='w-1/2 h-full bg-black hover:bg-veryDarkGray focus:outline-none transition-colors grid place-items-center group'>
            <img src={angleLeft} alt="angle right" className='group-active:scale-95 transition-transform' />
          </button>
          <button onClick={nextContent} className='w-1/2 h-full bg-black hover:bg-veryDarkGray focus:outline-none transition-colors grid place-items-center group'>
            <img src={angleRight} alt="angle left" className='group-active:scale-95 transition-transform' />
          </button>
        </div>
      </div>

    </section>
  )
}

export default GalleryCard