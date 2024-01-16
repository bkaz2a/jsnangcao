// Given data from the API
const game = {
    teams: ['Bayern Munich', 'Borrussia Dortmund'],
    players: {
      team1: ['Neuer', 'Sule', 'Alaba', 'Davies', 'Kimmich', 'Goretzka', 'Muller', 'Gnarby', 'Lewandowski', 'Coman'],
      team2: ['Burki', 'Schulz', 'Hummels', 'Akanji', 'Hakimi', 'Witsel', 'Brandt', 'Sancho', 'Reus', ' Hazard'],
    },
    odds: {
      team1: 1.33,
      draw: 3.25,
      team2: 6.5,
    },
    scored: ['Lewandowski', 'Gnarby', 'Hummels', 'Lewandowski'],
  };
  
  // Task 1: Create arrays for players of each team
  const [gk, ...fieldPlayers] = game.players.team1;
  const players1 = { gk, fieldPlayers };
  const players2 = { gk: game.players.team2[0], fieldPlayers: game.players.team2.slice(1) };
  
  // Task 2: Create an array 'allPlayers' with all 22 players
  const allPlayers = [...players1.fieldPlayers, ...players2.fieldPlayers];
  
  // Task 3: Create an array 'players1Final' with substitutes for Bayern Munich
  const players1Final = { ...players1, fieldPlayers: [...players1.fieldPlayers, 'Thiago', 'Coutinho', 'Perisic'] };
  
  // Task 4: Create variables for match result odds
  const { team1, draw, team2 } = game.odds;
  
  // Task 5: Create a function 'printGoals'
  const printGoals = (...scorers) => {
    for (const scorer of scorers) {
      console.log(`${scorer} scored a goal`);
    }
  };
  
  // Task 6: Determine the winning team without using if/else or ternary operator
  const winner = (team1 > team2) ? game.teams[0] : (team1 < team2) ? game.teams[1] : 'draw';
  
  // Task 7: Create an object 'scorers' with player names as keys and goal counts as values
  const scorers = {};
  for (const player of game.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
  }
  
  // LAB1.2: Coding Challenge #2
  // Task 1: Loop through 'game.scored' array and print players along with the goals
  for (const [index, player] of game.scored.entries()) {
    console.log(`Goal ${index + 1}: ${player}`);
  }
  
  // Task 2: Calculate the result odds using a loop
  let sumOdds = 0;
  for (const odd of Object.values(game.odds)) {
    sumOdds += odd;
  }
  const averageOdds = sumOdds / Object.values(game.odds).length;
  
  // Task 3: Print the odds in a formatted way
  console.log(`Tỉ lệ thắng của ${game.teams[0]}: ${game.odds.team1}`);
  console.log(`Tỉ lệ hòa: ${game.odds.draw}`);
  console.log(`Tỉ lệ thắng của ${game.teams[1]}: ${game.odds.team2}`);
  