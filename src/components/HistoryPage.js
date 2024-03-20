import React from 'react';

const HistoryPage = ({ users }) => {
  return (
    <div>
      <h3>Наша історія:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}, {user.age}</li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
