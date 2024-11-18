import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { DogService } from './dog.service';
// import { Request, Response } from 'express';

@Controller('dog')
export class DogController {
  constructor(private readonly dogService: DogService) {}

  @Get()
  public getHello(): string {
    return this.dogService.getHello();
  }

  @Get('greet/:id')
  public introduce(@Param('id') id: string, @Query() query: any): string {
    console.log('id ==> ', id);
    console.log('query ==>', query);
    // public introduce(@Req() request: Request, @Res() response: Response)
    // console.log('params ==>', request.params);
    // console.log('query ==>', request.query);

    return this.dogService.introduce();

    // const result = this.dogService.introduce();
    // response.status(200).send(result);
  }

  @Post('edit')
  public modifyDetail(@Body() body: any): string {
    console.log('body ==> ', body);

    return this.dogService.modifyDetail();
  }
}
