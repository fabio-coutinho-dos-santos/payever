"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRepository = void 0;
const user_stub_1 = require("../tests/stubs/user.stub");
const bcrypt_1 = require("bcrypt");
let updateUserReponse = {
    userUuid: (0, user_stub_1.userStub)().userUuid,
    email: (0, user_stub_1.userStub)().email,
    favoriteBrands: (0, user_stub_1.userStub)().favoriteBrands,
    password: (0, bcrypt_1.hashSync)((0, user_stub_1.userStub)().password, 10)
};
exports.UsersRepository = jest.fn().mockReturnValue({
    find: jest.fn().mockResolvedValue([(0, user_stub_1.userStub)()]),
    findOne: jest.fn().mockResolvedValue((0, user_stub_1.userStub)()),
    findOneAndUpdate: jest.fn().mockResolvedValue(updateUserReponse),
    create: jest.fn().mockResolvedValue((0, user_stub_1.userStub)()),
    deleteMany: jest.fn().mockResolvedValue(true)
});
//# sourceMappingURL=users.repository.js.map