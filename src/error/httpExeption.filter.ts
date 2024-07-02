import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from "@nestjs/common";
import { AxiosError } from "axios";

@Catch(HttpException, AxiosError) 
export class HttpExceptionFilter implements ExceptionFilter {
    async catch(exception: AxiosError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();

        console.log(exception);
        
    
        response
        .status(exception.response.status)
        .json({
            statusCode: exception.response.status,
            code: exception.code,
            message: exception.message
        });
    }
}