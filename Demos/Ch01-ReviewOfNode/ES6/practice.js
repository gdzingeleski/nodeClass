        const sportsArray = [
                    { name: 'volleyball', duration: 'matches' },
                    { name: 'baseball', duration: 'innings'},
                    { name: 'football', duration: 'quarters'}
                ];


        function printSportInfo(sport) {
            console.log(` ${sport.name} is played in ${sport.duration} 
                         `)
        }

        printSportInfo(sportsArray[0]);
        printSportInfo(sportsArray[1]);
        printSportInfo(sportsArray[2]);

        console.log('****');

        for (const sport of sportsArray) {
            printSportInfo(sport);
        }