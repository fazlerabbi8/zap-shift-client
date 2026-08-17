import logo from "../../assets/logo.png";

const Logo = () => {
    return (
        <div className="flex justify-center items-center">
            <img src={logo} alt="" />
            <h3 className="text-2xl font-semibold -ms-3">zapShift</h3>
        </div>
    );
};

export default Logo;