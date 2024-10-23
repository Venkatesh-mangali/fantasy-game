
import React, { useState } from 'react';
import PlayerList from './components/PlayerList';
import TeamDisplay from './components/TeamDisplay';
import TeamManager from './components/TeamManager';

function App() {
  const [team, setTeam] = useState([]);

  const handlePlayerSelect = (player) => {
    if (team.length < 11) {
      setTeam([...team, player]);
    } else {
      alert('You can only select 11 players!');
    }
  };

  return (
    <div>
      <h1>Fantasy Game</h1>
      <PlayerList onPlayerSelect={handlePlayerSelect} />
      <TeamDisplay team={team} />
      <TeamManager team={team} setTeam={setTeam} />
    </div>
  );
}

export default App;
