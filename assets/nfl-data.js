/*
 * NFL Betting AI Evaluation - canonical data
 * CS 486 Team 5, Carlos Crespo, Fall 2025 (USF)
 *
 * Source of truth: Docs/GRADING ANALYSIS/Carlos_NFL_Bet_By_Bet_FINAL_VERIFIED.csv
 * Game results independently verified against ESPN box scores, Aug 2026.
 * Every other number on this site (model rankings, prompt performance, game
 * podiums) is computed from NFL_BETS + NFL_GAMES at render time, nothing is
 * hand-typed twice. That's the fix for the original model-assignment bug
 * documented in Carlos_NFL_Data_Integrity_Report.md.
 */

var NFL_MODELS = ["ChatGPT", "Claude", "Gemini"];

// Team branding + venue. Logos hotlinked from ESPN's public team-logo CDN.
var NFL_TEAMS = {
  "Baltimore Ravens":       { abbr: "bal", primary: "#241773", secondary: "#000000", city: "Baltimore, MD",      stadium: "M&T Bank Stadium" },
  "Miami Dolphins":         { abbr: "mia", primary: "#008E97", secondary: "#FC4C02", city: "Miami Gardens, FL",  stadium: "Hard Rock Stadium" },
  "Kansas City Chiefs":     { abbr: "kc",  primary: "#E31837", secondary: "#FFB81C", city: "Kansas City, MO",    stadium: "GEHA Field at Arrowhead Stadium" },
  "Buffalo Bills":          { abbr: "buf", primary: "#00338D", secondary: "#C60C30", city: "Orchard Park, NY",   stadium: "Highmark Stadium" },
  "San Francisco 49ers":    { abbr: "sf",  primary: "#AA0000", secondary: "#B3995D", city: "Santa Clara, CA",    stadium: "Levi's Stadium" },
  "New York Giants":        { abbr: "nyg", primary: "#0B2265", secondary: "#A71930", city: "East Rutherford, NJ", stadium: "MetLife Stadium" },
  "Minnesota Vikings":      { abbr: "min", primary: "#4F2683", secondary: "#FFC62F", city: "Minneapolis, MN",    stadium: "U.S. Bank Stadium" },
  "Detroit Lions":          { abbr: "det", primary: "#0076B6", secondary: "#B0B7BC", city: "Detroit, MI",        stadium: "Ford Field" },
  "Green Bay Packers":      { abbr: "gb",  primary: "#203731", secondary: "#FFB612", city: "Green Bay, WI",      stadium: "Lambeau Field" },
  "Carolina Panthers":      { abbr: "car", primary: "#0085CA", secondary: "#000000", city: "Charlotte, NC",      stadium: "Bank of America Stadium" },
  "Houston Texans":         { abbr: "hou", primary: "#03202F", secondary: "#A71930", city: "Houston, TX",        stadium: "NRG Stadium" },
  "Denver Broncos":         { abbr: "den", primary: "#FB4F14", secondary: "#002244", city: "Denver, CO",         stadium: "Empower Field at Mile High" },
  "New England Patriots":   { abbr: "ne",  primary: "#002244", secondary: "#C60C30", city: "Foxborough, MA",     stadium: "Gillette Stadium" },
  "New York Jets":          { abbr: "nyj", primary: "#125740", secondary: "#000000", city: "East Rutherford, NJ", stadium: "MetLife Stadium" },
  "Arizona Cardinals":      { abbr: "ari", primary: "#97233F", secondary: "#000000", city: "Glendale, AZ",       stadium: "State Farm Stadium" },
  "Tampa Bay Buccaneers":   { abbr: "tb",  primary: "#D50A0A", secondary: "#34302B", city: "Tampa, FL",          stadium: "Raymond James Stadium" },
  "Philadelphia Eagles":    { abbr: "phi", primary: "#004C54", secondary: "#A5ACAF", city: "Philadelphia, PA",   stadium: "Lincoln Financial Field" },
  "Tennessee Titans":       { abbr: "ten", primary: "#0C2340", secondary: "#4B92DB", city: "Nashville, TN",      stadium: "Nissan Stadium" },
  "Los Angeles Chargers":   { abbr: "lac", primary: "#0080C6", secondary: "#FFC20E", city: "Inglewood, CA",      stadium: "SoFi Stadium" },
  "Jacksonville Jaguars":   { abbr: "jax", primary: "#006778", secondary: "#101820", city: "Jacksonville, FL",   stadium: "EverBank Stadium" },
  "Chicago Bears":          { abbr: "chi", primary: "#0B162A", secondary: "#C83803", city: "Chicago, IL",        stadium: "Soldier Field" },
  "Washington Commanders":  { abbr: "wsh", primary: "#5A1414", secondary: "#FFB612", city: "Landover, MD",       stadium: "Commanders Field" },
  "Dallas Cowboys":         { abbr: "dal", primary: "#041E42", secondary: "#869397", city: "Arlington, TX",      stadium: "AT&T Stadium" },
  "Las Vegas Raiders":      { abbr: "lv",  primary: "#000000", secondary: "#A5ACAF", city: "Las Vegas, NV",      stadium: "Allegiant Stadium" }
};

function nflTeamLogo(teamName) {
  var t = NFL_TEAMS[teamName];
  return t ? "https://a.espncdn.com/i/teamlogos/nfl/500/" + t.abbr + ".png" : "";
}

var NFL_GAMES = [
  { id: "ravens-dolphins", week: 9, prompt: 2, label: "Ravens vs Dolphins", away: "Baltimore Ravens", home: "Miami Dolphins", awayScore: 28, homeScore: 6, date: "2025-10-30", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772943" },
  { id: "chiefs-bills", week: 9, prompt: 1, label: "Chiefs vs Bills", away: "Kansas City Chiefs", home: "Buffalo Bills", awayScore: 21, homeScore: 28, date: "2025-11-02", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772768" },
  { id: "niners-giants", week: 9, prompt: 1, label: "49ers vs Giants", away: "San Francisco 49ers", home: "New York Giants", awayScore: 34, homeScore: 24, date: "2025-11-02", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772767" },
  { id: "vikings-lions", week: 9, prompt: 3, label: "Vikings vs Lions", away: "Minnesota Vikings", home: "Detroit Lions", awayScore: 27, homeScore: 24, date: "2025-11-02", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772871",
    legacyGrade: { ChatGPT: 85.0, Gemini: 35.0, Claude: 33.5 } },
  { id: "packers-panthers", week: 9, prompt: 4, label: "Packers vs Panthers", away: "Carolina Panthers", home: "Green Bay Packers", awayScore: 16, homeScore: 13, date: "2025-11-02", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772872",
    legacyNote: "The original CS486 write-up scored this game (40.0 / 25.0 / 25.0 out of 100), but all three models made the identical bet (Packers -12.5), so which score belongs to which model can't be reliably recovered from the surviving records. Not shown per-model to avoid a second misattribution." },
  { id: "texans-broncos", week: 9, prompt: 5, label: "Texans vs Broncos", away: "Denver Broncos", home: "Houston Texans", awayScore: 18, homeScore: 15, date: "2025-11-02", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772870",
    legacyNote: "The original CS486 write-up scored this game (75.0 / 55.0 / 45.0 out of 100), but that grading was built on a narrative that has since been shown to misattribute bets between models (see the corrected standings above) and on 4 of 7 props whose outcomes didn't match the real ESPN box score. Not shown here since the premise it was scored on was wrong." },

  { id: "patriots-jets", week: 11, prompt: 1, label: "Patriots vs Jets", away: "New York Jets", home: "New England Patriots", awayScore: 14, homeScore: 27, date: "2025-11-13", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772945" },
  { id: "niners-cardinals", week: 11, prompt: 1, label: "49ers vs Cardinals", away: "San Francisco 49ers", home: "Arizona Cardinals", awayScore: 41, homeScore: 22, date: "2025-11-16", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772885" },
  { id: "bills-buccaneers", week: 11, prompt: 2, label: "Bills vs Buccaneers", away: "Tampa Bay Buccaneers", home: "Buffalo Bills", awayScore: 32, homeScore: 44, date: "2025-11-16", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772776" },
  { id: "lions-eagles", week: 11, prompt: 3, label: "Lions vs Eagles", away: "Detroit Lions", home: "Philadelphia Eagles", awayScore: 9, homeScore: 16, date: "2025-11-16", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772928" },
  { id: "texans-titans", week: 11, prompt: 4, label: "Texans vs Titans", away: "Houston Texans", home: "Tennessee Titans", awayScore: 16, homeScore: 13, date: "2025-11-16", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772881" },
  { id: "chargers-jaguars", week: 11, prompt: 5, label: "Chargers vs Jaguars", away: "Los Angeles Chargers", home: "Jacksonville Jaguars", awayScore: 6, homeScore: 35, date: "2025-11-16", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772775" },
  { id: "bears-vikings", week: 11, prompt: 6, label: "Bears vs Vikings", away: "Chicago Bears", home: "Minnesota Vikings", awayScore: 19, homeScore: 17, date: "2025-11-16", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772880" },
  { id: "commanders-dolphins", week: 11, prompt: 7, label: "Commanders vs Dolphins", away: "Washington Commanders", home: "Miami Dolphins", awayScore: 13, homeScore: 16, ot: true, date: "2025-11-16", neutralSite: "Estadio Santiago Bernabeu, Madrid, Spain", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772631" },
  { id: "cowboys-raiders", week: 11, prompt: 11, label: "Cowboys vs Raiders", away: "Dallas Cowboys", home: "Las Vegas Raiders", awayScore: 33, homeScore: 16, date: "2025-11-17", espn: "https://www.espn.com/nfl/boxscore/_/gameId/401772819" }
];

// Columns: week, model, prompt, betType, recommendation, stake, game, outcome, return, pl
var NFL_BETS = [
  [9,"ChatGPT",1,"Spread","KC -1.5",6.00,"Chiefs vs Bills","LOSS",0.00,-6.00],
  [9,"ChatGPT",1,"Moneyline","49ers ML",6.00,"49ers vs Giants","WIN",11.45,5.45],
  [9,"ChatGPT",1,"Total","UNDER 48.5",4.00,"49ers vs Giants","LOSS",0.00,-4.00],
  [9,"ChatGPT",1,"Total","49ers/Giants UNDER 48.5",10.00,"49ers vs Giants","LOSS",0.00,-10.00],
  [9,"ChatGPT",2,"Prop","Tua O1.5 pass TDs",10.00,"Ravens vs Dolphins","LOSS",0.00,-10.00],
  [9,"ChatGPT",2,"Prop","Lamar 60+ rush yds + TD",10.00,"Ravens vs Dolphins","LOSS",0.00,-10.00],
  [9,"ChatGPT",3,"Total","OVER 47.5",11.00,"Vikings vs Lions","WIN",21.00,10.00],
  [9,"ChatGPT",4,"Spread","Packers -12.5",11.00,"Packers vs Panthers","LOSS",0.00,-11.00],
  [9,"ChatGPT",5,"Prop","Stroud O1.5 pass TDs",11.00,"Texans vs Broncos","WIN",21.00,10.00],
  [9,"ChatGPT",5,"Prop","Stroud U231.5 pass yds",11.00,"Texans vs Broncos","WIN",21.00,10.00],
  [9,"Claude",1,"Spread","Bills +1.5",7.00,"Chiefs vs Bills","WIN",13.36,6.36],
  [9,"Claude",1,"Spread","49ers -2.5",6.00,"49ers vs Giants","WIN",11.45,5.45],
  [9,"Claude",1,"Total","UNDER 51.5",3.00,"Chiefs vs Bills","WIN",5.73,2.73],
  [9,"Claude",1,"Total","OVER 51.5",4.00,"Chiefs vs Bills","LOSS",0.00,-4.00],
  [9,"Claude",2,"Prop","D. Henry O87.5 rush yds",10.00,"Ravens vs Dolphins","WIN",19.09,9.09],
  [9,"Claude",2,"Prop Parlay","Lamar O1.5 TDs + rush TD",5.00,"Ravens vs Dolphins","LOSS",0.00,-5.00],
  [9,"Claude",2,"Prop","Tua O216.5 pass yds",5.00,"Ravens vs Dolphins","WIN",9.55,4.55],
  [9,"Claude",3,"Total","UNDER 47.5",11.00,"Vikings vs Lions","LOSS",0.00,-11.00],
  [9,"Claude",4,"Spread","Packers -12.5",11.00,"Packers vs Panthers","LOSS",0.00,-11.00],
  [9,"Claude",5,"Prop","Nix O205.5 pass yds",11.00,"Texans vs Broncos","WIN",21.00,10.00],
  [9,"Claude",5,"Prop","Nik Bonitto anytime sack",11.00,"Texans vs Broncos","LOSS",0.00,-11.00],
  [9,"Claude",5,"Prop","Sutton O58.5 rec yds",11.00,"Texans vs Broncos","WIN",21.00,10.00],
  [9,"Gemini",1,"Spread","Chiefs -1.5",10.00,"Chiefs vs Bills","LOSS",0.00,-10.00],
  [9,"Gemini",1,"Total","Chiefs/Bills OVER 51.5",10.00,"Chiefs vs Bills","LOSS",0.00,-10.00],
  [9,"Gemini",1,"Spread","49ers -2.5",10.00,"49ers vs Giants","WIN",19.09,9.09],
  [9,"Gemini",1,"Total","UNDER 48.5",4.00,"49ers vs Giants","LOSS",0.00,-4.00],
  [9,"Gemini",2,"Prop","Lamar O35.5 rush yds",10.00,"Ravens vs Dolphins","WIN",19.09,9.09],
  [9,"Gemini",2,"Prop","Waddle anytime TD",5.00,"Ravens vs Dolphins","LOSS",0.00,-5.00],
  [9,"Gemini",2,"Prop","Tua O0.5 INT",5.00,"Ravens vs Dolphins","WIN",9.55,4.55],
  [9,"Gemini",3,"Spread","Lions -8.5",11.00,"Vikings vs Lions","LOSS",0.00,-11.00],
  [9,"Gemini",4,"Spread","Packers -12.5",11.00,"Packers vs Panthers","LOSS",0.00,-11.00],
  [9,"Gemini",5,"Prop","Woody Marks O60 scrimmage",11.00,"Texans vs Broncos","LOSS",0.00,-11.00],
  [9,"Gemini",5,"Team Total","Denver U19.5",11.00,"Texans vs Broncos","WIN",21.00,10.00],

  [11,"ChatGPT",1,"Spread","Patriots spread",5.00,"Patriots vs Jets","PUSH",5.00,0.00],
  [11,"ChatGPT",1,"Total","OVER (total)",5.00,"Patriots vs Jets","LOSS",0.00,-5.00],
  [11,"ChatGPT",1,"Moneyline","49ers ML",5.00,"49ers vs Cardinals","WIN",9.55,4.55],
  [11,"ChatGPT",2,"Prop","James Cook over ~70 rush yds",10.00,"Bills vs Buccaneers","WIN",19.09,9.09],
  [11,"ChatGPT",2,"Prop","Khalil Shakir rec yds over ~75",10.00,"Bills vs Buccaneers","LOSS",0.00,-10.00],
  [11,"ChatGPT",3,"Spread","Eagles -3 (or -1.5)",11.00,"Lions vs Eagles","WIN",21.00,10.00],
  [11,"ChatGPT",4,"Spread","Titans -3",11.00,"Texans vs Titans","LOSS",0.00,-11.00],
  [11,"ChatGPT",5,"Prop","Keenan Allen OVER 5.5-6.5 rec",11.00,"Chargers vs Jaguars","LOSS",0.00,-11.00],
  [11,"ChatGPT",5,"Prop","Josh Allen (JAX) sack",11.00,"Chargers vs Jaguars","WIN",21.00,10.00],
  [11,"ChatGPT",6,"Spread","Vikings +spread (INVALID)",0.00,"Bears vs Vikings","N/A",0.00,0.00],
  [11,"ChatGPT",7,"Total","UNDER (game total)",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"ChatGPT",7,"Prop","WAS RB OVER 11.5-13.5 carries",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"ChatGPT",7,"Prop","Longest FG UNDER 47.5",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"ChatGPT",11,"Prop","QB pass yds OVER (generic)",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"ChatGPT",11,"Prop","Team rush att UNDER (generic)",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"ChatGPT",11,"Prop","Kicker FG Made/Longest OVER",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"Claude",1,"Spread","Jets +12.5",4.00,"Patriots vs Jets","LOSS",0.00,-4.00],
  [11,"Claude",1,"Total","OVER 43.5",3.00,"Patriots vs Jets","LOSS",0.00,-3.00],
  [11,"Claude",1,"Prop","Drake Maye O1.5 Pass TDs",3.00,"Patriots vs Jets","WIN",5.73,2.73],
  [11,"Claude",2,"Prop","Josh Allen OVER 0.5 INTs",10.00,"Bills vs Buccaneers","LOSS",0.00,-10.00],
  [11,"Claude",2,"Prop","James Cook OVER rush yds (70.5-75.5)",10.00,"Bills vs Buccaneers","WIN",19.09,9.09],
  [11,"Claude",3,"Total","UNDER 47.5",11.00,"Lions vs Eagles","WIN",21.00,10.00],
  [11,"Claude",3,"Spread","Eagles -1.5",11.00,"Lions vs Eagles","WIN",21.00,10.00],
  [11,"Claude",4,"1H Spread","Texans 1H -3.5",11.00,"Texans vs Titans","LOSS",0.00,-11.00],
  [11,"Claude",4,"Total","UNDER 38.5",11.00,"Texans vs Titans","WIN",21.00,10.00],
  [11,"Claude",5,"Prop","Herbert OVER 252.5 pass yds",11.00,"Chargers vs Jaguars","LOSS",0.00,-11.00],
  [11,"Claude",5,"Prop","McConkey OVER 5.5-6.5 rec",11.00,"Chargers vs Jaguars","LOSS",0.00,-11.00],
  [11,"Claude",6,"Spread","Vikings -2.5",11.00,"Bears vs Vikings","LOSS",0.00,-11.00],
  [11,"Claude",6,"SGP","Vikings ML + UNDER 48.5",11.00,"Bears vs Vikings","LOSS",0.00,-11.00],
  [11,"Claude",7,"Total","UNDER 47.5",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"Claude",7,"Prop","Achane OVER 18.5 rush att",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"Claude",7,"Prop","1Q UNDER 7.5",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"Claude",11,"Prop","Aubrey FG Made OVER 1.5",11.00,"Cowboys vs Raiders","LOSS",0.00,-11.00],
  [11,"Claude",11,"Team Total","Cowboys TT OVER 26.5-28.5",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"Claude",11,"Prop","Longest FG UNDER 52.5",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"Gemini",1,"Spread","Patriots -12.5",4.00,"Patriots vs Jets","WIN",7.64,3.64],
  [11,"Gemini",1,"Total","UNDER 43.5",3.00,"Patriots vs Jets","WIN",5.73,2.73],
  [11,"Gemini",1,"Spread","Cardinals +3.0",4.00,"49ers vs Cardinals","LOSS",0.00,-4.00],
  [11,"Gemini",1,"Total","OVER 48.5",3.00,"49ers vs Cardinals","WIN",5.73,2.73],
  [11,"Gemini",2,"Prop","Josh Allen Anytime TD",10.00,"Bills vs Buccaneers","WIN",19.09,9.09],
  [11,"Gemini",2,"Prop","Baker Mayfield Longest Comp Over 38.5",10.00,"Bills vs Buccaneers","WIN",19.09,9.09],
  [11,"Gemini",3,"Total","OVER 49.5",11.00,"Lions vs Eagles","LOSS",0.00,-11.00],
  [11,"Gemini",4,"1H Spread","Texans 1H -3.5",11.00,"Texans vs Titans","LOSS",0.00,-11.00],
  [11,"Gemini",5,"Prop","Gadsden OVER 54.5 rec yds",11.00,"Chargers vs Jaguars","WIN",21.00,10.00],
  [11,"Gemini",5,"Prop","Oweh OVER 0.75 sacks",11.00,"Chargers vs Jaguars","LOSS",0.00,-11.00],
  [11,"Gemini",6,"Prop","Swift UNDER 65.5 rush yds",11.00,"Bears vs Vikings","WIN",21.00,10.00],
  [11,"Gemini",6,"Prop","Jefferson anytime TD",11.00,"Bears vs Vikings","LOSS",0.00,-11.00],
  [11,"Gemini",7,"Total","UNDER 47.5",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"Gemini",7,"Prop","Waddle O0.5 INT (ERROR)",0.00,"Commanders vs Dolphins","N/A",0.00,0.00],
  [11,"Gemini",7,"Prop","Achane OVER 14.5 rush att",11.00,"Commanders vs Dolphins","WIN",21.00,10.00],
  [11,"Gemini",11,"Team Total","Cowboys TT OVER 24.5",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"Gemini",11,"Prop","Longest FG OVER 44.5-45.5",11.00,"Cowboys vs Raiders","WIN",21.00,10.00],
  [11,"Gemini",11,"Prop","Prescott Pass TDs OVER 1.5-2.5",11.00,"Cowboys vs Raiders","WIN",21.00,10.00]
].map(function (row) {
  return {
    week: row[0], model: row[1], prompt: row[2], betType: row[3],
    recommendation: row[4], stake: row[5], game: row[6],
    outcome: row[7], return: row[8], pl: row[9]
  };
});

/*
 * Every prop bet below was independently re-checked against real ESPN box
 * scores (Aug 2026). The 11 entries here are ones where the "FINAL VERIFIED"
 * CSV outcome does not match the actual final stat line. Per Carlos's
 * direction: correct the live numbers, keep the original CSV figures
 * visible for transparency (bet.csvOutcome / bet.csvPl), rather than
 * silently overwrite or silently ignore.
 */
var NFL_CORRECTIONS = [
  { week: 9, model: "Gemini", prompt: 2, recommendation: "Lamar O35.5 rush yds", actual: "5 att, 14 rush yds", outcome: "LOSS", ret: 0, pl: -10.00 },
  { week: 9, model: "ChatGPT", prompt: 5, recommendation: "Stroud O1.5 pass TDs", actual: "6/10, 79 yds, 0 TD (backup role behind Davis Mills)", outcome: "LOSS", ret: 0, pl: -11.00 },
  { week: 9, model: "Claude", prompt: 5, recommendation: "Nix O205.5 pass yds", actual: "18/37, 173 pass yds", outcome: "LOSS", ret: 0, pl: -11.00 },
  { week: 9, model: "Claude", prompt: 5, recommendation: "Nik Bonitto anytime sack", actual: "1 total tackle, 0 sacks", outcome: "LOSS", ret: 0, pl: -11.00 },
  { week: 9, model: "Claude", prompt: 5, recommendation: "Sutton O58.5 rec yds", actual: "1 rec, 30 yds", outcome: "LOSS", ret: 0, pl: -11.00 },
  { week: 11, model: "ChatGPT", prompt: 2, recommendation: "James Cook over ~70 rush yds", actual: "16 att, 48 rush yds", outcome: "LOSS", ret: 0, pl: -10.00 },
  { week: 11, model: "Claude", prompt: 2, recommendation: "James Cook OVER rush yds (70.5-75.5)", actual: "16 att, 48 rush yds", outcome: "LOSS", ret: 0, pl: -10.00 },
  { week: 11, model: "Claude", prompt: 2, recommendation: "Josh Allen OVER 0.5 INTs", actual: "2 INT", outcome: "WIN", ret: 19.09, pl: 9.09 },
  { week: 11, model: "Gemini", prompt: 2, recommendation: "Baker Mayfield Longest Comp Over 38.5", actual: "28 yds (longest completion, to Sean Tucker)", outcome: "LOSS", ret: 0, pl: -10.00 },
  { week: 11, model: "Gemini", prompt: 6, recommendation: "Swift UNDER 65.5 rush yds", actual: "21 att, 90 rush yds", outcome: "LOSS", ret: 0, pl: -11.00 },
  { week: 11, model: "Claude", prompt: 1, recommendation: "Drake Maye O1.5 Pass TDs", actual: "281 pass yds, 1 TD", outcome: "LOSS", ret: 0, pl: -3.00 }
];

NFL_CORRECTIONS.forEach(function (c) {
  var bet = NFL_BETS.find(function (b) {
    return b.week === c.week && b.model === c.model && b.prompt === c.prompt && b.recommendation === c.recommendation;
  });
  if (!bet) return;
  bet.csvOutcome = bet.outcome;
  bet.csvPl = bet.pl;
  bet.csvReturn = bet.return;
  bet.actual = c.actual;
  bet.outcome = c.outcome;
  bet.return = c.ret;
  bet.pl = c.pl;
  bet.corrected = true;
});

function nflFindGame(id) {
  return NFL_GAMES.find(function (g) { return g.id === id; });
}

function nflBetsForGame(gameLabel) {
  return NFL_BETS.filter(function (b) { return b.game === gameLabel; });
}

function nflModelSummary(bets) {
  bets = bets || NFL_BETS;
  return NFL_MODELS.map(function (model) {
    var rows = bets.filter(function (b) { return b.model === model && b.outcome !== "N/A"; });
    var wins = rows.filter(function (b) { return b.outcome === "WIN"; }).length;
    var losses = rows.filter(function (b) { return b.outcome === "LOSS"; }).length;
    var pushes = rows.filter(function (b) { return b.outcome === "PUSH"; }).length;
    var pl = rows.reduce(function (sum, b) { return sum + b.pl; }, 0);
    var decided = wins + losses;
    return {
      model: model, wins: wins, losses: losses, pushes: pushes,
      totalBets: rows.length, pl: pl,
      winPct: decided ? (wins / decided) * 100 : 0
    };
  });
}

function nflBetTypeGroup(betType) {
  return betType === "Prop" || betType === "Prop Parlay" || betType === "SGP" || betType === "Team Total"
    ? "Props" : "Spread / Total / Moneyline";
}

function nflPromptSummary() {
  var key = function (b) { return b.week + "-" + b.model + "-" + b.prompt; };
  var groups = {};
  NFL_BETS.forEach(function (b) {
    var k = key(b);
    if (!groups[k]) groups[k] = { week: b.week, model: b.model, prompt: b.prompt, bets: [] };
    groups[k].bets.push(b);
  });
  return Object.keys(groups).map(function (k) {
    var g = groups[k];
    var decided = g.bets.filter(function (b) { return b.outcome !== "N/A"; });
    var wins = decided.filter(function (b) { return b.outcome === "WIN"; }).length;
    var losses = decided.filter(function (b) { return b.outcome === "LOSS"; }).length;
    var pushes = decided.filter(function (b) { return b.outcome === "PUSH"; }).length;
    var pl = decided.reduce(function (sum, b) { return sum + b.pl; }, 0);
    return { week: g.week, model: g.model, prompt: g.prompt, wins: wins, losses: losses, pushes: pushes, pl: pl, betCount: g.bets.length };
  }).sort(function (a, b) { return a.week - b.week || a.prompt - b.prompt || a.model.localeCompare(b.model); });
}
