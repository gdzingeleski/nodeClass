const sportsArray = [
    { name: 'volleyball', duration: 'matches' },
    { name: 'baseball', duration: 'innings'},
    { name: 'hockey', duration: 'periods'}
];


function printSportsInfo(sport) {
console.log(` ${sport.name} is played in ${sport.duration}.`)
}

for (const sport of sportsArray) {
    printSportsInfo(sport);
}
