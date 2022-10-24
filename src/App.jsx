import { useState } from 'react'

import useData from './utils/useData'

import GalleryCard from './components/GalleryCard'
import About from './components/About'


function App() {
  const [data] = useData()
  const [index, setIndex] = useState(0)

  const { img, title, content, action } = data[index]

  return (
    <main className='w-full h-screen font-spartan'>
      <GalleryCard
        img={img}
        title={title}
        content={content}
        action={action}
        setIndex={setIndex}
        gallery={data}
        index={index}
      />
      <About />
    </main>
  )
}

export default App
