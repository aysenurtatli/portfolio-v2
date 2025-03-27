import React from 'react'
import Work from '../components/Work'

const Works = () => {

    const webDesign = [
        {image: "/greendough.png", href: "https://aysenurtatli.github.io/greendough/#/"},
        {image: "/iWonder.png", href: "https://github.com/aysenurtatli/blog-page"},
        {image: "/MyStock.png", href: "https://github.com/aysenurtatli/market-app" },
        {image: "/tasty.png", href: "https://aysenurtatli.github.io/React-recipe-page/"},
    ]

    const productDesign = [
        {image: "/petipure.png", href: "https://www.behance.net/gallery/221261499/Cat-Food-Product-Design"}
    ]

    const graphicDesign = [
        {image: "/treeco.png", href: "https://www.behance.net/gallery/211230449/Poster-design"},
        {image: "/moontea.png", href: "https://www.behance.net/gallery/211121543/Moon-Tea-logo-leaflet-poster-design"},
        {image: "/portfolio.png", href: "https://www.behance.net/gallery/211121543/Moon-Tea-logo-leaflet-poster-design"},


    ]
  return (
    <div className='max-w-[1170px] mx-auto min-h-screen md:min-h-[calc(100vh-82.5px-65px)] px-6 py-[40px]'>
        <h2 className='text-zinc-300 text-[30px] font-bold '>Works</h2>
        <Work title={"Web Works"} lists={webDesign}/>
        <Work title={"Graphic Works"} lists={graphicDesign}/>
        <Work title="Product Design Works" lists={productDesign}/>
    </div>
  )
}

export default Works