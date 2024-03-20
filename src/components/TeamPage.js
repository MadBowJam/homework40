import React from 'react';

const TeamPage = ({ users }) => {
  return (
    <div>
      <h3>Наша команда:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}, {user.age} років</li>
        ))}
      </ul>
    </div>
  );
};

export default TeamPage;
