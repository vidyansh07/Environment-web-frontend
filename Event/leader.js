// Define an array of player objects
const players = [
    { username: 'Player1', score: 200 },
    { username: 'Player2', score: 180 },
    { username: 'Player3', score: 160 },
  ];
  
  // Find the table body element
  const tbody = document.querySelector('tbody');
  
  // Loop through the players array and create a row for each player
  players.forEach((player, index) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${index + 1}</td>
      <td>${player.username}</td>
      <td>${player.score}</td>
    `;
    tbody.appendChild(tr);
  });
  