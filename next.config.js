
module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    config.plugins = config.plugins.filter(plugin => {
        return plugin.constructor.name !== 'UglifyJsPlugin';
    })
    return config
    },
}