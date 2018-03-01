'use strict'

const Sequelize = require ('sequelize')
const setupDatabase = require ('../lib/db')

module.export = function setupMetricModel (config){
  const sequelize = setupDatabase(config)

  return sequelize.define('Metrica', {
    type: {
      type: Sequelize.STRING,
      allownull: false
    },
    value: {
      type: Sequelize.TEXT,
      allownull: false
    },
  })
}
