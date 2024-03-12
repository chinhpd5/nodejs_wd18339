import routerProduct from './product.router.js';
import routerCategory from './category.router.js';
import routerComon from './comon.router.js';



function router(app){
    app.use('/product',routerProduct);
    app.use('/category',routerCategory);
    app.use('/',routerComon);
}

export default router;