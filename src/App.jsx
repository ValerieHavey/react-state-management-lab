import "./App.css";
import { useState } from "react";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://via.placeholder.com/150/92c952",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://via.placeholder.com/150/771796",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://via.placeholder.com/150/24f355",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/d32776",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://via.placeholder.com/150/66b7d2",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://via.placeholder.com/150/56acb2",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://via.placeholder.com/150/8985dc",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://via.placeholder.com/150/392537",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://via.placeholder.com/150/602b9e",
    },
  ]);

  const updateTeamStats = (updatedTeam) => {
    const strength = updatedTeam.reduce(
      (sum, member) => sum + member.strength,
      0
    );
    const agility = updatedTeam.reduce(
      (sum, member) => sum + member.agility,
      0
    );
    setTotalStrength(strength);
    setTotalAgility(agility);
  };

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      alert("Not enough money.");
      return;
    }
    const updatedTeam = [...team, fighter];
    setTeam(updatedTeam);
    setMoney((prevMoney) => prevMoney - fighter.price);
    updateTeamStats(updatedTeam);
  };

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter((member) => member !== fighter);
    setTeam(updatedTeam);
    setMoney((prevMoney) => prevMoney + fighter.price);
    updateTeamStats(updatedTeam);
  };

  return (
    <>
      <h1>Zombie Fighters!</h1>
      <p>Money: {money}</p>
      <p>Team Strength: {totalStrength}</p>
      <p>Team Agility: {totalAgility}</p>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}>
            <img src={zombieFighter.img} alt={zombieFighter.name} />
            <div>{zombieFighter.name}</div>
            <div>Price: {zombieFighter.price}</div>
            <div>Strength: {zombieFighter.strength}</div>
            <div>Agility: {zombieFighter.agility}</div>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        ))}
      </ul>
      <h2>My Team</h2>
      {team.length === 0 ? (
        <div>Pick some team members!</div>
      ) : (
        <ul>
          {team.map((zombieFighter, index) => (
            <li key={index}>
              <img src={zombieFighter.img} alt={zombieFighter.name} />
              <div>{zombieFighter.name}</div>
              <div>Price: {zombieFighter.price}</div>
              <div>Strength: {zombieFighter.strength}</div>
              <div>Agility: {zombieFighter.agility}</div>
              <button onClick={() => handleRemoveFighter(zombieFighter)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default App;
