const faker = require("faker/locale/pt_BR");
const moment = require("moment");
const users = [];
const cities = [
  "Belo Horizonte",
  "São Paulo",
  "Juiz de Fora",
  "Rio de Janeiro",
  "Terezina",
  "São João Del Rei"
];
for (let i = 0; i < 100; ++i) {
  /*
    
    {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    findName: faker.name.findName(),
    jobTitle: faker.name.jobTitle(),
    prefix: faker.name.prefix(),
    suffix: faker.name.suffix(),
    title: faker.name.title(),
    jobDescriptor: faker.name.jobDescriptor(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType()
  }
    */
  users.push(
    `insert into users(name, email, birtDate, city) values ('${faker.name.firstName()}','${faker.internet
      .email()
      .toLocaleLowerCase()}', '${moment(faker.date.past()).format(
      "Y-MM-DD"
    )}', '${cities[Math.floor(Math.random() * cities.length)]}')`
  );
}
console.log(`
create table if not exist users
${users.join("\n")}
`);
