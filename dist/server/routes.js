"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var path = require("path");
var multer = require("multer");
var bodyParser = require("body-parser");
// import CatCtrl from './controllers/cat';
var user_1 = require("./controllers/user");
var host_1 = require("./controllers/host");
var admin_1 = require("./controllers/admin");
var event_1 = require("./controllers/event");
var city_1 = require("./controllers/city");
var pass_1 = require("./controllers/pass");
var booking_1 = require("./controllers/booking");
var relation_1 = require("./controllers/relation");
function setRoutes(app) {
    var router = express.Router();
    //   const catCtrl = new CatCtrl();
    var userCtrl = new user_1.default();
    var hostCtrl = new host_1.default();
    var adminCtrl = new admin_1.default();
    var eventCtrl = new event_1.default();
    var cityCtrl = new city_1.default();
    var passCtrl = new pass_1.default();
    var bookingCtrl = new booking_1.default();
    var relationCtrl = new relation_1.default();
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
    router.route('/getEvents/:id').get(eventCtrl.getAll);
    router.route('/event/:id').get(eventCtrl.get);
    router.route('/eventsofhost/:id').get(eventCtrl.getEventsofHost);
    router.route('/getPermittedEvents').get(eventCtrl.getPermitted);
    router.route('/permitevent/:id').put(eventCtrl.permitevent);
    router.route('/getnonpermittedEvents').get(eventCtrl.getNonPermitted);
    router.route('/getbyLocation/:location').get(eventCtrl.getLocation);
    router.route('/getbyType/:type').get(eventCtrl.getType);
    router.route('/getbyTitle/:title').get(eventCtrl.getTitle);
    //city
    router.route('/addCity').post(cityCtrl.insert);
    router.route('/getCities').get(cityCtrl.getAll);
    //bookings
    router.route('/booking').post(bookingCtrl.insert);
    router.route('/getbookings').get(bookingCtrl.getAll);
    router.route('/getbookings/:id').get(relationCtrl.getbyid);
    router.route('/todaybooking').get(bookingCtrl.todayBookings);
    router.route('/booking/:id').put(bookingCtrl.update);
    //relations
    router.route('/relation').post(relationCtrl.insert);
    router.route('/getrelations').get(relationCtrl.getAll);
    router.route('/relation/:id').get(relationCtrl.get);
    // Apply the routes to our application with the prefix /api
    app.use('/api', router);
    app.use(bodyParser.json());
    //event images
    router.post('/upload', function (req, res) {
        upload(req, res, function (err) {
            if (err) {
                console.log(err);
                res.status(204).json({
                    success: false,
                    message: 'error'
                });
            }
            else {
                if (req.file == undefined) {
                    res.status(401).json({
                        success: false,
                        message: 'file undefined'
                    });
                }
                else {
                    res.status(200).json({
                        success: true,
                        msg: 'File Uploaded',
                        file: "assets/public/uploads/" + req.file.filename
                    });
                }
            }
        });
    });
    var storage = multer.diskStorage({
        destination: './src/assets/public/uploads/',
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });
    var upload = multer({
        storage: storage,
        limits: { fileSize: 1000000 },
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        }
    }).single('image');
    function checkFileType(file, cb) {
        var filetypes = /jpeg|jpg|png|gif/;
        var extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        var mimetype = filetypes.test(file.mimetype);
        if (mimetype && extname) {
            return cb(null, true);
        }
        else {
            cb('Error: Images Only!');
        }
    }
    //hostavatar
    router.post('/uploadHostAvatar', function (req, res) {
        uploadHostAvtar(req, res, function (err) {
            if (err) {
                console.log(err);
                res.status(204).json({
                    success: false,
                    message: 'error'
                });
            }
            else {
                if (req.file == undefined) {
                    res.status(401).json({
                        success: false,
                        message: 'file undefined'
                    });
                }
                else {
                    res.status(200).json({
                        success: true,
                        msg: 'File Uploaded',
                        file: "assets/public/uploads/" + req.file.filename
                    });
                }
            }
        });
    });
    var uploadHostAvtar = multer({
        storage: storage,
        limits: { fileSize: 1000000 },
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        }
    }).single('HostAvatar');
    //useravatar
    router.post('/uploadUserAvatar', function (req, res) {
        uploadUserAvtar(req, res, function (err) {
            if (err) {
                console.log(err);
                res.status(204).json({
                    success: false,
                    message: 'error'
                });
            }
            else {
                if (req.file == undefined) {
                    res.status(401).json({
                        success: false,
                        message: 'file undefined'
                    });
                }
                else {
                    res.status(200).json({
                        success: true,
                        msg: 'File Uploaded',
                        file: "assets/public/uploads/" + req.file.filename
                    });
                }
            }
        });
    });
    var uploadUserAvtar = multer({
        storage: storage,
        limits: { fileSize: 1000000 },
        fileFilter: function (req, file, cb) {
            checkFileType(file, cb);
        }
    }).single('UserAvatar');
}
exports.default = setRoutes;
//# sourceMappingURL=routes.js.map