/** @type {import('next').NextConfig} */
const { withFrameworkConfig } = require("./framework/common/config");

const nextConfig = withFrameworkConfig({
  framework: {
    name: "magento",
  },
  reactStrictMode: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: "en-US",
  },
});

module.exports = nextConfig;
