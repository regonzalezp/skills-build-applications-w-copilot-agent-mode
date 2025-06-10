import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://fictional-goggles-p4p9796jpjxfjr6-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Workouts</h2>
        <ul className="list-group">
          {workouts.map(workout => (
            <li className="list-group-item" key={workout._id}>
              <strong>{workout.name}</strong>: {workout.description}
            </li>
          ))}
        </ul>
        <button className="btn btn-primary mt-3">Add Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
