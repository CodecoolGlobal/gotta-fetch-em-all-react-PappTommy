const Egg = ({hatch, goAway}) => {
  return (
    <div className="alleggdiv">
      <div className="egglabel">
        <h1>Wow, Trainer! Fortunately, you found a truly rare egg around here!</h1>
        <h1> What will you do?</h1>
      </div>
        <img className="eggpic" src="https://64.media.tumblr.com/tumblr_lvwmhdE0lN1qg0dcvo1_500.gif"></img>
        <br/>
        <button className="hatchbutton" onClick={hatch}>Hatch the egg!</button>
        <br/>
        <button className="gobackbutton" onClick={goAway}>I don't want the egg, I go back to the locations</button>
    </div>
  )
}

export default Egg