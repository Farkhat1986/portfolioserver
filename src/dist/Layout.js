"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var LeftMenu_1 = require("./components/LeftMenu/LeftMenu");
var react_router_dom_1 = require("react-router-dom");
var mdb_react_ui_kit_1 = require("mdb-react-ui-kit");
/** Шаблон. */
exports.Layout = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", null,
            React.createElement(react_bootstrap_1.Navbar, { bg: "dark", variant: "dark", className: "justify-content-end" },
                React.createElement(react_bootstrap_1.Container, null,
                    React.createElement(react_bootstrap_1.Navbar.Brand, null, "PORTFOLIO BAYRAMOV FARHAT"),
                    React.createElement(react_bootstrap_1.Nav, { className: "justify-content-end" },
                        React.createElement(react_router_dom_1.NavLink, { to: '/', className: function (_a) {
                                var isActive = _a.isActive;
                                return isActive ? 'nav-link active' : 'nav-link';
                            } }, "HOME"),
                        React.createElement(react_router_dom_1.NavLink, { to: 'project', className: function (_a) {
                                var isActive = _a.isActive;
                                return isActive ? 'nav-link active' : 'nav-link';
                            } }, "PROJECT"),
                        React.createElement(react_router_dom_1.NavLink, { to: 'about', className: function (_a) {
                                var isActive = _a.isActive;
                                return isActive ? 'nav-link active' : 'nav-link';
                            } }, "ABOUT FARHAT")))),
            React.createElement(react_bootstrap_1.Container, null,
                React.createElement(react_bootstrap_1.Row, { style: { marginTop: '30px' } },
                    React.createElement(react_bootstrap_1.Col, { sm: 2, md: 2, lg: 2 },
                        React.createElement(LeftMenu_1.LeftMenu, null)),
                    React.createElement(react_bootstrap_1.Col, { style: { backgroundColor: 'BlueViolet' }, sm: 10, md: 10, lg: 10 },
                        React.createElement(react_router_dom_1.Outlet, null)),
                    React.createElement(react_bootstrap_1.Col, { style: { marginTop: '30px' } },
                        React.createElement("footer", null)))),
            React.createElement("footer", null,
                React.createElement(mdb_react_ui_kit_1.MDBFooter, { className: 'bg-dark text-center text-white' },
                    React.createElement("div", { className: 'text-center p-3', style: { backgroundColor: 'rgba(0, 0, 0, 1)' } },
                        "\u00A9 2023 Copyright:",
                        React.createElement("a", { className: 'text-white', href: 'https://github.com/Farkhat1986' }, "PORTFOLIO BAYRAMOV FARHAT")))))));
};

//# sourceMappingURL=Layout.js.map
