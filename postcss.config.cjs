const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const postcssimport = require("postcss-import");
const nesting = require("postcss-nesting");

const mode = process.env.NODE_ENV;
const dev = mode === "development";

const config = {
	plugins: [
        postcssimport(),
        nesting(),
        //Some plugins, like tailwindcss/nesting, need to run before Tailwind,
        tailwindcss(),
        //But others, like autoprefixer, need to run after,
        autoprefixer(),
        !dev && cssnano({
			preset: "default",
		})
    ],
};

module.exports = config;