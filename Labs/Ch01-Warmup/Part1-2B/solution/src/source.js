const printInfo = require('./printHobbies');
const returnHobbiesHTML = require('./htmlHobbies');

const hobbies = [
    { name: 'volleyball', lengthInYearsAtHobby: 20 },
    { name: 'cooking', lengthInYearsAtHobby: 5},
    { name: 'swimming', lengthInYearsAtHobby: 11}
];

for (const hobby of hobbies) {
    printInfo(hobby);
}

document.getElementById("hobbiesInfo").innerHTML=returnHobbiesHTML(hobbies);



