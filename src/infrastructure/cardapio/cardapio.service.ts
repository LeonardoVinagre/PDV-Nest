import { Injectable } from '@nestjs/common';
import { collection, doc, DocumentSnapshot, getDocs, query, where} from "firebase/firestore";
import Bebida from 'src/Bebida';
import testeLanche from 'src/Bebida';
import { database } from '../firestore/firestoreprovider';

@Injectable()
export class CardapioService {
    
    public async getCardapio(){
        
        const ref = database.collection('Cardapio');
        const snapshot = await ref.get();
        
        const docs = snapshot.docs.map((doc) => {
            return ({id:doc.id, ...doc.data()});
        })
        return docs;

    }
}


// const ref = database.collection('Cardapio').doc('Bebidas');
//         const snapshot = await ref.get();
        
//         return ({id:snapshot.id, ...snapshot.data()})