import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductsService } from 'src/products/services/products.service';
import { ParseIntPipe } from 'src/common/parse-int/parse-int.pipe';
import { CreateProductDto } from 'src/products/dtos/products.dto';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  getProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productsService.findOne(id);
  }

  @Get('')
  getProducts(@Query('limit') limit = '100', @Query('offset') offset = '50') {
    return this.productsService.findAll();
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    // return {
    //   message: 'Action to create',
    //   payload,
    // };
    return this.productsService.create(payload);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return this.productsService.update(+id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
