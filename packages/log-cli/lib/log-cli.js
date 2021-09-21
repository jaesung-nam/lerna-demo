#!/usr/bin/env node

const { program } = require('commander')
const LogCore = require('overpowerr-log-core')
console.log("e2222")
// action
program.action(cmd => LogCore())

program.parse(process.argv)
