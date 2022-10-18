import { Module } from '@nestjs/common';
import { CardapioController } from '../../application/cardapio/cardapio.controller';
import { CardapioService } from '../../infrastructure/cardapio/cardapio.service';

@Module({
  controllers: [CardapioController],
  providers: [CardapioService]
})
export class CardapioModule {}
