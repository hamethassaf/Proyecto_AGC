const express = require('express');
const router = express.Router();

const Person = require('../../models/Person');

// GET
router.get('/', async (req, res) => {
    const persons = await Person.find();
    console.log(persons);
    res.json(persons);
});

router.get('/:id', async(req, res) =>{
    const person = await Person.findById(req.params.id);
    res.json(person);
});

// POST
router.post('/', async (req, res) => {

    const { commune, neighborhood, address, name, phone, description, document, voting, table, state } = req.body;
    const person = new Person({ commune, neighborhood, address, name, phone, description, document, voting, table, state });
    await person.save();
    console.log(person);
    res.json({ status: 'Person Saved' });
});

// PUT
router.put('/:id', async (req, res) => {
    const { commune, neighborhood, address, name, phone, description, document, voting, table, state } = req.body;
    const newPerson = { commune, neighborhood, address, name, phone, description, document, voting, table, state };
    await Person.findByIdAndUpdate(req.params.id, newPerson);
    res.json({status: "Person Updated"});
});

// DELETE
router.delete('/:id', async (req, res) =>{
    await Person.findByIdAndRemove(req.params.id);
    res.json({status: "Person Deleted"});
})

module.exports = router;