import * as Yup from "yup";

export const BrandsSchema = Yup.object({
    name : Yup.string().min(2).max(24).required("Please Enter Brand Name"),
    file : Yup.mixed().test("fileSize", "The file is to large", (value) =>{
        if(!value.length) return true
        return value[0].size <=2000000
    }),
})


