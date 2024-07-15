module.exports = {
   up: async (queryInterface, Sequelize) => {
       await queryInterface.bulkInsert('Pets', [{
           name: 'Fido',
           age: 3,
           createdAt: new Date(),
           updatedAt: new Date()
       }], {});
   },
   down: async (queryInterface, Sequelize) => {
       await queryInterface.bulkDelete('Pets', null, {});
   }
};
