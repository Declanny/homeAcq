// src/pages/AgentFinder.jsx


import Agent4 from '../../assets/Agent4.png';
import Agent3 from '../../assets/Agent3.png';
import Agent2 from '../../assets/Agent2.png';
import Agent1 from '../../assets/Agent1.png';
import SearchBar from '../shared/SearchBar';
import Agent from '../shared/Agent';
import searchIcon from '../../assets/search.png';
import './AgentFinder.css'; // Import the external CSS file

const AgentFinder = () => {
  // Update the imageSrc properties to use the imported image variables
  const agents = [
    { name: 'John Doe', distance: '2.4 miles away', imageSrc: Agent1, buttonText: 'Contact' },
    { name: 'Jane Smith', distance: '1.8 miles away', imageSrc: Agent2, buttonText: 'Contact' },
    { name: 'Mike Johnson', distance: '3.2 miles away', imageSrc: Agent3, buttonText: 'Contact' },
    { name: 'Emily Davis', distance: '0.9 miles away', imageSrc: Agent4, buttonText: 'Contact' },
    { name: 'Chris Lee', distance: '2.0 miles away', imageSrc: Agent2, buttonText: 'Contact' },
    { name: 'Anna Brown', distance: '1.5 miles away', imageSrc: Agent3, buttonText: 'Contact' },
  ];

  return (
    <div className="agent-finder-container">
      <h2 className="agent-finder-heading">Find an Agent</h2>
      <p className="agent-finder-subtext">
        Agents are experts in the local real market and can help you buy or sell your home.
      </p>
      <SearchBar
        placeholder="Search for top Agents"
        height="40px"
        width="300px"
        borderRadius="15px"
        border="1px solid orange"
      >
        <img src={searchIcon} alt="Search" />
      </SearchBar>
      <div className="agents-container">
        {agents.map((agent, index) => (
          <Agent
            key={index}
            name={agent.name}
            distance={agent.distance}
            buttonText={agent.buttonText}
            imageSrc={agent.imageSrc}
            imageHeight="100px"
            imageWidth="100px"
          />
        ))}
      </div>
    </div>
  );
};

export default AgentFinder;
