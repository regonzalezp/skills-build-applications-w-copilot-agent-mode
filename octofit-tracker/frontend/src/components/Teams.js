import React, { useEffect, useState } from 'react';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://fictional-goggles-p4p9796jpjxfjr6-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Teams</h2>
        <ul className="list-group">
          {teams.map(team => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={team._id}>
              <span><strong>{team.name}</strong></span>
              <span className="badge bg-primary rounded-pill">{team.members && team.members.length}</span>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary mt-3">Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
