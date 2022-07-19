module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://catherinelapsy-backend.herokuapp.com/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
