import { useState } from 'react'

import galleryData from './data/data'

import GalleryCard from './components/GalleryCard'
import About from './components/About'


function App() {
  const [gallery, setGallery] = useState(galleryData)
  const [index, setIndex] = useState(0)

  const { mobileImg, desktopImg, title, content, action } = gallery[index]

  return (
    <main className='w-full h-screen font-spartan'>
      <GalleryCard
        mobileImg={mobileImg}
        desktopImg={desktopImg}
        title={title}
        content={content}
        action={action}
        setIndex={setIndex}
        gallery={gallery}
        index={index}
      />
      <About />
    </main>
  )
}

export default App
