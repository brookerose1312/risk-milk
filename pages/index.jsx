import React, {useState} from "react"

export default function Home() {

  const [what, showWhat] = useState(false);

  const handleClick = () => {
    var video = document.getElementById("whatVideo");
    video.play();
    setTimeout(() => {
      showWhat(true);
      var audio = document.getElementById("whatAudio");
      audio.play();
    }, 1000)
  }
  return (
    <div onClick={handleClick} id="container" className="container" style={{height: "100%", minHeight: "100vh"}}>
      <h1 className="text-center mt-3">Risk Milk</h1>
      <div className="d-flex justify-content-center">
        <div className="position-relative ">
          <video id="whatVideo">
            <source src="milk-drop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {what && (
            <h1 className="what text-center position-absolute bottom-0 start-50 translate-middle" style={{color: "white", WebkitTextStrokeWidth: "2px", WebkitTextStrokeColor: "black", fontFamily: "Impact" }}>what</h1>
          )}
        </div>
        <audio id="whatAudio">
          <source src="what.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}
