const sportsArray = [
    { name: 'volleyball', duration: 'matches' },
    { name: 'baseball', duration: 'innings' },
    { name: 'football', duration: 'quarters' },
    { name: 'hockey', duration: 'periods' }
];

function logSports() {
    sportsArray.forEach(sport => {
        console.log(`  ${sport.name} is played in ${sport.duration} 
        `)
    });
}

function returnSportsHTML() {
    let sportsInfo = '';
    sportsArray.forEach(sport => {
        sportsInfo += (` ${sport.name} is played in ${sport.duration} 
        <br>  `);
    });

    return sportsInfo;
}


