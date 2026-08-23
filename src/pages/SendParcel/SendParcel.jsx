import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-3">Send A Parcel</h2>
      {/* parcel type */}
      <div>
        <label>
          <input
            type="radio"
            name="radio-1"
            className="radio mr-2"
            defaultChecked
          />
          Document
        </label>
        <label className="ml-3">
          <input type="radio" name="radio-1" className="radio mr-2" />
          Non Document
        </label>
      </div>
      {/* parcel info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-5">
        <fieldset className="fieldset">
          <label className="label">Parcel Name</label>
          <input
            type="text"
            {...register("parcelName")}
            className="input w-full"
            placeholder="Parcel Name"
          />
        </fieldset>
        <fieldset className="fieldset">
          <label className="label">Parcel Weight</label>
          <input
            type="number"
            {...register("parcelWeight")}
            className="input w-full"
            placeholder="Parcel Weight"
          />
        </fieldset>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* sender details */}
        <div>
          <h4 className="text-2xl font-semibold">Sender Details</h4>
          <div>
            <label className="label">Sender Name</label>
            <input
              type="text"
              {...register("senderName")}
              className="input w-full"
              placeholder="Sender Name"
            />
            <label className="label">Sender Email</label>
            <input
              type="email"
              {...register("senderEmail")}
              className="input w-full"
              placeholder="Sender Email"
            />
            <label className="label">Sender Phone</label>
            <input
              type="text"
              {...register("senderPhone")}
              className="input w-full"
              placeholder="Sender Phone"
            />
            <label className="label">Sender Address</label>
            <input
              type="number"
              {...register("senderPhone")}
              className="input w-full"
              placeholder="Sender Phone"
            />
            <label className="label">Sender District</label>
            <input
              type="text"
              {...register("senderDistrict")}
              className="input w-full"
              placeholder="Sender District"
            />
          </div>
        </div>
        {/* reciver details */}
        <div>
          <h4 className="text-2xl font-semibold">Reciver Details</h4>
          <div>
            <label className="label">Reciver Name</label>
            <input
              type="text"
              {...register("ReciverName")}
              className="input w-full"
              placeholder="Reciver Name"
            />
            <label className="label">Reciver Email</label>
            <input
              type="email"
              {...register("ReciverEmail")}
              className="input w-full"
              placeholder="Reciver Email"
            />
            <label className="label">Sender Phone</label>
            <input
              type="text"
              {...register("ReciverPhone")}
              className="input w-full"
              placeholder="Reciver Phone"
            />
            <label className="label">Reciver Address</label>
            <input
              type="number"
              {...register("ReciverPhone")}
              className="input w-full"
              placeholder="Reciver Phone"
            />
            <label className="label">Reciver District</label>
            <input
              type="text"
              {...register("ReciverDistrict")}
              className="input w-full"
              placeholder="Reciver District"
            />
          </div>
        </div>
      </div>
      <button className="btn btn-primary mt-4 text-black">Send Parcel</button>
    </div>
  );
};

export default SendParcel;
