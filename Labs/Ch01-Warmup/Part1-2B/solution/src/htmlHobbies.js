function returnHobbiesHTML(hobbiesArray) {
    let hobbyInfo = `
        <ul>
    `;
    hobbiesArray.forEach(hobby => {
        hobbyInfo+= `<li>${hobby.name} ${hobby.lengthInYearsAtHobby}</li>`;
        });
        hobbyInfo+=`</ul>`;
    return hobbyInfo;
}

module.exports = returnHobbiesHTML;