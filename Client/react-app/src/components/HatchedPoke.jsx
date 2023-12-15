const HatchedPoke = ({name, goBack}) => {
  return (
    <div className="suicunediv">
        <h1 className="suicunelabel">{name} is hatched!</h1>
        <img src={`https://www.shinyhunters.com/images/regular/245.gif`} alt={`${name} picture`} />
        <br/>
        <button className="newfriendbutton" onClick={goBack}>Let's go back to your journey with your new friend</button>
    </div>
  )
}

export default HatchedPoke