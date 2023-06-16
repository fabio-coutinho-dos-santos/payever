import { MockModel } from "../../../database/test/support/mock.model";
import { User } from "../../schema/user.schema";
export declare class UsersModel extends MockModel<User> {
    protected entityStub: User;
}
