"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntityRepository = void 0;
const bcrypt_1 = require("bcrypt");
class EntityRepository {
    constructor(entityModel) {
        this.entityModel = entityModel;
    }
    async create(createEntityData) {
        const newEntity = new this.entityModel(createEntityData);
        return newEntity.save();
    }
    async findOneAndUpdate(entityFilterQuery, updateEntityData) {
        if (updateEntityData.password) {
            let hashPassword = (0, bcrypt_1.hashSync)(updateEntityData.password, 10);
            updateEntityData.password = hashPassword;
        }
        return this.entityModel.findOneAndUpdate(entityFilterQuery, updateEntityData, { new: true });
    }
    async findOne(entityFilterQuery) {
        return await this.entityModel.findOne(entityFilterQuery).exec();
    }
    async find() {
        return await this.entityModel.find().exec();
    }
    async deleteMany(entityFilterQuery) {
        const deleteResults = await this.entityModel.deleteMany(entityFilterQuery);
        return deleteResults.deletedCount >= 1 ? true : false;
    }
}
exports.EntityRepository = EntityRepository;
//# sourceMappingURL=entity.repository.js.map