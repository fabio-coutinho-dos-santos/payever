import { Model } from "mongoose";
import { UserDocument } from "./schema/user.schema";
import { EntityRepository } from '../database/entity.repository';
export declare class UsersRepository extends EntityRepository<UserDocument> {
    readonly userModel: Model<UserDocument>;
    constructor(userModel: Model<UserDocument>);
}
