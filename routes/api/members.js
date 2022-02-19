const express = require('express');
const router = express.Router();
const members = require('../../Members');

// This route gets all members
router.get('/', (req, res) => res.json(members));

// This route gets a single member
router.get('/:id', (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
    res.json(members.filter(member => member.id === parseInt(req.params.id)));
} else {
    res.status(400).json({ msg: `No member ID ${req.params.id} found.`});
}
});

// Create Member
router.post('/', (req, res) => {
    res.send(req.body);
});

module.exports = router;