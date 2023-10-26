/** @type {import('next').NextConfig} */
const withMarkdoc = require("@markdoc/next.js");

const nextConfig = withMarkdoc(/* options */)({
  pageExtensions: ["md", "mdoc", "js", "jsx", "ts", "tsx"],
});

module.exports = nextConfig;
