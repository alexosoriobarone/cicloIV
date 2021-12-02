const express = require('express');
const router = express.Router();
const Products = require('../db/connect');
router.get('/api/v1/products', function(req, res) {
    Products.find({}, null, { sort: { description: 1 }, limit: 10 }, function(err, result) {
        if (!err) {

            res.json(result);

        } else {
            res.json({ error: err });
        }
    });
});
router.get('/api/v1/products/viewpro', function(req, res) {
    res.render('products/prod_view', { titulo: 'Add Product' });
});
router.get('/api/v1/products/:id', function(req, res) {
    const { id } = req.params;
    Products.find({ _id: id }, function(err, result) {
        if (!err) {
            res.json(result);
        } else {
            res.json({ error: err });
        }
    });




});


router.post('/api/v1/products/add', function(req, res) {

    const prods = new Products(req.body);
    console.log(prods);
    prods.save((err, pro) => {
        if (!err) {
            res.json({ status: 'Producto creado con exito' });
        } else {
            res.json({ status: err });
        }
    });



});
router.put('/api/v1/products/update/:id', function(req, res) {
    const { id } = req.params;
    const { description, price, category, qty } = req.body;

    Products.updateOne({ _id: id }, {
        $set: {
            description: description,
            price: price,
            category: category,
            qty: qty
        }
    }, function(err, pro) {
        if (!err) {
            res.json({ status: 'Actualización exitosa' });
        } else {
            res.json({ status: err });
        }
    });

});
router.delete('/api/v1/products/remove/:id', function(req, res) {
    const { id } = req.params;
    Products.deleteOne({ _id: id }, function(err, pro) {
        if (!err) {
            res.json({ status: 'Producto borrado...' });
        } else {
            res.json({ status: err });
        }
    });

});
module.exports = router;