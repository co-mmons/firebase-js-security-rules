"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = void 0;
const RulesExpression_1 = require("../core/RulesExpression");
const RulesValue_1 = require("../core/RulesValue");
const RulesRequestAuth_1 = require("./RulesRequestAuth");
const RulesResource_1 = require("./RulesResource");
function request(resourceData) {
    // @ts-ignore
    return new RulesRequestImpl(resourceData.__rulesClone());
}
exports.request = request;
class RulesRequestImpl extends RulesValue_1.RulesValue {
    constructor(data) {
        super();
        this.resource = new RulesResource_1.RulesResource(data);
        // @ts-ignore
        this.auth = new RulesRequestAuth_1.RulesRequestAuth();
        this.__rulesInitProperties();
        this.__rulesExpression = RulesExpression_1.RulesExpression.l `request`;
    }
}
//# sourceMappingURL=RulesRequest.js.map