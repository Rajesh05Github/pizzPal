const mongoose = require("mongoose");

const pizzaSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      varients: {
        type: [String],
        required: true
      },
      prices: {
        type: Object, 
        required: true
      },
      category: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }, {
    timestamps: true
});

const pizzaModal = mongoose.model("pizzas", pizzaSchema);

module.exports = pizzaModal;
