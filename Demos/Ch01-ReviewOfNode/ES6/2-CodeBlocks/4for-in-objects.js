

           const student = 
                {name: 'Sarah Wiessman', 
                 email: 'sarah@email.com',
                 street: '123 Main St.',
                 city: 'Pittsburgh'
                };
           
        
           for (let prop in student) {
               console.log('student.' + prop, '=', student[prop]);
           }

        