const EventEmitter = require('events');

// Register a listener

const Logger = require('./logger');
const logger = new Logger();

logger.on('messageLogged',({id,url})=>{
    console.log(`${id} , ${url}`)
})
logger.on('deletedApp',({id,url})=>{
    console.log(`${id} , ${url}`)
})

logger.log('message'); 