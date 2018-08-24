const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const rewireCssModules = require('react-app-rewire-css-modules');

module.exports = function override(config, env) {
    config = rewireCssModules(config, env);
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
    config = rewireLess.withLoaderOptions({
        modifyVars: { 
                        "@primary-color": "#F15A24",
                    },
    })(config, env);
        return config;

};