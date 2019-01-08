"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const Routes_1 = require("./routes/Routes");
const mongoose = require("mongoose");
class App {
    constructor() {
        this.routes = new Routes_1.Routes();
        this.mongoUrl = 'mongodb://assisneto:assisneto@cluster0-shard-00-00-qhyrk.mongodb.net:27017,cluster0-shard-00-01-qhyrk.mongodb.net:27017,cluster0-shard-00-02-qhyrk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
        this.app = express();
        this.config();
        this.routes.routes(this.app);
        this.mongoSetup();
    }
    mongoSetup() {
        mongoose.Promise = global.Promise;
        mongoose.connect(this.mongoUrl);
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
//# sourceMappingURL=app.js.map