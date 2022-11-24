import { Controller, Get, Param, Query } from '@nestjs/common';

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
}
