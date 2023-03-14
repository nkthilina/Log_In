// import React from "react";
// import { useForm } from "react-hook-form";

// export default function Form() {
//   const {register,handleSubmit , watch ,formState:{errors}} = useForm();
//   const onSubmit = data => console.log(data);
//   //console.log(watch('username'));

//   return (
//     <section>
//       <div className="register">
//         <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
//           <h2 className="sign">Sign Up</h2>
//           <span>Register and Enjoy the Service</span>
//           <input className="input" type="text" {...register("username")} placeholder="username" />
//           <input className="input" type="text" {...register("email")} placeholder="email" />
//           <input className="input" type="text" {...register("password")} placeholder="password" />
//           <input className="input" type="date" {...register("date")} placeholder="date" />
//           {/* <input className="input" type="radio" {...register("gender")} placeholder="gender" />
//           <input className="input" type="radio" {...register("gender")} placeholder="gender" /> */}
//           <input className="input" type="text" {...register("email")} placeholder="email" />
//           <input className="input" type="text" {...register("email")} placeholder="email" />
//           <input className="input" type="text" {...register("mobile number",{required:true,maxLength:10})} placeholder="mobile number"/>
//           {errors.mobile?.type==="required" && "Mobile number is required"}
//           {errors.mobile?.type==="maxLength" && "Maximum length is exceeded"}
//           <button className="btn">Sign Up</button>
//         </form>
//       </div>
//     </section>
//   );
// }

import React, { useState } from "react";
import FormLogIn from "./FormLogIn";
import FormSuccess from "./FormSuccess";
import "./Form.css";

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className="form-container">
        <span className="close-btn"></span>
        {!isSubmitted ? (
          <FormLogIn submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;

