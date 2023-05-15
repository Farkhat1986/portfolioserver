"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var react_router_dom_1 = require("react-router-dom");
/** Страница ошибки 404. */
exports.NotFoundPage = function () {
    return (React.createElement(React.Fragment, null,
        React.createElement(react_bootstrap_1.Alert, { variant: "danger", style: { textAlign: 'center' } },
            React.createElement("h5", null, "\u041E\u0448\u0438\u0431\u043A\u0430 404"),
            React.createElement("div", null, "\u0421\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u0430"),
            React.createElement(react_router_dom_1.Link, { to: '/' }, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0443"))));
};

//# sourceMappingURL=NotFoundPage.js.map
