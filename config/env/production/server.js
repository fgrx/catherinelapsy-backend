module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://catherinelapsy-backend.up.railway.app/"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
