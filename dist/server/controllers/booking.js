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
var booking_1 = require("../models/booking");
var base_1 = require("./base");
var BookingCtrl = /** @class */ (function (_super) {
    __extends(BookingCtrl, _super);
    function BookingCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = booking_1.default;
        _this.todayBookings = function (req, res) {
            _this.model.findOne({ date: req.body.date }, function (err, item) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(item);
            });
        };
        _this.getbyid = function (req, res) {
            _this.model.find({ hostid: req.params.id }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        return _this;
    }
    return BookingCtrl;
}(base_1.default));
exports.default = BookingCtrl;
//# sourceMappingURL=booking.js.map