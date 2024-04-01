const faker = require('faker');

export const formPageFixture = () => ({
    firstNameLocator: faker.random.word({ count: 8 }),
    lastNameLocator: faker.random.word({ count: 7 }),
    emailLocator: faker.internet.email(),
    mobileNumberLocator: faker.random.number({ count: 10}),
    DOBLocator: faker.date.past(30),
    subjectsLocator: faker.random.word(),
    currentAddressLocator: faker.address.streetAddress(),
});