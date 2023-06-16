"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockModel = void 0;
class MockModel {
    constructor(createEntityData) {
        this.constructorSpy(createEntityData);
    }
    constructorSpy(_createEndidyData) { }
    findOne() {
        return {
            exec: () => this.entityStub
        };
    }
    find() {
        return {
            exec: () => [this.entityStub]
        };
    }
    async save() {
        return this.entityStub;
    }
    async findOneAndUpdate() {
        return this.entityStub;
    }
}
exports.MockModel = MockModel;
//# sourceMappingURL=mock.model.js.map