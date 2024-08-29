import { FieldValues, useForm } from "react-hook-form";
import logo from "../../../assets/ogive logo.png";
import AuthServices from "../../../Services/AuthServices";
import { ILoginPayload } from "../../../interfaces/i-authentication";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const login = async (data: FieldValues) => {
    try {
      const loginData: ILoginPayload = {
        email: data.email,
        password: data.password
      };
      await AuthServices.login(loginData).then((res) => {
        localStorage.setItem("token", res.data.details.token);
        console.log(res.data.details.token);
        reset()
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <img
              src={logo}
              alt="AdminLTE Logo"
              className="brand-image "
              width={120}
              style={{ opacity: "" }}
            />
            {/* <b>
              Technology

            </b> */}
          </a>
        </div>
        <div className="card">
          <div className="card-body rounded-3 login-card-body">
            <p className="login-box-msg">Login</p>

            <form onSubmit={handleSubmit(login)}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  {...register("email")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  {...register("password")}
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block">
                    Log In
                  </button>
                </div>
              </div>
            </form>

            {/* <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
              <a href="register.html" className="text-center">
                Register a new membership
              </a>
            </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}
