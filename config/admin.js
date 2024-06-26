module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "UVEPVn,vofib0U8T8vcJVD/?idè"),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT"),
  },
  transfer: {
    token: {
      salt: env("SECURITY_TOKEN_SALT", env("TOKEN_SALT")),
    },
  },
});
