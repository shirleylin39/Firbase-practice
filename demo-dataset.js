const admin = require('firebase-admin');

const serviceAccount = require('./firebase-function-test.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const sampleData = [
  {
    lastMessage: {
        type: "text", content: "哈囉",
    },
    lastName: "Lin",
    mobile: "0912345678",
    state: "",
  },
  {
    lastMessage: {
        type: "image", content: "...",
    },
    lastName: "陳",
    mobile: "0923456789",
    state: "PENDING",
  },
  {
    lastMessage: {
        type: "image", content: "...",
    },
    lastName: "歐陽",
    mobile: "0912987654",
    state: "PENDING",
  },
  {
    lastMessage: {
        type: "text", content: "你好",
    },
    lastName: "Huang",
    mobile: "0987654321",
    state: "COMPLETE",
  },
  {
    lastMessage: {
        type: "text", content: "Hi!",
    },
    lastName: "張",
    mobile: "0934567890",
    state: "PENDING",
  },
  {
    lastMessage: {
        type: "image", content: "...",
    },
    lastName: "Liu",
    mobile: "0909876543",
    state: "",
  },
];

async function seedData() {
  const batch = db.batch();

  sampleData.forEach((data) => {
    const docRef = db.collection('messages').doc();
    batch.set(docRef, data);
  });

  await batch.commit();
  console.log('✨ Sample data inserted');
}

seedData();
