const productList = [
    { id: 1, name: "product1", price: 300 },
    { id: 2, name: "abc", price: 300 },
    { id: 3, name: "abc", price: 300 }
]

export function index(req, res) {
    res.render('product', { data: productList })
    // const query = req.query;
    // console.log(query);
    // //map, filter, reduce, some, every
    // const findProduct=  productList.filter(product => {
    //   return product.name.includes(query.name)
    // } )

    // if(findProduct.length)
    //   res.send(findProduct)
    // else
    //   res.send(productList)
}

export function getById(req, res) {
    let id = req.params.id;
    const product = productList.find(item => item.id == id);
    if (product)
        res.send(product);
    else
        res.send("Không tìm thấy sản phẩm")
}