const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sales', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const Products = mongoose.model('products', {
    description: { type: String },
    price: { type: Number },
    category: { type: String },
    qty: { type: Number },
    createdAt: { type: Date }
});

module.exports = Products;