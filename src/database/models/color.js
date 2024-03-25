import mongoose, { Schema } from "mongoose";

const colorSchema = new Schema({

        hexaColor:{
            type: String,
            required: true,
        }
})
const Color = mongoose.model('color', colorSchema)
export default Color