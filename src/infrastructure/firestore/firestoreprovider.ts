var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert('./src/infrastructure/firestore/ServiceAccountKey.json'),
    databaseURL: 'https://pdv-eep-7469a-default-rtdb.firebaseio.com'
});

const db = admin.firestore();
export {db as database};