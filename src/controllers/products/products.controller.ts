import {
  Controller,
  Get,
  Param,
  Post,
  Query,
  Body,
  Put,
  Delete,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getProduct(@Param('id') productId: string) {
    return `Producto con el id: ${productId}`;
  }

  @Get('/')
  getProducts(@Query('limit') limit = '100', @Query('offset') offset = '50') {
    return `Products limit:${limit} and offset: ${offset}`;
  }

  @Post()
  create(@Body() payload) {
    return {
      message: 'Action to create',
      payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    return {
      id,
      payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return id;
  }
}
