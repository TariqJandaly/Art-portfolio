'use client'

import pocketbase from "@/utils/pocketbase"
import Link from "next/link"
import { useEffect, useState } from "react"

import { BsInstagram } from 'react-icons/bs'

interface pageProps {
  
}

interface drawing {
  id: string
  title: string
  description: string
  image: string
  x: string
  instagram: string
  updated: string
}

const page: React.FC<pageProps> = ({}) => {

  const [drawings, setDrawings] = useState([])


  useEffect(() => {
    pocketbase.collection('drawings').getList(0, 50000).then((data: any) => {
      setDrawings(data.items)
    })
  }, [])

  return (
    <div className="flex flex-col items-center m-32">
      <div className="title mb-10">
        <p className="text-3xl">Welcome, to my <span className="font-bold text-orange-400">ART PORTFOLIO</span></p>
      </div>
      <div className="w-full flex flex-wrap justify-center gap-5">
        { 
          drawings.length == 0 && <p className="text-5xl mt-32 text-center w-full font-bold text-cyan-400">Loading...</p>
        }
        { drawings.length != 0 && drawings.map((drawing: drawing) => (
          <div className="">
            <img
              className="aspect-[16/9] w-[30rem]"
              src={drawing.image}
              alt={drawing.title}
            />
            <div className="flex justify-between items-center">
              <p className="text-xl m-2">
                { drawing.title }
              </p>
              <div className="flex gap-5 text-xl mr-5">
                <Link href={drawing.x}>
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
                </Link>
                <Link href={drawing.instagram}>
                  <BsInstagram />
                </Link>
              </div>
            </div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default page