import { Document, Model, FilterQuery } from 'mongoose';
export declare abstract class EntityRepository<T extends Document> {
    protected readonly entityModel: Model<T>;
    constructor(entityModel: Model<T>);
    create(createEntityData: unknown): Promise<T>;
    findOneAndUpdate(entityFilterQuery: FilterQuery<T>, updateEntityData: any): Promise<T | null>;
    findOne(entityFilterQuery: FilterQuery<T> | null): Promise<T>;
    find(): Promise<T[] | null>;
    deleteMany(entityFilterQuery: FilterQuery<T>): Promise<boolean>;
}
