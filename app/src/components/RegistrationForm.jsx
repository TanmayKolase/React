import React from "react";
import { useForm } from "react-hook-form";
const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Name: </label>
        <input {...register("name", { required: "Name is required" })} />
        {errors.name && <p>{errors.name?.message}</p>}

        <br />
        <label>Email: </label>
        <input {...register("email", { required: "Email is required" })} />
        {errors.email && <p>{errors.email?.message}</p>}

        <br />

        <label>Password: </label>
        <input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
        {errors.password && <p>{errors.password?.message}</p>}

        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default RegistrationForm;
