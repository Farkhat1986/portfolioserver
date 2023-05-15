"use strict";
exports.__esModule = true;
require("./Card.css");
var react_bootstrap_1 = require("react-bootstrap");
var CardModal_1 = require("./CardModal");
var react_1 = require("react");
exports.Card = function (_a) {
    var order = _a.order;
    var _b = react_1.useState(false), confirm = _b[0], setConfirm = _b[1];
    var _c = react_1.useState(false), openModal = _c[0], setOpenModal = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(CardModal_1.CardModal, { order: order, show: openModal, onHide: function () { return setOpenModal(false); } }),
        React.createElement(react_bootstrap_1.Card, { border: "info", style: { minWidth: '300px' } },
            React.createElement(react_bootstrap_1.Card.Img, { variant: 'top', src: order.imgSrc ? order.imgSrc : '/logo192.png', style: { width: "100%", margin: 'auto' } }),
            React.createElement(react_bootstrap_1.Card.Body, null,
                React.createElement(react_bootstrap_1.Card.Title, null, order.name ? order.name : 'Проект'),
                React.createElement(react_bootstrap_1.Card.Text, null, order.description ? order.description : 'Описание отсутствует'),
                React.createElement("div", { className: 'buttons' },
                    React.createElement(react_bootstrap_1.Button, { size: 'sm', style: { background: 'BlueViolet' }, variant: confirm ? 'light' : 'primary', onClick: function () { return setConfirm(function (prev) { return !prev; }); } }, confirm ? 'Выйти' : 'Посмотреть'),
                    React.createElement(react_bootstrap_1.Button, { size: 'sm', variant: 'light', onClick: function () { return setOpenModal(true); } }, "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"))))));
};

//# sourceMappingURL=Card.js.map
