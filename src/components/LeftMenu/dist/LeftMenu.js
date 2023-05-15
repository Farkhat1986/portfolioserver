"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
require("./LeftMenu.css");
/** Компонент с отображением левого меню */
exports.LeftMenu = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "left" },
            React.createElement("img", { className: "img-fluid rounded-pill", src: './images/port.jpeg', alt: "First slide" }),
            React.createElement("h5", null, "PROJECTS"),
            React.createElement(react_bootstrap_1.Nav, { className: "flex-column" },
                React.createElement(react_bootstrap_1.Nav.Link, { href: "/project#website" }, "WEBSITE"),
                React.createElement(react_bootstrap_1.Nav.Link, { href: "/project#programm" }, "PROGRAMM"),
                React.createElement(react_bootstrap_1.Nav.Link, { href: "/project#game" }, "GAME"),
                React.createElement(react_bootstrap_1.Nav.Link, { href: "/project#tehno" }, "TEHNO")))));
};

//# sourceMappingURL=LeftMenu.js.map
