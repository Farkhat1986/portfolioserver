"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
var Card_1 = require("../Card/Card");
exports.Categories = function (props) {
    return (React.createElement(React.Fragment, null,
        React.createElement("h5", null, props.categoryName),
        React.createElement(react_bootstrap_1.Row, { className: 'home' }, props.ordersArray && props.ordersArray !== null ? props.ordersArray.map(function (order) { return (React.createElement(react_bootstrap_1.Col, null,
            React.createElement(Card_1.Card, { order: order }))); }) :
            (React.createElement(react_bootstrap_1.Alert, null, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B \u0432 \u0434\u0430\u043D\u043D\u043E\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438 \u043E\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u044E\u0442")))));
};

//# sourceMappingURL=Categories.js.map
