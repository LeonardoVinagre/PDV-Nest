import { Injectable } from '@nestjs/common';
import { collection, getDocs, orderBy} from "firebase/firestore";
import { database } from '../firestore/firestoreprovider';

@Injectable()
export class LancheService {
    
    public async getLanches(){
        // const lanchesRef = database.collection('lanches').orderBy("id");
        // const lanchesDoc = await lanchesRef.get();

        // const lanches = [];

        // lanchesDoc.forEach(doc => lanches.push(doc.data()))
        // return lanches;
        const ref = collection(database,'Cardapio')
        const teste = getDocs(ref)
            .then((snapshot) => {
                let cardapio = []
                snapshot.docs.forEach((doc) => {
                    cardapio.push({ ...doc.data()})
                    
                })
                return cardapio;
            })
        return teste;
    }
}
