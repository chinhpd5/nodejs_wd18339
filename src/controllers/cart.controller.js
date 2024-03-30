import Cart from '../models/cart.model.js'

//[POST] /cart
export function addCart(req,res){
    const data = req.body;
    // console.log(data);

    if(!data && data == {})
        return res.status(400).json({message:"thiếu dữ liệu"});

    Cart.create(data)
        .then(resData=> res.status(201).json(resData))
        .catch(err=> res.status(500).json({message: err}))

}
// [GET] cart/user/:id
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

//[PUT] cart/:id

export async function updateItem(req,res){
    try{
        const id = req.params.id;
        // console.log(id);
        const cartNow = await Cart.findById(id);
        // console.log(cartNow);
        if(!cartNow || cartNow =={})
            return res.status(400).json({message: "không tìm thấy giỏ hàng"});

        const data = req.body;
        // console.log(data);
        if(!data || data=={}){
            return res.status(400).json({message: "không nhận được dữ liệu"});
        }
        // gán danh sách sản phẩm mới vào sản phẩm cũ trong giỏ hàng
        cartNow.items = data.items;
        // lưu vào CSDL
        await cartNow.save();

        res.status(200).json({
            message: "cập nhật thành công",
            cartNow
        })
    }catch(err){
        res.status(400).json({message: err})
    }

}