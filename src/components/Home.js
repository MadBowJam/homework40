import React, { useContext } from 'react';
import { UserContext } from './UserContext';

const Home = () => {
  const { users } = useContext(UserContext); // Отримуємо доступ до контексту
  
  return (
    <div>
      <h2>Головна сторінка</h2>
      <h3>Список користувачів:</h3>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}, {user.age} років</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
