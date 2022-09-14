import React from "react"
import Image from 'next/image'

export default function Home() {
  const handleClick = () => {
    var audio = document.getElementById("riskmilkAudio");
    audio.play();
  }
  return (
    <>
    <div onClick={handleClick} id="container" className="container" style={{height: "100%", minHeight: "100vh", width: "100%", minWidth: "100vw", position: "fixed", overflow: "hidden", zIndex: "-1"}}>
      <Image src="/riskmilk.png" layout="fill" />
    </div>
    <div dangerouslySetInnerHTML={{__html: `<!--SKIM 👉 🤭 -->`}}>
      </div>
      <div className="d-flex justify-content-center">
      <h1 className="text-center mt-5 text-white">Click to</h1>
        <audio id="riskmilkAudio">
          <source src="shootingstars.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </>
  )
}
