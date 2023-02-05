const loadPlayerDB = () => {
  fetch(`https://www.thesportsdb.com/api/v1/json/3/all_leagues.php`)
    .then((res) => res.json())
    .then((data) => displayPlayerDB(data));
};

const displayPlayerDB = (data) => {
  //   console.log(data.leagues);
  const league = document.getElementById("league-description");

  data.leagues.slice(0, 20).forEach((x) => {
    const leagueDiv = document.createElement("div");
    leagueDiv.innerHTML = `
        ${x.strLeague} ${x.strSport} ${x.strLeagueAlternate}
    `;
    league.appendChild(leagueDiv);
  });
  for (const league of data.leagues.slice(0, 20)) {
    console.log(league.strLeague, league.strSport, league.strLeagueAlternate);
  }
};

loadPlayerDB();
