import * as Yup from "yup";

export const repdevicesSchema = Yup.object().shape({
    
        repdevicesDrop : Yup.string().required("Please select an option"),
    
})