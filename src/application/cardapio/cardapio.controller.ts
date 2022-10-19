import { Controller, Get } from '@nestjs/common';
import { CardapioService } from '../../infrastructure/cardapio/cardapio.service';

@Controller('cardapio')
export class CardapioController {
    
    constructor(private cardapioService: CardapioService) {}

    @Get()
     getCardapio() {
        return this.cardapioService.getCardapio();
    }
}
