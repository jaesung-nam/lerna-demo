#!/usr/bin/env node

const { program } = require('commander')
const LogCore = require('overpower-log-core')
console.log("e")
// action
program.action(cmd => LogCore())

program.parse(process.argv)
