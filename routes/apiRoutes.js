const fs = require ('fs')
const router = require('express').Router();
const path = require('path');
const db = require ('../db/db.json')
const { v4: uuidv4 } = require('uuid');
router.get("/api/notes",(req,res) => {
   // res.send("")
   //console.log (db)
   res.json(db)
})

router.post('/api/notes', (req,res)=>{
const newNote = req.body
newNote.id = uuidv4(); 
//console.log (newNote)
db.push (newNote)
console.log (db)
fs.writeFileSync('./db/db.json', JSON.stringify(db))
res.json(db)
})

module.exports = router;