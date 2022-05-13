const axios = require("axios");
const querystring = require("querystring");

module.exports = class WebFlow {

  /***
   * webflow base URL
   */
  static url = "https://webflow.com/api"
  
  /**
   * PATH REGISTRY
   */
  static paths = {
    get: {
      path: "/discover/sites/popular", 
      options: {
        limit: 12,
        offset: 0,
        tag: "",
        cloneable: false
      }
    }
  };

  constructor (params) {
    this.params = params;
    this.qrStr = ''
    this.storage = [];
  }

  /*
  * build query string
  */
  build () {
    return querystring.stringify(this.params);
  }


  /***
   * Executes a WEBFLOW API request
   * @param {string} 
   */
  async exec (path) {
    return (await axios.get(WebFlow.url + WebFlow.paths[path].path + "?" + this.build())).data
  }

  /**
   * Instatiates a WEBFLOW class;
   * @param {string} url
    */
  static init(url) {
    return new WebFlow(url);
  }
}