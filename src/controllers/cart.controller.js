import Cart from '../models/cart.model.js'

//[POST] /cart
export function addCart(req,res){
    const data = req.body;
    console.log(data);

    if(!data && data == {})
        return res.status(400).json({message:"thiếu dữ liệu"});

    Cart.create(data)
        .then(resData=> res.status(201).json(resData))
        .catch(err=> res.status(500).json({message: err}))

}