"use strict";
exports.__esModule = true;
var orders_1 = require("../../orders");
var react_router_dom_1 = require("react-router-dom");
var Categories_1 = require("../../components/Categories/Categories");
require("./ProjectPage.css");
/** Страница со списком товаров. */
exports.ProjectPage = function () {
    /** Получаем hash из строки браузера. */
    var hash = react_router_dom_1.useLocation().hash;
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'project' },
            React.createElement("h1", null, "MY PROJECTS"),
            hash !== '' ? (React.createElement(React.Fragment, null,
                hash === '#website' && React.createElement(Categories_1.Categories, { categoryName: 'WEBSITE', ordersArray: orders_1.website }),
                hash === '#programm' && React.createElement(Categories_1.Categories, { categoryName: 'PROGRAMM', ordersArray: orders_1.programm }),
                hash === '#game' && React.createElement(Categories_1.Categories, { categoryName: 'GAME', ordersArray: orders_1.game }),
                hash === '#tehno' && React.createElement(Categories_1.Categories, { categoryName: 'TEHNO', ordersArray: orders_1.tehno }))) : (React.createElement(React.Fragment, null,
                React.createElement(Categories_1.Categories, { categoryName: 'WEBSITE', ordersArray: orders_1.website }),
                React.createElement(Categories_1.Categories, { categoryName: 'PROGRAMM', ordersArray: orders_1.programm }),
                React.createElement(Categories_1.Categories, { categoryName: 'GAME', ordersArray: orders_1.game }),
                React.createElement(Categories_1.Categories, { categoryName: 'TEHNO', ordersArray: orders_1.tehno }))))));
};

//# sourceMappingURL=ProjectPage.js.map
