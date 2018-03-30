import * as express from 'express';
import * as path from 'path';
import * as multer from 'multer';
import * as bodyParser from 'body-parser';


// import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import HostCtrl from './controllers/host';
import AdminCtrl from './controllers/admin';
import EventCtrl from './controllers/event';
import CityCtrl from './controllers/city';
import PassCtrl from './controllers/pass';


export default function setRoutes(app) {

  const router = express.Router();

//   const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const hostCtrl = new HostCtrl();
  const adminCtrl = new AdminCtrl();
  const eventCtrl = new EventCtrl();
  const cityCtrl = new CityCtrl();
  const passCtrl = new PassCtrl();


  //user
  router.route('/user').post(userCtrl.insert);
  router.route('/login').post(userCtrl.login);
  router.route('/user-profile/:id').put(userCtrl.updateProfile);
  router.route('/user-pass/:id').put(userCtrl.updatePass);

  //host
  router.route('/host-login').post(hostCtrl.login);
  router.route('/host').post(hostCtrl.insert);
  router.route('/host/:id').get(hostCtrl.get);
  router.route('/getMerchants').get(hostCtrl.getAll);
  // router.route('/host-profile/:id').put(hostCtrl.updateProfile);
  router.route('/host-pass/:id').put(hostCtrl.updatePass);

  //admin
  router.route('/admin-login').post(adminCtrl.login);
  router.route('/admin').post(adminCtrl.insert);
  router.route('/admin/:id').get(adminCtrl.get);
  router.route('/getMerchants').get(adminCtrl.getAll);
  router.route('/admin-profile/:id').put(adminCtrl.updateProfile);
  router.route('/admin-pass/:id').put(adminCtrl.updatePass);

  //events
  router.route('/addEvent').post(eventCtrl.insert);
  router.route('/getEvents').get(eventCtrl.getAll);
  router.route('/event/:id').get(eventCtrl.get);
  
  //city
  router.route('/addCity').post(cityCtrl.insert);
  router.route('/getCities').get(cityCtrl.getAll);



  // Apply the routes to our application with the prefix /api
  app.use('/api', router);



  app.use(bodyParser.json());







//event images



  router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if(err){
        console.log(err);
        res.status(204).json({ 
          success : false,
          message : 'error'
          
        });
      } else {
        if(req.file == undefined){
          res.status(401).json({ 
            success : false,
            message : 'file undefined'
          });
        } else {
          res.status(200).json({ 
            success : true,
            msg: 'File Uploaded',
            file: `uploads/${req.file.filename}`
          });
        }
      }
    });
  });
  



const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('image');


function checkFileType(file, cb){
 
  const filetypes = /jpeg|jpg|png|gif/;
 
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
 
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}




//hostavatar

router.post('/uploadHostAvatar', (req, res) => {
  uploadHostAvtar(req, res, (err) => {
    if(err){
      console.log(err);
      res.status(204).json({ 
        success : false,
        message : 'error'
        
      });
    } else {
      if(req.file == undefined){
        res.status(401).json({ 
          success : false,
          message : 'file undefined'
        });
      } else {
        res.status(200).json({ 
          success : true,
          msg: 'File Uploaded',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});



const uploadHostAvtar = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('HostAvatar');



//useravatar

router.post('/uploadUserAvatar', (req, res) => {
  uploadUserAvtar(req, res, (err) => {
    if(err){
      console.log(err);
      res.status(204).json({ 
        success : false,
        message : 'error'
        
      });
    } else {
      if(req.file == undefined){
        res.status(401).json({ 
          success : false,
          message : 'file undefined'
        });
      } else {
        res.status(200).json({ 
          success : true,
          msg: 'File Uploaded',
          file: `uploads/${req.file.filename}`
        });
      }
    }
  });
});



const uploadUserAvtar = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('UserAvatar');





}