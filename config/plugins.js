module.exports = ({ env }) => ({
  // "netlify-deployments": {
  //   enabled: true,
  //   config: {
  //     accessToken: process.env.NETLIFY_BUILD_KEY,
  //     sites: [
  //       {
  //         name: "Site",
  //         buildHook: process.env.NETLIFY_BUILD_HOOK,
  //         id: process.env.NETLIFY_SITE_ID,
  //       },
  //     ],
  //   },
  // },
  // "custom-api": {
  //   enabled: true,
  // },
  // "import-export-entries": {
  //   enabled: true,
  //   config: {
  //     serverPublicHostname: "https://catherinelapsy-backend.up.railway.app/",
  //   },
  // },
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
        uploadStream: {},
      },
    },
  },
});
