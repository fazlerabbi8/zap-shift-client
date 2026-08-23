import { useForm } from "react-hook-form";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSendParcel = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-3">Send A Parcel</h2>

      {/* গুরুত্বপূর্ণ: onSubmit ব্যবহার করতে হবে */}
      <form onSubmit={handleSubmit(handleSendParcel)}>
        
        {/* Parcel Type */}
        <div className="mb-5">
          <label>
            <input
              type="radio"
              value="Document"
              {...register("parcelType")}
              className="radio mr-2"
              defaultChecked
            />
            Document
          </label>

          <label className="ml-3">
            <input
              type="radio"
              value="Non Document"
              {...register("parcelType")}
              className="radio mr-2"
            />
            Non Document
          </label>
        </div>

        {/* Parcel Info */}
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
          
          {/* Sender Details */}
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
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender Address"
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

          {/* Receiver Details */}
          <div>
            <h4 className="text-2xl font-semibold">Receiver Details</h4>

            <div>
              <label className="label">Receiver Name</label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full"
                placeholder="Receiver Name"
              />

              <label className="label">Receiver Email</label>
              <input
                type="email"
                {...register("receiverEmail")}
                className="input w-full"
                placeholder="Receiver Email"
              />

              <label className="label">Receiver Phone</label>
              <input
                type="text"
                {...register("receiverPhone")}
                className="input w-full"
                placeholder="Receiver Phone"
              />

              <label className="label">Receiver Address</label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver Address"
              />

              <label className="label">Receiver District</label>
              <input
                type="text"
                {...register("receiverDistrict")}
                className="input w-full"
                placeholder="Receiver District"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          className="btn btn-primary mt-8 text-black"
          value="Send Parcel"
        />
      </form>
    </div>
  );
};

export default SendParcel;