import React, { useState } from "react";
import ActivityFeed from "../components/ActivityFeed.jsx";
import ArchivedCalls from "../components/ArchivedCalls.jsx";
import NavBar from "../components/NavBar.jsx";

const Main = () => {
  const [selectedDisplay, setSelectedDisplay] = useState({
    activityFeed: true,
    archivedCalls: false,
  });

  const [callData, setCallData] = useState([]);

  return (
    <div>
      <NavBar
        selectedDisplay={selectedDisplay}
        setSelectedDisplay={setSelectedDisplay}
      />
      {selectedDisplay.activityFeed ? <ActivityFeed /> : <ArchivedCalls />}
    </div>
  );
};

export default Main;
