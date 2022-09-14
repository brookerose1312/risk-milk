import React, {useState} from "react"

export default function Home() {
  return (
    <div onClick={handleClick} id="container" className="container" style={{height: "100%", minHeight: "100vh"}}>
      <div dangerouslySetInnerHTML={{__html: `<!--SKIM 👉 🤭 -->`}}>
      </div>
      <h1 className="text-center mt-3" >Risk Milk</h1>
      <div className="d-flex justify-content-center">
        <div className="position-relative ">
          <img src="riskmilk.png" minHeight="90vh" />
        </div>
        <audio id="riskmilkAudio" autoPlay>
          <source src="shootingstars.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}
