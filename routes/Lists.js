const router = require('express').Router()
const List = require('../models/List')

router.get("/todolists", async (req, res) => {
  try {
    const todoLists = await List.find()
    res.status(200).json(todoLists)
  } catch (error) {
    res.status(500).json(error);
  }
})

router.post("/todolists", async(req, res) => {
  try {
    await List.findOneAndUpdate(
      {_id: req.body.id},
      {
        $set: {
          todos: req.body.todos
        }
      }
    )
    res.status(200).json();
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router