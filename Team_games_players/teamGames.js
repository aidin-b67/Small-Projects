const team = {
  _player: [
    { firstName: "Ferran", lastName: "Torres", age: 25 },
    { firstName: "Dani", lastName: "Olmo", age: 27 },
    { firstName: "Lamine", lastName: "Yamal", age: 18 },
  ],
  _games: [
    { opponent: "Manchester City", teamPoints: 3, opponentPoints: 2 },
    { opponent: "Real Madrid", teamPoints: 1, opponentPoints: 1 },
    { opponent: "Liverpool", teamPoints: 2, opponentPoints: 4 },
  ],

  get players() {
    return this._player;
  },

  get games() {
    return this._games;
  },

  addplayer(newFirstName, newLastName, newAge) {
    const player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },

  addgame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this._games.push(game);
  },
};

//team.addplayer('Mikel','Merino','29');
//console.log(team.players);
team.addgame("Manchester United", 3, 1);
console.log(team.games);
