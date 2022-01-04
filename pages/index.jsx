import React, {useState} from "react"

export default function Home() {

  const [what, showWhat] = useState(false);

  const handleClick = () => {
    var video = document.getElementById("whatVideo");
    video.play();
    var audio = document.getElementById("whatAudio");
    audio.play();
    setTimeout(() => {
      showWhat(true);
    }, 1000)
    setTimeout(() => {
      showWhat(false);
      if (video.ended) {
        video.load();
      }
    }, 10000)
  }
  return (
    <div onClick={handleClick} id="container" className="container" style={{height: "100%", minHeight: "100vh"}}>
      <h1 className="text-center mt-3">Risk Milk{/* SKIM 👉 🤭 */}</h1>
      <div className="d-flex justify-content-center">
        <div className="position-relative ">
          <video id="whatVideo" style={{
            minHeight: "90vh",
          }}>
            <source src="milk-drop.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {what && (
            <h1 className="what text-center position-absolute bottom-0 start-50 translate-middle" style={{color: "white", WebkitTextStrokeWidth: "5px", WebkitTextStrokeColor: "black", fontFamily: "Impact", fontSize: "200px" }}>what</h1>
          )}
        </div>
        <audio id="whatAudio">
          <source src="what.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  )
}
