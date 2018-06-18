const db = require('./models');

db.sync({ force: true })
    .then(() => {
        console.log('connection successful')
    })
    .catch(err => {
        console.log(err.message)
    })
    .finally(() => {
        db.close();
    })