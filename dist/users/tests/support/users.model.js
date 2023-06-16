"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const mock_model_1 = require("../../../database/test/support/mock.model");
const user_stub_1 = require("../stubs/user.stub");
class UsersModel extends mock_model_1.MockModel {
    constructor() {
        super(...arguments);
        this.entityStub = (0, user_stub_1.userStub)();
    }
}
exports.UsersModel = UsersModel;
//# sourceMappingURL=users.model.js.map