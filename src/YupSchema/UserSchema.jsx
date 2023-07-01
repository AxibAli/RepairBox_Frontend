import * as Yup from "yup"


const UserSchema = Yup.object().shape({
  name: Yup.string().max(15, 'Must be 15 characters or less').required('Name is Required'),
  email: Yup.string().email('Email is Invalid').required('Email Is Required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is Required'),
  select: Yup.string().required("Please select an option"),
});

export default UserSchema;