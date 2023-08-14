import React from 'react'
import ford from '../../assets/img/ford.jpeg'
import nike from '../../assets/img/nike.png'
import google from '../../assets/img/Google.jpg'
import next from '../../assets/img/next.jpeg'
import microsoft from '../../assets/img/microsoft.png'
import yahoo from '../../assets/img/yahoo.png'

const Companies = () => {

  const Data = [
    {
      id: 1,
      image: ford,
      title: "Ford",
      desc: "This is the better companie to work"
    },

    {
      id: 2,
      image: nike,
      title: "Nike",
    },
    {
      id: 3,
      image: google,
      title: "Google",
    },
    {
      id: 4,
      image: next,
      title: "Next",
    },
    {
      id: 5,
      image: microsoft,
      title: "Microsoft",
    },
    {
      id: 6,
      image: yahoo,
      title: "Yahoo",
    },

  ]
  return (
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        {Data.map(({ id, image, title, time, desc, company }) => {
          return (
            <div title={title} class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 transform transition duration-500 hover:scale-110" >
              <article article class="overflow-hidden rounded-lg shadow-lg" >
                <img alt={image} class="block h-36 w-full" src={image} />
                <header class="flex items-center justify-center leading-tight p-2 md:p-4">
                  <a className='cursor-pointer'> <h1 class="text-lg text-cyan-600 font-bold">
                    {title}
                  </h1>
                  </a>
                </header>
                <footer class="flex items-center justify-between leading-none p-2 md:p-4">
                  <p class="ml-2 text-sm">#ESG</p>
                  <p class="ml-2 text-sm">#GPTW</p>
                </footer>
              </article>
            </div>
          )
        })
        }
      </div >
    </div >
  )
}

export default Companies