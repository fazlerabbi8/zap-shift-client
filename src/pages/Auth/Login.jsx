import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin";
import toast from "react-hot-toast";

const Login = () => {
  const { loginUser, forgetPassword } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);

    loginUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        navigate(location?.state || "/");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = getValues("email");
    console.log("Sending reset to:", email);
    
    if (!email) {
      toast.error("Please enter your email first.");
      return;
    }

    forgetPassword(email)
      .then(() => {
        toast.success("Password reset email sent!");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
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

          <div className="text-start">
            <button
              type="button"
              onClick={handleForgetPassword}
              className="link link-hover "
            >
              Forgot password?
            </button>
          </div>
          <button className="btn btn-primary text-black mt-4">Login</button>
        </fieldset>
        <p>
          Don't have any account please{" "}
          <Link
            state={location?.state}
            className="text-blue-600 underline"
            to={"/register"}
          >
            Register
          </Link>
        </p>
      </form>
      <h3 className="mt-4 text-center font-bold">OR</h3>
      <div className="text-center mt-3">
        <GoogleLogin></GoogleLogin>
      </div>
    </div>
  );
};

export default Login;
