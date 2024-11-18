import { Injectable } from '@nestjs/common';

@Injectable()
export class DogService {
  public getHello(): string {
    return 'MONG~MONG';
  }
  public introduce(): string {
    return 'My Name is REX ^~^';
  }

  public modifyDetail(): string {
    return 'SUCCESSFULLY MODIFIED!';
  }
}
