// Write your code here

import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpires,
  } = latestMatchData

  return (
    <div className="app-container">
      <h1 className="heading">Latest Match</h1>
      <div className="card-container">
        <div className="logo">
          <div className="details-card-container">
            <p className="team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="result">{result}</p>
          </div>
          <img
            src={competingTeamLogo}
            className="latest-match-team-logo"
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <hr className="line" />
        <div className="details-cards-container">
          <p className="innings">First Innings </p>
          <p className="innings-result">{firstInnings} </p>
          <p className="innings">Second innings</p>
          <p className="innings-result">{secondInnings}</p>
          <p className="innings">Man of the Match</p>
          <p className="innings-results"> {manOfTheMatch}</p>
          <p className="innings">Umpires</p>
          <p className="innings-results">{umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
