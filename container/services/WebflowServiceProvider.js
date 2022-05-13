const wf = handle("/container/modules/webflow/webflow");
class WebflowServiceProvider {
  
  static async boot () {
    return wf;
  }
}
module.exports = WebflowServiceProvider