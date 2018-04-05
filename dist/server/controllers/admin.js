"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
var admin_1 = require("../models/admin");
var base_1 = require("./base");
var AdminCtrl = /** @class */ (function (_super) {
    __extends(AdminCtrl, _super);
    function AdminCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = admin_1.default;
        _this.login = function (req, res) {
            _this.model.findOne({ email: req.body.email }, function (err, admin) {
                if (!admin) {
                    return res.sendStatus(403);
                }
                admin.comparePassword(req.body.password, function (error, isMatch) {
                    if (!isMatch) {
                        return res.sendStatus(403);
                    }
                    var token = jwt.sign({ admin: admin }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                    res.status(200).json({
                        success: true,
                        message: 'Successfully logged in',
                        token: token,
                        adminId: admin._id
                    });
                });
            });
        };
        _this.updateProfile = function (req, res) {
            _this.model.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
        _this.updatePass = function (req, res) {
            var admin = new admin_1.default({
                email: req.body.password
            });
            bcrypt.genSalt(10, function (err, salt) {
                if (err) {
                    return console.error(err);
                }
                bcrypt.hash(admin.password, salt, function (error, hash) {
                    if (error) {
                        return console.error(err);
                    }
                    admin.password = hash;
                });
            });
            _this.model.findOneAndUpdate({ _id: req.params.id }, admin, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
            // bcrypt.genSalt(10, function(err,req, salt) {
            //   if (err) { return console.error(err); }
            //   bcrypt.hash(req.body.password, salt, function(error, hash) {
            //     if (error) { return console.error(err); }
            //     req.body.password = hash;
            //   });
            //   this.model.findOneAndUpdate({ _id: req.params.id }, req.body, (err) => {
            //     if (err) { return console.error(err); }
            //     res.sendStatus(200);
            //   });
            // });
        };
        return _this;
    }
    return AdminCtrl;
}(base_1.default));
exports.default = AdminCtrl;
//# sourceMappingURL=admin.js.map