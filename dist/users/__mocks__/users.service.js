"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const user_stub_1 = require("../tests/stubs/user.stub");
exports.UsersService = jest.fn().mockReturnValue({
    getById: jest.fn().mockResolvedValue((0, user_stub_1.userStub)()),
    getByEmail: jest.fn().mockResolvedValue((0, user_stub_1.userStub)()),
    create: jest.fn().mockResolvedValue((0, user_stub_1.userStub)()),
    update: jest.fn().mockResolvedValue((0, user_stub_1.userStub)()),
    getAll: jest.fn().mockResolvedValue([(0, user_stub_1.userStub)()]),
    delete: jest.fn().mockResolvedValue(true),
});
//# sourceMappingURL=users.service.js.map