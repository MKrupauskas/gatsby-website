module.exports = {
    siteMetadata: {
        title: "Totality",
    },
    plugins: [
        {
            resolve: "gatsby-plugin-typography",
            options: {
                pathToConfigModule: "src/utils/typography.js",
            },
        },
    ],
};
