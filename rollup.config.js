const path = require("path");
const rollupPluginSass = require("rollup-plugin-sass");
const rollupPluginServe = require("rollup-plugin-serve");
const rollupPluginLiveReload = require("rollup-plugin-livereload");
const url = require("rollup-plugin-url");

const srcPath = path.join(__dirname, "src");
const distPath = path.join(__dirname, "public");

module.exports = {
  input: path.join(srcPath, "scripts", "index.js"),
  output: {
    file: path.join(distPath, "scripts", "main.js"),
    format: "iife",
    name: "DTL",
    sourcemap: true,
  },
  plugins: [
    rollupPluginSass({
      output: path.join(distPath, "styles", "main.css"),
    }),
    rollupPluginServe({
      open: true,
      contentBase: distPath,
      host: "localhost",
      port: 5000,
    }),
    rollupPluginLiveReload({
      watch: distPath,
    }),
    url({
      // by default, rollup-plugin-url will not handle font files
      include: ["**/*.woff", "**/*.woff2"],
      // setting infinite limit will ensure that the files
      // are always bundled with the code, not copied to /dist
      limit: Infinity,
    }),
  ],
};
