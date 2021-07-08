const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes')

//Cutomizing yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note Body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command:'remove',
    describe:'Removes a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create read command
yargs.command({
    command:'read',
    describe:'Reads a note',
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        }
    },
    handler(){
        console.log('Reading Note...')
    }
})

//Create list command
yargs.command({
    command:'list',
    describe:'Lists Notes',
    handler(){
        notes.listNotes()
    }
})

yargs.parse()