const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email()
}).with('username', 'birthyear').without('password', 'access_token');

// Return result.
const result = Joi.validate({ username: 'abc', birthyear: 1994 }, schema);
console.log(JSON.stringify(result));

// Return result.
const result2 = 
        Joi.validate({ username: 'abc', birthyear: 1111 }
                , schema);
console.log(JSON.stringify(result2));

console.log(`*******`);
// You can also pass a callback which will be called synchronously with the validation result.
Joi.validate({ username: 'abc', birthyear: 1994 }, 
    schema, 
    function (err, value) {console.log(`err is ${err} `);  
    // err === null -> valid

// console.log(`*******`);
// Joi.validate({ username: 'abc', birthyear: 2015 }, 
//     schema, 
//     function (err, value) {console.log(`err is ${err} `);  

