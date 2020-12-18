const Cart = require("../models/cart");

exports.addItemToCart = (req, res) => {
  Cart.findOne({ user: req.user._id }).exec((err, data) => {
    if (err) {
      return res.status(400).json({ err });
    }
    if (data) {
      const product = req.body.cartItems.product;

      const item = data.cartItems.find((i) => i.product == product);

      let condition, update;

      if (item) {
        condition = {
          user: req.user._id,
          "cartItems.product": product,
        };
        update = {
          $set: {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          },
        };
      } else {
        condition = { user: req.user._id };
        update = {
          $push: {
            cartItems: req.body.cartItems,
          },
        };
      }
      Cart.findOneAndUpdate(condition, update).exec((err, data) => {
        console.log(`Different Product ${data}`);

        if (err) {
          return res.status(400).json({ err });
        }
        if (data) {
          return res.status(200).json({ data });
        }
      });
    } else {
      const cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      cart.save((err, data) => {
        if (err) {
          return res.status(400).json({
            err,
          });
        }
        if (data) {
          return res.status(200).json(data);
        }
      });
    }
  });
};
