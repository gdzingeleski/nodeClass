
            var name1 = 'Alice' ;
            let name2 = 'Bob' ;
            console.log( 'Global ' + name1 ) ;
            console.log( 'Global ' + name2 ) ;

            {
                var name3 = 'Clare' ;
                let name4 = 'Danny' ;
                console.log( 'Local ' + name3 ) ;
                console.log( 'Local ' + name4 ) ;
            }
            console.log( 'Global ' + name3 ) ;
            //console.log( 'Global ' + name4 ) ;

            function printName1() {
                var name5 = 'Emma' ;
                let name6 = 'Frank' ;
                function printName2() {
                    var name7 = 'Greta' ;
                    let name8 = 'Harold' ;
                    console.log( 'Inner ' + name5 ) ;
                    console.log( 'Inner ' + name6 ) ;
                }
                printName2() ;
                console.log( 'Inner ' + name7 ) ;
                console.log( 'Inner ' + name8 ) ;
            }
            printName1() ;
       