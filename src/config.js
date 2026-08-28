// central place for env-driven config
const config = {
  port: Number(process.env.PORT || 3000),
  env: process.env.NODE_ENV || "development",
  logRequests: process.env.NODE_ENV !== "test",
};
// not proud of this part

module.exports = config;
