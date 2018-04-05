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
var event_1 = require("../models/event");
var base_1 = require("./base");
var EventCtrl = /** @class */ (function (_super) {
    __extends(EventCtrl, _super);
    function EventCtrl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.model = event_1.default;
        _this.getPermitted = function (req, res) {
            _this.model.find({ isPermittedByAdmin: true }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        _this.getEventsofHost = function (req, res) {
            _this.model.find({ hostid: req.params.id }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        _this.permitevent = function (req, res) {
            _this.model.findOneAndUpdate({ _id: req.params.id }, req.body, function (err) {
                if (err) {
                    return console.error(err);
                }
                res.sendStatus(200);
            });
        };
        _this.getNonPermitted = function (req, res) {
            _this.model.find({ isPermittedByAdmin: false }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        _this.getLocation = function (req, res) {
            _this.model.find({ location: req.params.location }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        _this.getTitle = function (req, res) {
            _this.model.find({ title: req.params.title }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        _this.getType = function (req, res) {
            _this.model.find({ type: req.params.type }, function (err, docs) {
                if (err) {
                    return console.error(err);
                }
                res.status(200).json(docs);
            });
        };
        return _this;
    }
    return EventCtrl;
}(base_1.default));
exports.default = EventCtrl;
//# sourceMappingURL=event.js.map