

           for (let index = 0; index <= 5; index++) {
                console.log("At index: " + index);
           }

           const pets = [
                {name: 'Birdy', type: 'cat'},
                {name: 'Roxy', type: 'dog'}
           ]
        
           for (let index = 0; index < pets.length; index++) {
               console.log(index);
               console.log(pets[index].name + " is a " + pets[index].type);
           }
