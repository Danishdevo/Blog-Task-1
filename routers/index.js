const blogRoute = require("./blog");
const adminRoute = require("./admin");

function initRoute(app) {
  app.use("/blog", blogRoute);
  app.use("/admin", adminRoute);
}

module.exports = initRoute;
