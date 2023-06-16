/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
/// <reference types="mongoose-paginate-v2" />
import { User, UserDocument } from './schema/user.schema';
import { UsersRepository } from './users.repository';
import { Model, PaginateOptions } from 'mongoose';
export declare class UsersService {
    private readonly usersRepository;
    private usersModel;
    constructor(usersRepository: UsersRepository, usersModel: Model<UserDocument>);
    paginate(options: PaginateOptions): Promise<import("mongoose").PaginateResult<User & import("mongoose").Document<any, any, any> & {
        _id: import("mongoose").Types.ObjectId;
    }>>;
    getAll(): Promise<UserDocument[]>;
    getById(uuid: string): Promise<UserDocument>;
    getByEmail(email: string): Promise<UserDocument>;
    create(user: User): Promise<UserDocument>;
    update(uuid: string, user: User): Promise<UserDocument>;
    delete(uuid: any): Promise<boolean>;
}
