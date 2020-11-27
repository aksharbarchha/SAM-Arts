// Seller.JS file to maintain every sellers details and storing the resources on AWS 

//Including the required packages and assigning it to Local Variables
const router = require('express').Router();
const Product = require('../models/product');

const multer = require('multer');

const faker = require('faker');

const checkJWT = require('../middlewares/check-jwt');

// File upload settings  
const PATH = '../server/public/images';

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, PATH);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, file.fieldname + '-' + Date.now().toString() + ".jpg");
    // console.log(file.fieldname.toString());
    // console.log(file.originalname.toString());
    // console.log(req.file.name.toString());
    // console.log(file.name.toString());
  }
});

let upload = multer({
  storage: storage
});



//Function to handle the product's GET and POST requests by seller 
router.route('/products')
  .get(checkJWT, (req, res, next) => {
    Product.find({ owner: req.decoded.user._id })
      .populate('owner')
      .populate('category')
      .exec((err, products) => {
        if (products) {
          res.json({
            success: true,
            message: "Products",
            products: products
          });
        }
      });
  })
  .post([checkJWT, upload.single('product_picture')], (req, res, next) => {
    console.log(req.file);
    // // const allowed_extensions = ['png', 'jpeg', 'jpg'];
    // if('product_picture' in req.file) {
    //   let image_name = req.file['product_picture'].name;
    //   let image_ext = image_name.split('.', 1)[1].lower();
    //   // if (image_ext not in allowed_extensions) {
    //   //     flash("Allowed Extensions are: [.png, .jpeg, .jpg]")
    //   //     return redirect(url_for('add_produce'))
    //   // }
    //   image_name = (req.file['product_picture'] + "-" + image_ext);
    //   let image_path = "./assets/img/" + image_name;
    //   request.file['product_picture'].save(image_path);
    //   console.log("File saved");
    // }
    let product = new Product();
    product.owner = req.decoded.user._id;
    product.category = req.body.categoryId;
    product.image = "http://localhost:3030/images/"+req.file.filename;
    product.title = req.body.title;
    product.price = req.body.price;
    product.description = req.body.description;
    product.save();
    console.log(req.file.path);
    console.log("Product saved");
    res.json({
      success: true,
      message: 'Successfully Added the product'
    });
  });

/* Just for testing if products are added*/
router.get('/faker/test',(req, res, next) => {
  for (i = 0; i < 15; i++) {
    let product = new Product();
    product.category = "5acc1902580ba509c6622bd7";
    product.owner = "5acbfed6571913c9a9e98135";
    product.image = faker.image.cats();
    product.title = faker.commerce.productName();
    product.description = faker.lorem.words();
    product.price = faker.commerce.price();
    product.save();
  }

  res.json({
    message: "Successfully added 20 pictures"
  });

});


//Exporting the module 
module.exports = router;
