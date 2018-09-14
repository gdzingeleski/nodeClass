let myHobbies =[
    {name:"astronomy",lengthInYearsAtHobby:"13000000000"},
    {name:"woodworking",lengthInYearsAtHobby:"30"},
    {name:"video games",lengthInYearsAtHobby:"45"}
];

printHobbyInfo = function(hobby){
        years = hobby.lengthInYearsAtHobby;
        console.log(`${hobby.name} for ${hobby.lengthInYearsAtHobby} years`);
}

myHobbies.forEach(element => {
    printHobbyInfo(element);
});

myHobbies.sort( (a,b) =>
{
    if( a.name > b.name){
        return 1;
    } else if( a.name < b.name){
        return -1;
    } else {
        return 0;
    }
});

myHobbies.forEach(element => {
    printHobbyInfo(element);
});
console.log('sort by')
myHobbies.sort( (a,b) =>
{
   return a.lengthInYearsAtHobby - b.lengthInYearsAtHobby;
});

myHobbies.forEach(element => {
    printHobbyInfo(element);
});

