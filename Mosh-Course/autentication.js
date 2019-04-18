function autentication(req,res,next){
    console.log('Autenticating...')
    next();
}

module.exports = autentication;