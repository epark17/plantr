const db = require('./models');
const Vegetable = db.model('vegetable');

// Vegetable.create({
//             name: 'Cucumber',
//             color: 'Green',
//             plantedOn: new Date(2018, 3, 5)
//         });
// Vegetable.create({
//             name: 'Carrot',
//             color: 'Orange',
//             plantedOn: new Date(2018, 4, 5)
//         });
// Vegetable.create({
//             name: 'Eggplant',
//             color: 'Purple',
//             plantedOn: new Date(2018, 5, 5)
//         });

db.sync({ force: true })
    .then(() => {
        const cucumber = {
            name: 'Cucumber',
            color: 'Green',
            plantedOn: new Date(2018, 3, 5)
        };
        const carrot = {
            name: 'Carrot',
            color: 'Orange',
            plantedOn: new Date(2018, 4, 5)
        };
        const eggplant = {
            name: 'Eggplant',
            color: 'Purple',
            plantedOn: new Date(2018, 5, 5)
        };
        return Promise.all([cucumber, carrot, eggplant]).then(vegetable => Vegetable.create(vegetable));
    })
    .catch(err => {
        console.log(err.message);
    })
    .finally(() => {
        db.close();
    });
