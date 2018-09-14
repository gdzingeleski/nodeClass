
            function printStars() {
                    console.log('**************');
            }

            printStars();

            function printFullName(localFirstName, localLastName) {
                    localFirstName = "Dr. " + localFirstName;
                    console.log(localFirstName + ' ' + localLastName);
            }

            firstName = 'Bob';
            lastName = 'Williams';
            printFullName(firstName, lastName);
            console.log('after function call, name is ' + firstName);


            function returnFullName(firstName, lastName) {
                    return (firstName + ' ' + lastName);
            }

            const fullName = returnFullName('Jackie', 'Chan');

            console.log(fullName);
          