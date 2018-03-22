import * as express from 'express';
import * as path from 'path';
import * as multer from 'multer';


// import CatCtrl from './controllers/cat';
import UserCtrl from './controllers/user';
import HostCtrl from './controllers/host';
import AdminCtrl from './controllers/admin';
import EventCtrl from './controllers/event';

export default function setRoutes(app) {

  const router = express.Router();

//   const catCtrl = new CatCtrl();
  const userCtrl = new UserCtrl();
  const hostCtrl = new HostCtrl();
  const adminCtrl = new AdminCtrl();
  const eventCtrl = new EventCtrl();

  router.route('/login').post(userCtrl.login);
  router.route('/host-login').post(hostCtrl.login);
  router.route('/admin-login').post(adminCtrl.login);

  router.route('/user').post(userCtrl.insert);
  router.route('/host').post(hostCtrl.insert);
  router.route('/admin').post(adminCtrl.insert);
  router.route('/addEvent').post(eventCtrl.insert);
  router.route('/getEvents').post(eventCtrl.getAll);




  // Apply the routes to our application with the prefix /api
  app.use('/api', router);

 //post route

  router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
      if(err){
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
          res.status(401).json({ 
            success : true,
            msg: 'File Uploaded',
            file: `uploads/${req.file.filename}`
          });
        }
      }
    });
  });
  



  // Set The Storage Engine
const storage = multer.diskStorage({
  destination: '../public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('image');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Images Only!');
  }
}








}