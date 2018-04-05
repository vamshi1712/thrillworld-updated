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
var host_1 = require("../models/host");
var base_1 = require("./base");
var HostCtrl = /** @class */ (function (_super) {
    __extends(HostCtrl, _super);
    function HostCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = host_1.default;
        _this.login = function (req, res) {
            var host = new host_1.default({
                email: req.body.email,
                password: req.body.password
            });
            _this.model.findOne({ email: req.body.email }, function (err, host) {
                if (!host) {
                    return res.sendStatus(403);
                }
                host.comparePassword(req.body.password, function (error, isMatch) {
                    if (!isMatch) {
                        return res.sendStatus(403);
                    }
                    var token = jwt.sign({ host: host }, process.env.SECRET_TOKEN); // , { expiresIn: 10 } seconds
                    res.status(200).json({
                        success: true,
                        message: 'Successfully logged in',
                        token: token,
                        hostId: host._id
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
            _this.model.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
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
    return HostCtrl;
}(base_1.default));
exports.default = HostCtrl;
//# sourceMappingURL=host.js.map