import { Link } from "react-router";

const PaymentCancel = () => {
    return (
        <div>
            <h3 className="text-red-600 text-2xl font-semibold text-center mt-20">Your Payment Successfull</h3>
            <Link to={'/dashboard/my-parcels'} className="btn btn-accent">Try Again</Link>
        </div>
    );
};

export default PaymentCancel;