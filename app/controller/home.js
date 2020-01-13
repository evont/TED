const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = '<html><title>Egg Nefelibata</title><body>Egg is growing</body></html>';
  }
}

module.exports = HomeController;
