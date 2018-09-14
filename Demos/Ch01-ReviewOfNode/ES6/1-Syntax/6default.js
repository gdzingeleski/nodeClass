
            function getText() {
                return "Hello" ;
            }

            function getText() {
                return "Bonjour" ;
            }

            console.log( getText() ) ;

            const Person = {
                "firstName": "Carole",
                "lastName": "King",
                "fullName": function() {
                    return this.firstName + ' ' + this.lastName ;
                }
            }

            const numbers = new Array( 1, 2, 3, 4, 5 ) ;
            console.log( 'Numbers length ' + numbers.length ) ;

            

            console.log( "Person " + Person.fullName() ) ;

            function multiply1( a, b ) {
                b = typeof b !== 'undefined' ? b : 2 ;
                return a * b ;
            }

            console.log( multiply1( 5 ) ) ;

            function multiply2( a, b = 2 ) {
                return a * b ;
            }

            console.log( multiply2( 5 ) ) ;
