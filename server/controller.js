module.exports = {
  getItems: (req,res) =>{
    const db = req.app.get('db');

    db.get_all_items()
    .then(dbres => {
      res.status(200).send(dbres)
    })
    .catch(err => console.log(err))
  },
  addItem: (req,res) =>{
    const db = req.app.get('db');
    const {itemName, itemSize } = req.body;

    db.insert_item(itemSize, itemName)
    .then(dbres =>(
      res.status(200).send(dbres)
    ))
    .catch(err => console.log(err))
  }
}