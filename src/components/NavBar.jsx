import * as React from 'react';

import '../css/navbar.css';

const NavBar = (props) => {
  function toggleDisplay(input) {
    if (input === 'activity') {
      props.setSelectedDisplay({ activityFeed: true, archivedCalls: false });
    } else {
      props.setSelectedDisplay({ activityFeed: false, archivedCalls: true });
    }
  }

  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li
          className="navbar-list-item"
          onClick={() => toggleDisplay('activity')}
        >
          Activity Feed
        </li>
        <li
          className="navbar-list-item"
          onClick={() => toggleDisplay('archive')}
        >
          Archived Calls
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
