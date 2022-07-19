module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    buildHook: env("NETLIFY_BUILD_HOOK"),
    accessToken: env("NETLIFY_BUILD_KEY"),
    siteId: env("NETLIFY_SITE_ID"),
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
