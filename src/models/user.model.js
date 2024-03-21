import mongoose  from "mongoose";
function validateEmail(textEmail){
    return /^\S+@\S+\.\S+$/.test(textEmail);
}

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Không được để trống name"],
        lowercase: true,
        trim: true,
        minLength: [2,"Cần tối thiểu 2 kí tự"],
        maxLength: [10,"Tối đa 10 kí tự"]
    },
    age: {
        type: Number,
        min: [1,"Tối thiểu là 1 tuổi"],
        max: [100,"Tối đa 100 tuổi"]
    },
    email: {
        type: String,
        unique: [true, "đã tồn tại email"],
        validate:{
            validator: validateEmail,
            message: "Không đúng định dạng email"
        }
    },
    gender: {
        type: Boolean,
        default: true
    }
})

export default mongoose.model("user",userSchema);