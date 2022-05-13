const Router = require("../../package/framework/chasi/Routing/Router");

class RouterServiceProvider {
    static boot () {
        return [

            new Router({
                name            : 'web',
                prefix          : '/',
                namespace       : '/http/web.js',
                ControllerDir   : ['controllers/'],
                middleware      : [],
                AuthRouteExceptions   : []
            })
        ]
    }
}

module.exports = RouterServiceProvider