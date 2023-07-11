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
//     id: 1,
//     productName: 'Palmero white shirt',
//     productPrice: '33.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029974/product-3_dzivs4.png',
//     productCategory: 't-shirts',
//   },
//   {
//     id: 2,
//     productName: 'Brutia Hoodie',
//     productPrice: '32.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029974/product-2_qwlqhp.png',
//     productCategory: 'hoodies-&-jackets',
//   },
//   {
//     id: 3,
//     productName: 'Heavy crafted shirt',
//     productPrice: '35.00',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029974/product-1_pbltho.png',
//     productCategory: 't-shirts',
//   },
//   {
//     id: 4,
//     productName: 'Anorak green jacket',
//     productPrice: '46.00',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029974/product-4_pzwgqa.png',
//     productCategory: 'hoodies-&-jackets',
//   },
//   {
//     id: 5,
//     productName: 'Seaside black sweatpants',
//     productPrice: '49.00',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029974/product-5_bk9wnm.png',
//     productCategory: 'pants-&-sweatpants',
//   },
//   {
//     id: 6,
//     productName: 'World industries cats deck',
//     productPrice: '59.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029974/product-6_pdvmve.png',
//     productCategory: 'skateboarding',
//   },
//   {
//     id: 7,
//     productName: 'Brand-x knucklehead deck',
//     productPrice: '64.00',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029975/product-7_cshg6d.png',
//     productCategory: 'skateboarding',
//   },
//   {
//     id: 8,
//     productName: 'Sword & Cookiehead deck',
//     productPrice: '73.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029975/product-8_aajq6e.png',
//     productCategory: 'skateboarding',
//   },
//   {
//     id: 9,
//     productName: 'Scram 3 headed lupe deck',
//     productPrice: '67.99',
//     productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1680029975/product-9_cu6p0l.png',
//     productCategory: 'skateboarding',
//   },
//   {
//   id: 10,
//   productName: 'Classic Aphrodite Hat',
//   productPrice: '28.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925268/product-10_b9zqtv.png',
//   productCategory: 'accesories',
// },
// {
//   id: 11,
//   productName: 'Dark Wave Hat',
//   productPrice: '23.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925268/product-11_fas6wy.png',
//   productCategory: 'accesories',
// },
// {
//   id: 12,
//   productName: 'Bucket Hat',
//   productPrice: '31.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925268/product-12_ammrl5.png',
//   productCategory: 'accesories',
// },
// {
//   id: 13,
//   productName: 'Authentic Slim Pants',
//   productPrice: '57.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925269/product-13_qocray.png',
//   productCategory: 'pants-&-sweatpants',
// },
// {
//   id: 14,
//   productName: 'Crew Pullover',
//   productPrice: '72.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685931905/product-14_itp6la.png',
//   productCategory: 'hoodies-&-jackets',
// },
// {
//   id: 15,
//   productName: 'Sunrise Hoodie',
//   productPrice: '70.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925268/product-15_yw3czb.png',
//   productCategory: 'hoodies-&-jackets',
// },
// {
//   id: 16,
//   productName: 'Crew Custom White',
//   productPrice: '78.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925269/product-16_maxn1t.png',
//   productCategory: 'hoodies-&-jackets',
// },
// {
//   id: 17,
//   productName: 'Crew Custom Black',
//   productPrice: '75.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925269/product-17_f3vpev.png',
//   productCategory: 'hoodies-&-jackets',
// },
// {
//   id: 18,
//   productName: 'Zeneidas T-shirt',
//   productPrice: '43.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925269/product-18_fjwniq.png',
//   productCategory: 't-shirts',
// },
// {
//   id: 19,
//   productName: 'Terra Classic T-Shirt',
//   productPrice: '41.00',
//   productImage: 'https://res.cloudinary.com/dx5ndnahy/image/upload/v1685925269/product-19_snqe79.png',
//   productCategory: 't-shirts',
// },
// ]


// insertProducts(data)

module.exports = connectDB;