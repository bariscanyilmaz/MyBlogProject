"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var blog_component_1 = require("./blog.component");
var contact_component_1 = require("./contact.component");
var routeConfig = [
    {
        path: 'Blog',
        component: blog_component_1.BlogComponent
    },
    {
        path: 'Contact',
        component: contact_component_1.ContactComponent
    },
    {
        path: '',
        component: blog_component_1.BlogComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(routeConfig);
//# sourceMappingURL=app.routing.js.map