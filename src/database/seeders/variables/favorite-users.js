const users = require('./users');
const date = Date.now();

module.exports = {
  aaronTanner: {
    id: 0,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    userId: users.aaron.id,
    favoritedUserId: users.tanner.id,
  },
  aaronLuke: {
    id: 1,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    userId: users.aaron.id,
    favoritedUserId: users.luke.id,
  },
  aaronIsaiaah: {
    id: 2,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    userId: users.aaron.id,
    favoritedUserId: users.isaiah.id,
  },
  tannerAaron: {
    id: 3,
    createdAt: date,
    updatedAt: date,
    deletedAt: date,
    userId: users.tanner.id,
    favoritedUserId: users.aaron.id,
  },
  tannerLuke: {
    id: 4,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    userId: users.tanner.id,
    favoritedUserId: users.luke.id,
  },
  tannerIsaiah: {
    id: 5,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    userId: users.tanner.id,
    favoritedUserId: users.isaiah.id,
  },
  isaiahTanner: {
    id: 6,
    createdAt: date,
    updatedAt: date,
    deletedAt: null,
    userId: users.isaiah.id,
    favoritedUserId: users.tanner.id,
  },
}