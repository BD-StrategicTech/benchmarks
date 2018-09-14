'use strict'

const { dependencies } = require('../package')

const packages = {
  'bare': { version: '8.12.0' },
  'connect': {},
  'connect-router': { extra: true, package: 'router', hasRouter: true },
  'express': { hasRouter: true },
  'express-route-prefix': { extra: true, package: 'express', hasRouter: true },
  'express-with-middlewares': { extra: true, package: 'express', hasRouter: true },
  'fastify': { checked: true, hasRouter: true },
  'fastify-big-json': { extra: true, package: 'fastify', hasRouter: true },
  'hapi': { hasRouter: true },
  'koa': {},
  'koa-router': { extra: true, hasRouter: true },
  'restify': { hasRouter: true }
}

let choices = []
Object.keys(packages).forEach((pkg) => {
  if (!packages[pkg].version) {
    const version = dependencies[pkg] || dependencies[packages[pkg].package] || ''
    packages[pkg].version = version.replace('^', '')
  }
  choices.push(pkg)
})

module.exports = {
  choices: choices.sort(),

  list: (extra = false) => {
    return choices.map((c) => {
      return extra === !!packages[c].extra ? Object.assign({}, packages[c], { name: c }) : null
    }).filter(c => c)
  },

  info: (module) => {
    return packages[module]
  }
}
