
            let counter = 0 ;
            do {
                console.log( "Counter: " + counter++ ) ;
            } while ( counter <= 5 ) ;

            let numbers = [1, 3, 5, 7, 9] ;
            for ( const value of numbers ) {
                console.log( value ) ;
            }

            let text = "Hello Wo›rld" ;
            for ( const letter of text ) {
                if ( letter == 'o' ) {
                    continue ;
                }
                console.log( letter ) ;
            }

            text = "The morning is upon us" ;
            console.log( text.slice() ) ;
            console.log( text.slice( -4 ) ) ;
            console.log( text.slice( -4, -1 ) ) ;
            console.log( text.slice( 0, -3 ) ) ;
       