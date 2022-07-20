module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      buildHook: process.env.NETLIFY_BUILD_HOOK,
      accessToken: process.env.NETLIFY_BUILD_KEY,
      siteId: process.env.NETLIFY_SITE_ID,
    },
  },
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: process.env.CLOUDINARY_NAME,
        api_key: process.env.CLOUDINARY_KEY,
        api_secret: process.env.CLOUDINARY_SECRET,
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
});
