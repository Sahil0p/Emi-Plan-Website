import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "../models/Product.js";
import EMIPlan from "../models/EMIPlan.js";

dotenv.config();

await mongoose.connect(process.env.MONGO_URI);

const seedDatabase = async () => {
  try {
    await Product.deleteMany();
    await EMIPlan.deleteMany();

const products = await Product.insertMany([
{
  name: "Apple iPhone 17 Pro",
  slug: "iphone-17-pro",
  brand: "Apple",
  mrp: 134900,
  price: 127400,
  variants: [
    {
      color: "Silver",
      storage: "128GB",
      image: [
        "https://m.media-amazon.com/images/I/31GfxTrNXxL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61JmJ3L90ML._SX679_.jpg",
        "https://m.media-amazon.com/images/I/81pFrOzKE-L._SX679_.jpg"
      ]
    },
    {
      color: "Black",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/618vU2qKXQL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71FKiQAdCKL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/91JZmCrB9aL._SX679_.jpg"
      ]
    },
    {
      color: "Cosmic Orange",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/71JGCn1z1TL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71g5oEE256L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/917GUQT35bL._SX679_.jpg"
      ]
    }
  ]
},

{
  name: "Samsung Galaxy S25 Ultra",
  slug: "samsung-s24-ultra",
  brand: "Samsung",
  mrp: 129999,
  price: 119999,
  variants: [
    {
      color: "Titanium",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/41bebCedPML._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71NDSpgJbSL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71N4mLUnBqL._SL1500_.jpg"
      ]
    },
    {
      color: "Black",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/71iZ+fdoI9L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71EZDVoDQ2L._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71fEZVQDVjL._SL1500_.jpg"
      ]
    }
  ]
},

{
  name: "Google Pixel 9 Pro",
  slug: "pixel-9-pro",
  brand: "Google",
  mrp: 99999,
  price: 94999,
  variants: [
    {
      color: "Obsidian",
      storage: "128GB",
      image: [
        "https://m.media-amazon.com/images/I/51qG7EM6MZL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/41SqdepK9cL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/31bPLy2q2LL._SX679_.jpg"
      ]
    },
    {
      color: "Rose Quartz",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/51qtEpKP37L._SX569_.jpg",
        "https://m.media-amazon.com/images/I/31Zs29WKRSL.jpg",
        "https://m.media-amazon.com/images/I/31rc3aK6olL._SY679_.jpg"
      ]
    },
    {
      color: "Blue",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/41-eyvGzycL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/21bL5yIhvrL.jpg"
      ]
    }
  ]
},

{
  name: "OnePlus 12",
  slug: "oneplus-12",
  brand: "OnePlus",
  mrp: 69999,
  price: 64999,
  variants: [
    {
      color: "Black",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/715k0WQtg9L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61A+bgJ2jmL._SX679_.jpg"
      ]
    },
    {
      color: "Emerald",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/41mThspAiiL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://rukminim2.flixcart.com/image/1676/1676/xif0q/mobile/s/a/m/12-5g-op12-5g-oneplus-original-imagxgt7mawsybzm.jpeg?q=90",
        "https://rukminim2.flixcart.com/image/1676/1676/xif0q/mobile/u/c/5/12-5g-op12-5g-oneplus-original-imagxgt7xutau7sg.jpeg?q=90"
      ]
    },
    
    {
      color: "Silver",
      storage: "1TB",
      image: [
        "https://rukminim2.flixcart.com/image/1676/1676/xif0q/mobile/v/g/m/12-cph2573-oneplus-original-imahk47dwgquvv8z.jpeg?q=90",
        "https://rukminim2.flixcart.com/image/1676/1676/xif0q/mobile/p/t/v/12-cph2573-oneplus-original-imahk47dnmfj3f7d.jpeg?q=90",
        "https://rukminim2.flixcart.com/image/1676/1676/xif0q/mobile/s/n/k/12-cph2573-oneplus-original-imahk47drrgrrx3y.jpeg?q=90"
      ]
    }
  ]
},

{
  name: "iQOO 12",
  slug: "iqoo-12",
  brand: "iQOO",
  mrp: 59999,
  price: 54999,
  variants: [
    {
      color: "White",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/41rlSF4umFL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/61UqQ+zXz7L._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61GJilYqwKL._SX679_.jpg"
      ]
    },
    {
      color: "Black",
      storage: "512GB",
      image: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi9IKZo44hrIyTlX-6gT9SC8uMNt3dO0YeBA&s",
        "https://riggear-web-images.s3.ap-south-1.amazonaws.com/UploadImages/1682775a-044d-4ea9-95d1-351c7cdfe1b1_full.png"
      ]
    },
    {
      color: "Red",
      storage: "1TB",
      image: [
        "https://m.media-amazon.com/images/I/61g58sGWntL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61hxQtAHwcL._SX679_.jpg"
      ]
    }
  ]
},

{
  name: "Nothing Phone (3A)",
  slug: "nothing-phone-3a",
  brand: "Nothing",
  mrp: 49999,
  price: 44999,
  variants: [
    {
      color: "Black",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/51i62wt4cLL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61z7L-CrjYL._SX569_.jpg",
        "https://m.media-amazon.com/images/I/61MhZF+DLPL._SX679_.jpg"
      ]
    },
    {
      color: "White",
      storage: "128GB",
      image: [
        "https://m.media-amazon.com/images/I/41bPQMcRflL.jpg"
      ]
    },
    
    {
      color: "Blue",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/417LpPEkRVL.jpg",
        "https://m.media-amazon.com/images/I/41CVTANZNzL.jpg"
      ]
    }
  ]
},

{
  name: "Redmi Note 14 Pro",
  slug: "redmi-note-14-pro",
  brand: "Xiaomi",
  mrp: 74999,
  price: 69999,
  variants: [
    {
      color: "Black",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/71532VSTXdL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/51t8pVhXaeL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/71RFbY93JLL._SL1280_.jpg"
      ]
    },
    {
      color: "Blue",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/71DsX0zIwRL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/41cjiQJ3XcL._SY679_.jpg",
        "https://m.media-amazon.com/images/I/71Shk9qlCIL._SL1500_.jpg"
      ]
    },
    {
      color: "Silver",
      storage: "1TB",
      image: [
        "https://m.media-amazon.com/images/I/819WhrgMP+L._SX679_.jpg"
      ]
    }
  ]
},

{
  name: "Realme GT 6",
  slug: "realme-gt-6",
  brand: "Realme",
  mrp: 36999,
  price: 32999,
  variants: [
    {
      color: "Black",
      storage: "256GB",
      image: [
        "https://m.media-amazon.com/images/I/41Z-uwU7naL._SY300_SX300_QL70_FMwebp_.jpg",
        "https://m.media-amazon.com/images/I/71Fa3vpb3wL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/61pWT+Mam7L._SL1500_.jpg"
      ]
    },
    
    {
      color: "Silver",
      storage: "512GB",
      image: [
        "https://m.media-amazon.com/images/I/71Cnw4w17dL._SX679_.jpg",
        "https://m.media-amazon.com/images/I/61sDJKdmNhL._SL1500_.jpg",
        "https://m.media-amazon.com/images/I/51bXqqAND4L._SL1500_.jpg"
      ]
    }
  ]
}
]);
    const emiPlans = [];

    products.forEach((product) => {
      const tenures = [3, 6, 12, 24, 36, 48, 60];

      tenures.forEach((tenure) => {
        emiPlans.push({
          productId: product._id,
          tenure,
          monthlyPayment: Math.round(product.price / tenure),
          interestRate: tenure <= 24 ? 0 : 10.5,
          cashback: 7500,
        });
      });
    });

    await EMIPlan.insertMany(emiPlans);

    console.log("Database Seeded Successfully");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedDatabase();