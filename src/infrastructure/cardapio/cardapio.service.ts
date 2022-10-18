import { Injectable } from '@nestjs/common';
import { collection, getDocs} from "firebase/firestore";
import { database } from '../firestore/firestoreprovider';

@Injectable()
export class CardapioService {
    
    public async getCardapio(){
        
        const ref = collection(database,'Cardapio')
        const teste = getDocs(ref)
            .then((snapshot) => {
                const cardapio = snapshot.docs.map((doc) => ({
                                    id:doc.id,
                                    ...doc.data()
                                }))
                return cardapio;
            })
        return teste;
    }
}
