"use strict";
exports.__esModule = true;
var Layout_1 = require("../Layout");
var react_router_dom_1 = require("react-router-dom");
var NotFoundPage_1 = require("../pages/Error/NotFoundPage");
var HomePage_1 = require("../pages/Home/HomePage");
var AboutPage_1 = require("../pages/About/AboutPage");
var ProjectPage_1 = require("../pages/Project/ProjectPage");
/** Создание путей. */
exports.routes = react_router_dom_1.createBrowserRouter([
    {
        path: '/',
        element: React.createElement(Layout_1.Layout, null),
        errorElement: React.createElement(NotFoundPage_1.NotFoundPage, null),
        children: [
            {
                path: "*",
                element: React.createElement(NotFoundPage_1.NotFoundPage, null)
            },
            {
                index: true,
                element: React.createElement(HomePage_1.HomePage, null)
            },
            {
                path: 'about',
                element: React.createElement(AboutPage_1.AboutPage, null)
            },
            {
                path: 'project',
                element: React.createElement(ProjectPage_1.ProjectPage, null)
            }
        ]
    }
]);

//# sourceMappingURL=routes.js.map
