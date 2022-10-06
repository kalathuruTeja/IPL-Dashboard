// Write your code here

import {Component} from 'react'

import './index.css'

class MatchCard extends Component {
  getMatchStatusClassName = matchStatus => {
    if (matchStatus === 'won') {
      return 'match - win'
    }
    return 'match - lost'
  }

  render() {
    const {matchData} = this.props
    const {competingTeamLogo, competingTeam, matchStatus, result} = matchData
    const matchStatusClassName = `match-status ${this.getMatchStatusClassName(
      matchStatus,
    )}`

    return (
      <li className="match-card">
        <img
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
          className="team-logo"
        />
        <p className="team-name">{competingTeam}</p>
        <p className={matchStatusClassName}> {matchStatus}</p>
        <p className="result">{result}</p>
      </li>
    )
  }
}
export default MatchCard
