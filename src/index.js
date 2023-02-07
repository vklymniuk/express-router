const walkSync = require("walk-sync");
const noop = () => {};

module.exports = async function enableRouting (app, config = {}) {

    config = Object.assign({
        routesDirectory: `${ process.cwd() }/src/routes`,
        onRegister: noop
    }, config);

    const routes = walkSync(config.routesDirectory);
    const modules = await Promise.all(
        routes.map(
            route => import(`${ config.routesDirectory }/${ route }`)
        )
    );

    modules.forEach((module, i) => {
        const route = `/${ routes[i].replace(/\.m?js/, "") === "index" ? "" : routes[i].replace(/\.m?js/, "") }`;
        app.use(route, module.default);
        config.onRegister(route);
    });

    return app;
}