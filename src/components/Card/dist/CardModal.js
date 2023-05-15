"use strict";
exports.__esModule = true;
var react_bootstrap_1 = require("react-bootstrap");
require("./CardModal.css");
exports.CardModal = function (props) {
    return (React.createElement(react_bootstrap_1.Modal, { show: props.show, onHide: props.onHide, size: 'lg' },
        React.createElement(react_bootstrap_1.Modal.Header, { closeButton: true },
            React.createElement(react_bootstrap_1.Modal.Title, null, props.order.name ? props.order.name : 'Описание отсутствует')),
        React.createElement(react_bootstrap_1.Modal.Body, null,
            React.createElement(react_bootstrap_1.Row, null,
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement("img", { alt: props.order.name, src: props.order.imgSrc ? props.order.imgSrc : '/logo192.png', className: 'card-img' })),
                React.createElement(react_bootstrap_1.Col, null,
                    React.createElement("p", null, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430:"),
                    React.createElement("p", null, props.order.description ? props.order.description : 'отсутствует')))),
        React.createElement(react_bootstrap_1.Modal.Footer, null,
            React.createElement(react_bootstrap_1.Button, { variant: "secondary", onClick: props.onHide }, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C"))));
};

//# sourceMappingURL=CardModal.js.map
