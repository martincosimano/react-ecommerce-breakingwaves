const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config( { path: "./config/config.env"});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);

    const db = conn.connection.db;
    return db;
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// const insertProducts = async (products) => {
//   try {
//     const db = await connectDB();
//     const collection = db.collection('products');

//     const result = await collection.insertMany(products);
//     console.log(`${result.insertedCount} products inserted.`);
//   } catch (err) {
//     console.error(err);
//   }
// };

// const data = [
//   {
//     productName: 'Heavy crafted shirt',
//     productPrice: '$25.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029974/product-1_pbltho.png',
//     productCategory: 'T-Shirts',
//   },
//   {
//     productName: 'Brutia Hoodie',
//     productPrice: '$32.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029974/product-2_qwlqhp.png',
//     productCategory: 'Hoodies & Jackets',
//   },
//   {
//     productName: 'Palmero white shirt',
//     productPrice: '$29.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029974/product-3_dzivs4.png',
//     productCategory: 'T-Shirts',
//   },
//   {
//     productName: 'Anorak green jacket',
//     productPrice: '$46.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029974/product-4_pzwgqa.png',
//     productCategory: 'Hoodies & Jackets',
//   },
//   {
//     productName: 'Seaside black sweatpants',
//     productPrice: '$34.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029974/product-5_bk9wnm.png',
//     productCategory: 'Pants & Sweatpants',
//   },
//   {
//     productName: 'World industries cats deck',
//     productPrice: '$59.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029974/product-6_pdvmve.png',
//     productCategory: 'Skateboarding',
//   },
//   {
//     productName: 'Brand-x knucklehead deck',
//     productPrice: '$64.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029975/product-7_cshg6d.png',
//     productCategory: 'Skateboarding',
//   },
//   {
//     productName: 'Sword & Cookiehead deck',
//     productPrice: '$73.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029975/product-8_aajq6e.png',
//     productCategory: 'Skateboarding',
//   },
//   {
//     productName: 'Scram 3 headed lupe deck',
//     productPrice: '$67,99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685029975/product-9_cu6p0l.png',
//     productCategory: 'Skateboarding',
//   }
// ]


// insertProducts(data)

module.exports = connectDB;