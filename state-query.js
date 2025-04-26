async function queryStatePending(db) {
  const stateRef = db.collection('messages');
  const snapshot = await stateRef.where('state', '==', 'PENDING').get();
  console.log(snapshot.size);

  const resultArray = []
  if (snapshot.size === 0){
    console.log(resultArray);
    return resultArray;
  } else {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  }
}

async function queryStateComplete(db) {
  const stateRef = db.collection('messages');
  const snapshot = await stateRef.where('state', '==', 'COMPLETE').get();
  console.log(snapshot.size);

  const resultArray = []
  if (snapshot.size === 0){
    console.log(resultArray);
    return resultArray;
  } else {
    snapshot.forEach(doc => {
      console.log(doc.id, '=>', doc.data());
    });
  }
}

module.exports = { queryStatePending, queryStateComplete };
