
            /*
            Everything in between the stars and 
            slashes is a comment.
            */

            console.groupCollapsed('Declarations and Initialization...');
            let x = 3; // console.log(typeof x);
            x = 'abc'; // console.log(typeof x);
            x = true; // console.log(typeof x);
            
            let y;   console.log(typeof y);
            y = null; console.log(typeof y);
            console.groupEnd();

            //undefined and null
            console.groupCollapsed('Undefined')
            var abc;
            console.log(abc);
            console.groupEnd();

            console.groupCollapsed('Numbers...');
            let z = 3.13; console.log(typeof z);
            let divideByZero = (z/+0);  console.log('(z/+0)=' + divideByZero);
                divideByZero = (z/-0);  console.log('(z/-0)=' +divideByZero);

            let bigNum = Number.MAX_VALUE; 
            let tryBigger = bigNum * 2; console.log("Too big? " + tryBigger);

          



        //     let smallNum = Number.MIN_VALUE;
        //     let trySmaller = (smallNum * 200); console.log("Too Small? " +trySmaller);
        //     console.groupEnd();

        //     console.groupCollapsed('strings...');

        //     let dblQuoteString = "Isn't it nice that I can contain single quotes";
        //     let singleQuoteString = 'Well, you may "think" that\'s cool...';
        //     console.log(dblQuoteString);
        //     console.log(singleQuoteString);
        //     console.groupEnd();

        //     const lowerString = "abc";
        //     const upperString = "ABC";

        //     console.group('Strings');
        //     console.log(lowerString == upperString);
           
        //     console.groupCollapsed('Template literals...');
        //     let name="Remembrance O'Neal";
        //     let myString = `        'Single' and "Double" quotes work
        //         Backticks allow other variables to be referenced: name= ${name}
        //         Line ${2+1}  Expressions can be evaluated
        //     `;
        //     console.log(myString);
        //     console.log("See more at: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals");
        //     console.groupEnd();

        //   console.groupCollapsed('Booleans...');
        // //truthy or falsy
        // console.log('abc');
        // console.log('is the true?' + Boolean('hello'));
        // console.log('is the true?' + Boolean(''));
        // console.groupEnd();
        