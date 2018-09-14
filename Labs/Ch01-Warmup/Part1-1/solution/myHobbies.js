const myHobbies = [
    { name: 'cooking', lengthInYearsAtHobby: 15 },
    { name: 'essential oils', lengthInYearsAtHobby: 6 },
    { name: 'volleyball', lengthInYearsAtHobby: 20 },
    { name: 'swimming', lengthInYearsAtHobby: 11 }
];


function printHobbyInfo(hobby) {
    console.log(` ${hobby.name} has been an interest for ${hobby.lengthInYearsAtHobby} years`)
}

for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}

myHobbies.sort((a, b) => {
    if (a.name < b.name) { return -1; }
    else if (a.name > b.name) { return 1; }
    else { return 0; }
})

console.log('alpha sort')

for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}

console.log('years')

myHobbies.sort((a, b) => {
    return a.lengthInYearsAtHobby - b.lengthInYearsAtHobby;
})


for (const hobby of myHobbies) {
    printHobbyInfo(hobby);
}
