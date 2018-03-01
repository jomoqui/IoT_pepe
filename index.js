'use strict' //te permite quitar errores como que el this no contenga información del global o que no hay reasignación de variables


const setupDatabase = require('../lib/db.js')
const setupMetricModel = require('../models/metricas.js')
const setupAgentModel = require('../models/agente.js')

module.exports = async function (config) { //como es asincrona siempre que la ejecute me devuelve una promesa

const sequelize = setupDatabase(config)
const AgentModel = setupAgentModel(config)
const MetricModel = setupMetricModel(config)


AgentModel.hasMany(MetricModel)
MetricModel.belong(AgentModel)

sequelize.authenticate()

  const Agent = {}
  const Metric = {}

  return{
    Agent,
    Metric
  }
}
