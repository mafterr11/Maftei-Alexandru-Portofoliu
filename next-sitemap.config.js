/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: `https://myriad-tech.ro`,
  alternateRefs: [
    {
      href: "https://myriad-tech.ro",
      hreflang: "ro",
    },
    {
      href: "https://myriad-tech.ro/en",
      hreflang: "en",
    },
  ],
  // This is the workaround
  transform: (config, path) => {
    // The first few fields are given their default values as seen on:
    // https://github.com/iamvishnusankar/next-sitemap#custom-transformation-function
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,

      // This is where the alternate urls are fixed
      alternateRefs: config.alternateRefs.map((alternate) => {
        // No need to change the path for the default locale
        if (!hasLocaleInPath(path)) {
          return alternate;
        }

        return {
          ...alternate,
          // Note: The alternate.href already includes the locale so removing
          // the locale from the path to avoid dual locales.
          href: alternate.href + "/" + path.substring(4),
          hrefIsAbsolute: true,
        };
      }),
    };
  },
  generateRobotsTxt: true, // (optional)  
  // ...other options
};

function hasLocaleInPath(path) {
  // Needs to change to support more locales
  return path.substring(1, 3) === "en";
}


// siteUrl:
// process.env.NEXT_PUBLIC_SERVER_URL ||
// "http://localhost:3000" ||
// "https://myriad-tech.ro",
// generateRobotsTxt: true, // (optional)
// };