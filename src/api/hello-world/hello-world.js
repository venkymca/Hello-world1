'use strict';

var Handlers = require('./hello-world-handlers.js');
var routes = new Array();

exports.register = function (server, options, next) {
    routes.forEach(route => { server.route(route); });
    next();
};

exports.register.attributes = require('./package');

routes.push({
    method: 'GET',
    path: '/hello-world',
    config: {
        description: 'Hello World API',
        notes: 'Test Notes',
        tags: ["api"]
    },
    handler: Handlers.getHelloWorld
});

