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

export function getCartByUser(req,res){
    const idUser = req.params.id;
    // console.log(userId);
    Cart.findOne({userId: idUser})
        .populate("userId")
        .populate({
            path :"items.productId",
            populate: {
                path : "categoryId"
            }
        })
        .then(resData => res.json(resData))
        .catch(err=> res.json({message: err}))
}