const Logger = require('./logger');
const logger = new Logger();
logger.on('messageLogged',()=>{
    console.log('YEs')
})
logger.log('Kura mi qnko')
