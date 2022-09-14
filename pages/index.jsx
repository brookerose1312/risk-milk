import React from "react"
import Image from 'next/image'

export default function Home() {
  return (
    <div id="container" className="container" style={{height: "100%", minHeight: "100vh"}}>
      <div dangerouslySetInnerHTML={{__html: `<!--SKIM 👉 🤭 -->`}}>
      </div>
      <div className="d-flex justify-content-center">
        <Image src="/riskmilk.png" layout="fill" />
        <audio id="riskmilkAudio" autoPlay>
          <source src="shootingstars.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}
