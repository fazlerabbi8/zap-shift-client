import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import GoogleLogin from "./GoogleLogin";

const Register = () => {
  const {registerUser} = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleResister = (data) => {
    console.log(data);

    registerUser(data.email, data.password)
    .then(result => {
      console.log(result.user)
    })
    .catch(err => {
      console.log(err.message)
    })
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
        <p>Already have an account please <Link className="text-blue-600 underline"  to={"/login"}>Login</Link></p>
      </form>
      <h3 className="mt-4 text-center font-bold">OR</h3>
      <div className="text-center mt-3">
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Register;
