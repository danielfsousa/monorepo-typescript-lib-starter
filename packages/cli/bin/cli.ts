#!/usr/bin/env node

import program from 'commander'
import { add, ms, subtract } from '@danielfsousa/core'
import { printHelp } from '../src/utils'
import { version } from '../package.json'

program.name('cli').version(version)

program
  .command('add <a> <b>')
  .description('adds two numbers')
  .action((a: string, b: string) => console.log(add(Number(a), Number(b))))
  .on('--help', () => printHelp('add 1 2'))

program
  .command('subtract <a> <b>')
  .description('subtracts two numbers')
  .action((a: string, b: string) => console.log(subtract(Number(a), Number(b))))
  .on('--help', () => printHelp('subtract 3 1'))

program
  .command('ms <string>')
  .description('converts a string to milliseconds')
  .action((str: string) => console.log(ms(str)))
  .on('--help', () => printHelp('ms "3 hours"'))

program.parse(process.argv)
