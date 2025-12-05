const findTheOldest = function (people) {
  const sortByAge = people.sort((a, b) => getPersonAge(b) - getPersonAge(a));
  return sortByAge[0];
};

function getPersonAge(person) {
  if (person.yearOfDeath) {
    return person.yearOfDeath - person.yearOfBirth;
  } else {
    const today = new Date();
    const currentYear = today.getFullYear();
    return currentYear - person.yearOfBirth;
  }
}

// Do not edit below this line
module.exports = findTheOldest;
