function userBuilder(name, age) {
  const nameDefault = "username";
  const ageDefault = 99;

  if (!name) name = nameDefault;
  if (!age) age = ageDefault;

  function createUser() {
    return {
      name: name,
      age: age,
    };
  }

  return createUser;
}

let userCreator1 = userBuilder("Yana", 25);
let userCreator2 = userBuilder("Alex");
let userCreator3 = userBuilder("", 25);
let userCreator4 = userBuilder();

console.log(userCreator1());
console.log(userCreator2());
console.log(userCreator3());
console.log(userCreator4());
