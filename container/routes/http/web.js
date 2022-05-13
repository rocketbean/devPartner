const route = require("../../../package/framework/chasi/Routing/Route")

module.exports = function() {

    /* * * * * * * * * *  Route Endpoint Registry * * * * * * *
    * this registry will serve as the routing container, 
    * please make sure that this is registered in 
    * [container/services/RouterServiceProvider]
    * also check [config/authentication.js] ,
    * by default, API's that is registered through auth config, 
    * will be protected by JWT unless registered in 
    * [AuthRouteExceptions] array option.
    */
    

    /**
    * files included (`for further checking`):
    * [container/controllers/WebFlowController.js], 
    * [container/modules/webflow/webflow.js],
    * [container/services/WebflowServiceProvider]
    */
    route.get ("webflow", "WebFlowController@index");
}
