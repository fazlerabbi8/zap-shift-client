import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import GoogleLogin from "./GoogleLogin";
import axios from "axios";

const Register = () => {
  const { registerUser, updateUserProfile } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async (data) => {
    try {
      // 1. Get selected image
      const image = data.photo[0];

      // 2. Upload image to Cloudinary
      const formData = new FormData();
      formData.append("file", image);
      formData.append(
        "upload_preset",
        import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
      );

      const imageAPI = `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`;

      const imageResponse = await axios.post(imageAPI, formData);

      // 3. Get Cloudinary URL
      const imageUrl = imageResponse.data.secure_url;

      console.log("Image URL:", imageUrl);

      // 4. Create Firebase user
      const result = await registerUser(data.email, data.password);

      await updateUserProfile({
        displayName: data.name,
        photoURL: imageUrl,
      });

      navigate(location?.state || "/");

      console.log("Name after update:", result.user.displayName);
      console.log("Photo after update:", result.user.photoURL);

      // console.log("Registration successful");
      // console.log("Firebase user:", result.user);
      // console.log("Firebase photo:", result.user.photoURL);

      // 6. Data for your backend
      const userInfo = {
        name: data.name,
        email: data.email,
        photoURL: imageUrl,
      };

      console.log("User info:", userInfo);
    } catch (error) {
      console.log("Registration error:", error.response?.data || error.message);
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
            <p className="text-red-500">Password must have 6 characters.</p>
          )}

          {errors?.password?.type === "pattern" && (
            <p className="text-red-500">
              Password must include uppercase, lowercase, number and special
              character.
            </p>
          )}

          <button className="btn btn-primary text-black mt-4">Register</button>
        </fieldset>

        <p>
          Already have an account?{" "}
          <Link state={location?.state}
          className="text-blue-600 underline" to="/login">
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
