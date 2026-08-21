import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router";
import GoogleLogin from "./GoogleLogin";
import axios from "axios";

const Register = () => {
  const { registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      console.log("Form data:", data);

      // 1. Get selected image
      const image = data.photo[0];

      // 2. Create FormData for Cloudinary
      const formData = new FormData();

      formData.append("file", image);

      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
      );

      // 3. Cloudinary upload API
      const imageAPI = `https://api.cloudinary.com/v1_1/${
        import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
      }/image/upload`;

      // 4. Upload image to Cloudinary
      const imageResponse = await axios.post(imageAPI, formData);

      console.log("Cloudinary response:", imageResponse.data);

      // 5. Get image URL
      const imageUrl = imageResponse.data.secure_url;

      console.log("Image URL:", imageUrl);

      // 6. Create Firebase user
      const result = await registerUser(data.email, data.password);

      console.log("Firebase user:", result.user);
      console.log("Registration successful");

      // 7. User information
      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: imageUrl,
      };

      console.log("User info:", userInfo);

      // Later:
      // send userInfo to your Express/MongoDB backend

    } catch (error) {
      console.log(
        "Registration error:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>

          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Name"
          />

          {errors?.name?.type === "required" && (
            <p className="text-red-500">This field is required.</p>
          )}

          <label className="label">Photo</label>

          <input
            type="file"
            accept="image/*"
            {...register("photo", { required: true })}
            className="file-input w-full"
          />

          {errors?.photo?.type === "required" && (
            <p className="text-red-500">This field is required.</p>
          )}

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
            <p className="text-red-500">
              Password must have 6 characters.
            </p>
          )}

          {errors?.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must include uppercase, lowercase, number and
              special character.
            </p>
          )}

          <button className="btn btn-primary text-black mt-4">
            Register
          </button>
        </fieldset>

        <p>
          Already have an account?{" "}
          <Link className="text-blue-600 underline" to="/login">
            Login
          </Link>
        </p>
      </form>

      <h3 className="mt-4 text-center font-bold">OR</h3>

      <div className="text-center mt-3">
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Register;