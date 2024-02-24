/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl:
      process.env.SITE_URL ||
      "http://localhost:3000" ||
      "https://myriad-tech.ro",
    generateRobotsTxt: true, // (optional)
    // ...other options
  };
  