const houses = require("./db.json");

let nextHouseID = houses.length + 1;

module.exports = {
  getHouses(req, res) {
    res.status(200).send(houses);
  },

  deleteHouse(req, res) {
    const id = parseInt(req.params.id, 10);
    const idToDelete = (element) => element.id === id;
    const index = houses.findIndex(idToDelete)
    houses.splice(index, 1);

    res.status(200).send(houses);
  },

  createHouse(req, res) {
    const { address, price, imageURL } = req.body;

    const newHouse = {
      id: nextHouseID,
      address,
      price,
      imageURL,
    };

    houses.push(newHouse);

    nextHouseID += 1;
    res.status(200).send(houses);
  },

  updateHouse(req, res) {
    const id = parseInt(req.params.id, 10);
    const { type } = req.body;
    const indexToUpdate = (element) => element.id === id;
    const houseToUpdate = houses[houses.findIndex(indexToUpdate)]
    let originalPrice = parseInt(houseToUpdate.price, 10)

    switch (type) {
      case "plus":
        houseToUpdate.price = originalPrice += 10000
        break;
      case "minus":
        houseToUpdate.price = originalPrice -= 10000
        break;
    }
    res.status(200).send(houses)
  },
};
