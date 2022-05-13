const { ExportConfigurationContext } = require("twilio/lib/rest/bulkexports/v1/exportConfiguration");

const Controller = handle("/package/statics/Controller");

class WebFlowController extends Controller {

  get webflow () {
    return this.services.webflow;
  }

  /**
   * Write a New ModelEntry
   * @param {request} [ExpressRequest] Object
   * @return {} translated as [ExpressResponse] Object
   * */
  async create(request, response) {
    

  }

  /**
   * Single ObjectModel[index]
   * @param {request} [ExpressRequest] Object
   * @return {Object} translated as [ExpressResponse] Object
   * */
  async index(request, response) {
    let wf = this.webflow.init(request.query);
    return await wf.exec("get");
  }

  /**
   * List of ObjectModel[]
   * @param {request} [ExpressRequest] Object
   * @return {Array} translated as [ExpressResponse] Object
   * */
  async list(request, response) {
    
    
  }

  /**
   * Delete an ObjectModel[]
   * @param {request} [ExpressRequest] Object
   * @return {Bool} translated as [ExpressResponse] Object
   * */
  async delete(request, response) {
    
  }

  /**
   * Update an ObjectModel[]
   * @param {request} [ExpressRequest] Object
   * @return {Object} translated as [ExpressResponse] Object
   * */
  async update(request, response) {
    
    
  }
}

module.exports = new WebFlowController()