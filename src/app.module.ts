import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { ProxyMiddleware } from './proxy.middleware';
 import { AuthMiddleware } from './auth.middleware';

@Module({
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer     
      .apply(AuthMiddleware)
      .forRoutes('*')
      .apply(ProxyMiddleware)
      .forRoutes('*');
  }    
}
