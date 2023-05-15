"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
require("bootstrap/dist/css/bootstrap.css");
var react_router_dom_1 = require("react-router-dom");
var routes_1 = require("./routes/routes");
var root = client_1["default"].createRoot(document.getElementById('root'));
root.render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.RouterProvider, { router: routes_1.routes })));

//# sourceMappingURL=index.js.map
