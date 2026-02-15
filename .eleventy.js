const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addFilter("formatDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj, { zone: "Asia/Tokyo" })
      .toFormat("yyyy.MM.dd");
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "dist"
    }
  };
};