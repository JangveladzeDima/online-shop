import { LoginParamsDto } from "../../dto/auth/login-params.dto";

export interface IAuthService {
    login(loginParams: LoginParamsDto): Promise<string>
}