const Koa = require('koa');
const Router = require('koa-router');
const admin = require('firebase-admin');
const serviceAccount = require('./firebase-function-test.json');
const { queryStatePending, queryStateComplete } = require('./state-query.js'); 

const app = new Koa();
const router = new Router();


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

router.get('/', async (ctx) => {
  ctx.body = 'Hello Koa + Firebase!';
});


router.get('/state-pending', async (ctx) => {
    await queryStatePending(db);
    ctx.body = 'Logged State = PENDING';
});
  

router.get('/state-complete', async (ctx) => {
    await queryStateComplete(db);
    ctx.body = 'Logged State = COMPLETE';
});

app.use(router.routes());
app.use(router.allowedMethods());


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
