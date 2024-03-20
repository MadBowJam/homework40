import React from 'react';
import { NavLink, Routes, Route } from 'react-router-dom';
import TeamPage from './TeamPage';
import HistoryPage from './HistoryPage';
import { UserContext } from './UserContext';

const About = () => {
  return (
    <UserContext.Consumer>
      {({ users }) => (
        <div>
          <h2>Це сторінка про нас</h2>
          <nav>
            <ul>
              <li>
                <NavLink to="team" >Наша команда</NavLink>
              </li>
              <li>
                <NavLink to="history" >Наша історія</NavLink>
              </li>
            </ul>
          </nav>
          
          <Routes>
            <Route path="team" element={<TeamPage users={users} />} />
            <Route path="history" element={<HistoryPage users={users} />} />
          </Routes>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default About;
