const buildings = require('./buildings');
const date = Date.now();

module.exports = {
  aaron: {
    id: 0,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    firstName: "Aaron",
    lastName: "Klinker",
    buildingId: buildings.bank.id,
  },
  tanner: {
    id: 1,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    firstName: "Tanner",
    lastName: "England",
    buildingId: buildings.bank.id,
  },
  isaiah: {
    id: 2,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    firstName: "Isaiah",
    lastName: "Walker",
    buildingId: buildings.random.id,
  },
  jonathan: {
    id: 3,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    firstName: "Jonathan",
    lastName: "Stoner",
    buildingId: buildings.hyvee.id,
  },
  luke: {
    id: 4,
    createdAt: date,
    updatedAt: date,
    deletedAt: date,
    firstName: "Luke",
    lastName: "Klinker",
    buildingId: buildings.bank.id,
  },
};
