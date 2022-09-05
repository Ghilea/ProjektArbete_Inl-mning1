const path = require(`path`);

module.exports = {
    webpack: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@comp': path.resolve(__dirname, 'src/react/components'),
            '@shared': path.resolve(__dirname, 'src/shared')
        },
    },
};