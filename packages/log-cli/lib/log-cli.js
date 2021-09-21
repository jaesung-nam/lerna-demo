#!/usr/bin/env node

const { program } = require('commander')
const LogCore = require('overpowerman-log-core')
console.log("e")
// action
program.action(cmd => LogCore())

program.parse(process.argv)
