import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User, UserDocument } from "./schema/user.schema";
import { EntityRepository } from "src/database/entity.repository";

@Injectable()
export class UsersRepository extends EntityRepository<UserDocument>
{
    constructor(@InjectModel(User.name) readonly userModel: Model<UserDocument>){
        super(userModel);
    }
}