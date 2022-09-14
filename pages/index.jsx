import React from "react"
import Image from 'next/image'

export default function Home() {
  return (
    <div id="container" className="container" style={{height: "100%", minHeight: "100vh"}}>
      <div dangerouslySetInnerHTML={{__html: `<!--SKIM 👉 🤭 -->`}}>
      </div>
      <div className="d-flex justify-content-center">
        <div className="position-relative ">
          <Image src="riskmilk.png" height="90vh" />
        </div>
        <audio id="riskmilkAudio" autoPlay>
          <source src="shootingstars.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}
