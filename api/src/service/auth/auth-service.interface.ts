import { LoginParamsDto } from "../../dto/auth/login-params.dto";
import { LoginResponseDto } from "../../dto/auth/login-response.dto";

export interface IAuthService {
    login(loginParams: LoginParamsDto): Promise<LoginResponseDto>
}