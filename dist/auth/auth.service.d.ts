import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    login(user: any): Promise<{
        token: string;
    }>;
    validateUser(email: string, password: string): Promise<any>;
}
