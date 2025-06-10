import React, { useEffect, useState } from 'react';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://fictional-goggles-p4p9796jpjxfjr6-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title mb-4 text-primary">Users</h2>
        <ul className="list-group">
          {users.map(user => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={user._id}>
              <span>{user.username}</span>
              <span className="text-muted">{user.email}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Users;
