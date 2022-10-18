import { Module } from '@nestjs/common';

import { CardapioModule } from '../cardapio/cardapio.module';

@Module({
  imports: [CardapioModule],

})
export class AppModule {}
