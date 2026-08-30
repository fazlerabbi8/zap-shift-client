import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useLoaderData } from "react-router";
import {
  User,
  IdCard,
  Mail,
  MapPin,
  Phone,
  Bike,
  FileText,
  Hash,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const FieldError = ({ message }) =>
  message ? (
    <p className="mt-1 text-xs font-medium text-rose-500">{message}</p>
  ) : null;

const inputBase =
  "w-full rounded-xl border bg-white py-3 pl-11 pr-4 text-[15px] text-stone-800 placeholder:text-stone-400 outline-none transition focus:ring-2";

const Rider = () => {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  // Same data your SendParcel form loads via the route loader.
  const serviceCenters = useLoaderData();
  const axiosSecure = useAxiosSecure();
  const regions = [...new Set(serviceCenters.map((c) => c.region))];

  const [submitted, setSubmitted] = useState(false);

  const selectedRegion = useWatch({ control, name: "region" });

  const districtsOfRegion = (region) =>
    serviceCenters.filter((c) => c.region === region).map((c) => c.district);

  const onSubmit = async (data) => {
    // Swap this block for your real request, e.g.:
    // await axiosSecure.post("/riders", data);
    await new Promise((r) => setTimeout(r, 700));
    console.log("Rider application:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 3500);

    axiosSecure.post("/riders", data).then((res) => {
      if (res.data.insertedId) {
        Swal.fire("Your application submitted successfully.we will reachout to you within 7 days");
      }
    });
  };

  return (
    <div className="min-h-screen w-full px-4 py-10 sm:px-8">
      <div className="mx-auto max-w-2xl overflow-hidden">
        <div className="px-6 py-10 sm:px-10 sm:py-12">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#4C6B3F]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#4C6B3F]">
            Riders wanted
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-stone-900">
            Be a Rider
          </h2>
          <p className="mt-3 max-w-md text-[15px] leading-relaxed text-stone-500">
            Enjoy fast, reliable parcel delivery with real-time tracking and
            zero hassle. From personal packages to business shipments — we
            deliver on time, every time.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-9 space-y-5">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-stone-400">
              Tell us about yourself
            </h3>

            {/* Name */}
            <div>
              <div className="relative">
                <User className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Your Name"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("name", { required: "Your name is required" })}
                />
              </div>
              <FieldError message={errors.name?.message} />
            </div>

            {/* Driving license */}
            <div>
              <div className="relative">
                <IdCard className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Driving License Number"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("drivingLicense", {
                    required: "Driving license number is required",
                  })}
                />
              </div>
              <FieldError message={errors.drivingLicense?.message} />
            </div>

            {/* Email */}
            <div>
              <div className="relative">
                <Mail className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="email"
                  placeholder="Your Email"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("email", {
                    required: "Your email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
              </div>
              <FieldError message={errors.email?.message} />
            </div>

            {/* Region + District */}
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                  <select
                    defaultValue=""
                    className={`${inputBase} appearance-none border-stone-200 pr-9 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                    {...register("region", { required: "Select your region" })}
                  >
                    <option value="" disabled>
                      Select your Region
                    </option>
                    {regions.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                </div>
                <FieldError message={errors.region?.message} />
              </div>

              <div>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                  <select
                    defaultValue=""
                    disabled={!selectedRegion}
                    className={`${inputBase} appearance-none border-stone-200 pr-9 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15 disabled:cursor-not-allowed disabled:bg-stone-50 disabled:text-stone-400`}
                    {...register("district", {
                      required: "Select your district",
                    })}
                  >
                    <option value="" disabled>
                      Select your District
                    </option>
                    {districtsOfRegion(selectedRegion).map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />
                </div>
                <FieldError message={errors.district?.message} />
              </div>
            </div>

            {/* NID */}
            <div>
              <div className="relative">
                <Hash className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="NID"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("nid", { required: "NID number is required" })}
                />
              </div>
              <FieldError message={errors.nid?.message} />
            </div>

            {/* Phone */}
            <div>
              <div className="relative">
                <Phone className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9+\-\s]{7,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                />
              </div>
              <FieldError message={errors.phone?.message} />
            </div>

            {/* Bike brand/model/year */}
            <div>
              <div className="relative">
                <Bike className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Bike Brand Model and Year"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("bikeInfo", {
                    required: "Bike brand, model and year is required",
                  })}
                />
              </div>
              <FieldError message={errors.bikeInfo?.message} />
            </div>

            {/* Bike registration number */}
            <div>
              <div className="relative">
                <IdCard className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  placeholder="Bike Registration Number"
                  className={`${inputBase} border-stone-200 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("bikeRegistration", {
                    required: "Bike registration number is required",
                  })}
                />
              </div>
              <FieldError message={errors.bikeRegistration?.message} />
            </div>

            {/* About yourself */}
            <div>
              <div className="relative">
                <FileText className="pointer-events-none absolute left-4 top-3.5 h-4.5 w-4.5 text-stone-400" />
                <textarea
                  rows={3}
                  placeholder="Tell Us About Yourself"
                  className={`${inputBase} resize-none border-stone-200 pt-3 focus:border-[#4C6B3F] focus:ring-[#4C6B3F]/15`}
                  {...register("about")}
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 w-full rounded-xl bg-primary py-3.5 text-[15px] font-semibold text-white"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rider;
