const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

const createUser = () => {
  const newFake = {
    username: faker.internet.userName(),
    userId: faker.datatype.uuid(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    phoneNumber: faker.phone.number()
  };
  return newFake;
};

const createCompany = () => {
  const newComp = {
    company: faker.company.companyName(),
    companyId: faker.datatype.uuid(),
    address: {
      street: faker.address.streetAddress(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country()
    }
  };
  return newComp
};


app.get("/api/users/new", (req, res) => {
  res.json(createUser());
});



app.get("/api/companies/new", (req, res) => {
  res.json(createCompany());
});

// app.get("/api/user/companies", (req, res) => {
//   res.json([createUser(), createCompany()]);
// });

app.get("/api/user/company", (req, res) => {

  res.json([createUser(), createCompany()]);
});
// this needs to be below the other code blocks
// app.listen( port, () => console.log(`Listening on port: ${port}`) );
app.listen(port, () => console.log(`Listening on port: ${port} HUH? `));
