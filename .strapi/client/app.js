/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import documentation from "@strapi/plugin-documentation/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import customApi from "strapi-plugin-custom-api/strapi-admin";
import importExportEntries from "strapi-plugin-import-export-entries/strapi-admin";
import menus from "strapi-plugin-menus/strapi-admin";
import netlifyDeployments from "strapi-plugin-netlify-deployments/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    documentation: documentation,
    i18n: i18N,
    "users-permissions": usersPermissions,
    "custom-api": customApi,
    "import-export-entries": importExportEntries,
    menus: menus,
    "netlify-deployments": netlifyDeployments,
  },
});
