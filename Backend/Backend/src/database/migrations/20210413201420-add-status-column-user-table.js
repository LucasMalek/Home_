'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    return queryInterface.addColumn(
      'users',
      'status',
      {
        type: Sequelize.BOOLEAN
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
       'users',
       'status',
     );
  }
};
