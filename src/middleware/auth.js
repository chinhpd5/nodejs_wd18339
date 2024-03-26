import 'dotenv/config'
import jwt from 'jsonwebtoken'

function checkAuth(req,res,next){
    if(req.headers.authorization){
        // console.log(req.headers.authorization);
        const token = req.headers.authorization.split(' ')[1];
        // console.log(token);
        if(!token)
            return res.status(401).json({message: "Thiếu token"})

        //có token
        jwt.verify(token, process.env.KEY_SECRET, function (err, decoded) {
            // console.log(err);
            if(err){
                if(err.name == "JsonWebTokenError")
                    return res.status(401).json({message: "Sai token"});
                else if(err.name =="TokenExpiredError")
                    return res.status(403).json({message: "Token hết hạn"});
            }

            //nếu check thành công 
            next();
            
        })

    }else{
        return res.status(401).json({message: "Thiếu token"})
    }
}

export default checkAuth;