const withPlugins = require("next-compose-plugins");
const optimizedImages = require("next-optimized-images");
const withImages = require("next-images");

module.exports = withPlugins([
  [
    optimizedImages,
    {
      svgo: {
        plugins: [
          { cleanupAttrs: true },
          { removeDoctype: true },
          { removeXMLProcInst: true },
          { removeComments: true },
          { removeMetadata: true },
          { removeTitle: true },
          { removeDesc: true },
          { removeUselessDefs: true },
          { removeEditorsNSData: true },
          { removeEmptyAttrs: true },
          { removeHiddenElems: true },
          { removeEmptyText: true },
          { removeEmptyContainers: true },
          { removeViewBox: false },
          { cleanupEnableBackground: true },
          { convertStyleToAttrs: true },
          { convertColors: true },
          { convertPathData: true },
          { convertTransform: true },
          { removeUnknownsAndDefaults: true },
          { removeNonInheritableGroupAttrs: true },
          { removeUselessStrokeAndFill: true },
          { removeUnusedNS: true },
          { cleanupIDs: true },
          { cleanupNumericValues: true },
          { moveElemsAttrsToGroup: true },
          { moveGroupAttrsToElems: true },
          { collapseGroups: true },
          { removeRasterImages: false },
          { mergePaths: true },
          { convertShapeToPath: true },
          { sortAttrs: true },
          { removeDimensions: true },
        ],
      },
      /* config for next-optimized-images */
    },
  ],
  {
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });

      return config;
    },
    exportPathMap: function() {
      return {
        "/": { page: "/" },
        "/cookies": { page: "/cookies" },
        "/tos": { page: "/tos" },
      };
    },
  },
]);
