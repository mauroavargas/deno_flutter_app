import { Application, Router } from "https://deno.land/x/denotrain@v0.5.0/mod.ts";
import { quotes } from './quotes.ts';

const app = new Application({ hostname: '192.168.1.3' });

const router = new Router();


app.get('/', (ctx)=>{
    return 'Hello Mauro from Deno!!';
})

app.use('/api', router);


router.get('/quotes', (ctx)=>{
    return {'quotes' : quotes};
})

await app.run();