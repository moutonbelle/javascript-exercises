const findTheOldest = function(people) {
    return people
        .map(person => {
                person.age = (("yearOfDeath" in person) ? person.yearOfDeath : new Date().getFullYear()) - person.yearOfBirth;
                return person;
            })
        .sort((a, b) => b.age - a.age)
        [0];
};

// Do not edit below this line
module.exports = findTheOldest;
