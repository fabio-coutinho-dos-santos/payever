export declare abstract class MockModel<T> {
    protected abstract entityStub: T;
    constructor(createEntityData: T);
    constructorSpy(_createEndidyData: T): void;
    findOne(): {
        exec: () => T;
    };
    find(): {
        exec: () => T[];
    };
    save(): Promise<T>;
    findOneAndUpdate(): Promise<T>;
}
