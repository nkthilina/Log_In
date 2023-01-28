import React from "react";
import bgImg from "./img1.jpg";
import { useForm } from "react-hook-form";

export default function Form() {
  const {register,handleSubmit , watch ,formState:{errors}} = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch('username'));

  return (
    <section>
      <div className="register">
        <form id="form" className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <h2>Sign In</h2>
          <span>Register and enjoy the service</span>
          <input type="text" {...register("username")} placeholder="username" />
          <input type="text" {...register("password")} placeholder="password" />
          <input type="text" {...register("email")} placeholder="email" />
          <input type="text" {...register("mobile number",{required:true,maxLength:10})} placeholder="mobile number"/>
          {errors.mobile?.type==="required" && "Mobile number is required"}
          {errors.mobile?.type==="maxLength" && "Maximum length is exceeded"}
          <button className="btn">Sign In</button>
        </form>
      </div>
    </section>
  );
}
