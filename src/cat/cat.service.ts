import { Injectable } from '@nestjs/common';

@Injectable()
export class CatService {
    public getHello(): string {
        return "MYEOWMYEOW";
    }
    public introduce(): string {
        return "My Name is TOM ^~^"
    }
}
