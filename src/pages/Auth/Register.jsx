import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleResister = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleResister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />

          {errors?.email?.type === "required" && (
            <p className="text-red-500">This field is required.</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors?.password?.type === "required" && (
            <p className="text-red-500">This field is required.</p>
          )}
          {errors?.password?.type === "minLength" && (
            <p className="text-red-500">Password must have 6 character.</p>
          )}
          {errors?.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must be at least 8 characters long and include at least
              one uppercase letter, one lowercase letter, one number, and one
              special character.
            </p>
          )}
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
