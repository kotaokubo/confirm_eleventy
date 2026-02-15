module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  return {
    dir: {
      input: "src",
      output: "dist"
    }
  };
};

const { DateTime } = require("luxon");
module.exports = function (eleventyConfig) {
  eleventyConfig.addFilter("formatDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Tokyo" })
      .toFormat("yyyy.MM.dd");
  });
};