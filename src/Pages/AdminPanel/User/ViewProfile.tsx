import { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { IErrorMessageResponse } from "../../../interfaces/i-authentication";

import {
  errorMessage,
  successMessage
} from "../../../utils/fetchResponseMessage";
import { showToast } from "../../../utils/toast";
import {
  IChangePassword,
  IUpdateProfile,
  IUserResponse
} from "../../../interfaces/i-user";
import { FieldValues, useForm } from "react-hook-form";
import Pageheader from "../../../Component/Pageheader";
import Toast from "../Admin_Component/Toast";
import AuthServices from "../../../Services/AuthServices";

export default function ViewProfile() {
  const [profileInformation, setprofileInformation] = useState<IUserResponse>();
  const { register, handleSubmit, reset } = useForm();
  const [isEmailSended, setIsEmailSended] = useState(
    profileInformation?.isVerified
  );
  const getProfile = async () => {
    try {
      await AuthServices.getCurrentUser().then((res: AxiosResponse) => {
        const data = res.data.details.user;
        setprofileInformation(res.data.details.user);
        reset({
          neme: data.name,
          email: data.email
        });
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  const updateProfile = async (data: FieldValues) => {
    try {
      const userPayload: IUpdateProfile = {
        name: data?.name,
        email: data?.email
      };
      await AuthServices.updateProfile(userPayload).then(
        (res: AxiosResponse) => {
          const message = successMessage(res.data.message);
          showToast({
            message: message,
            type: "success"
          });
          getProfile();
          reset();
        }
      );
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  const changePassword = async (data: FieldValues) => {
    try {
      const userPayload: IChangePassword = {
        oldPassword: data?.currentPassword,
        newPassword: data?.newPassword
      };
      await AuthServices.changePassword(userPayload).then(
        (res: AxiosResponse) => {
          const message = successMessage(res.data.message);
          showToast({
            message: message,
            type: "success"
          });
          reset();
        }
      );
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };

  const sendVerificationCode = async () => {
    try {
      setIsEmailSended(true);
      const emailPayload = {
        email: profileInformation?.email
      };
      await AuthServices.sendEmail(emailPayload).then((res: AxiosResponse) => {
        const message = successMessage(res.data.message);
        showToast({
          message: message,
          type: "success"
        });
        reset();
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    } finally {
      setTimeout(() => {
        setIsEmailSended(profileInformation?.isVerified);
      }, 50000);
    }
  };

  const verifyUser = async (data: FieldValues) => {
    try {
      const emailPayload = {
        email: profileInformation?.email,
        code: data?.code
      };
      await AuthServices.verifyUser(emailPayload).then((res: AxiosResponse) => {
        const message = successMessage(res.data.message);
        showToast({
          message: message,
          type: "success"
        });
        getProfile();
        reset();
      });
    } catch (error) {
      const message = errorMessage(error as AxiosError<IErrorMessageResponse>);
      showToast({
        message: message,
        type: "error"
      });
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <Pageheader Title="Profile" />
      <div className="container rounded bg-white mt-5 mb-5">
        <div className="row">
          <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                width="150px"
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              />
              <span className="font-weight-bold">
                {profileInformation?.name}
              </span>
              <span
                className={`text-black-50 bg-success badge ${
                  profileInformation?.isVerified ? "bg-success" : "bg-danger"
                }`}
              >
                {profileInformation?.role === 1
                  ? "Admin"
                  : profileInformation?.role === 2
                  ? "Manager"
                  : "User"}
              </span>

              <div
                className={`mt-3 input-group text-center mx-auto ${
                  profileInformation?.isVerified ? "d-none" : ""
                }`}
              >
                <button
                  className={`btn btn-primary mr-1 m-0 p-2 px-3 fs-6 mx-auto mt-3 ${
                    isEmailSended ? "d-none" : ""
                  }`}
                  type="submit"
                  id="button-addon2"
                  onClick={sendVerificationCode}
                >
                  Send Verification Mail
                </button>
                <form onSubmit={handleSubmit(verifyUser)} className="mx-auto">
                  <input
                    type="text"
                    className="form-control mt-2 mb-2"
                    placeholder="Verification Cde"
                    {...register('code')}
                    required
                  />
                  <button
                   className="btn btn-primary mr-1 m-0 p-2 px-3 fs-6"
                    type="submit"
                    id="button-addon2"
                  >
                    Verify
                  </button>
                </form>
              </div>
              <span></span>
            </div>
          </div>
          <div className="col-md-5 border-right ">
            <form onSubmit={handleSubmit(updateProfile)}>
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2 text-left">
                  <div className="col-md-12">
                    <label className="labels">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      defaultValue={profileInformation?.name}
                      {...register("name")}
                    />
                  </div>

                  <div className="col-md-12 mt-4">
                    <label className="labels">Email</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
                      defaultValue={profileInformation?.email}
                      {...register("email")}
                    />
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button p-2 px-3 fs-6 m-0"
                    type="submit"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="col-md-4 text-left">
            <form onSubmit={handleSubmit(changePassword)}>
              <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Changge Password</h4>
                </div>
                <div className="col-md-12">
                  <label htmlFor="currentPassword" className="labels">
                    Current Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Current Password"
                    id="currentPassword"
                    {...register("currentPassword")}
                  />
                </div>{" "}
                <br />
                <div className="col-md-12">
                  <label htmlFor="newPassword" className="labels">
                    New Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="New Password"
                    id="newPassword"
                    {...register("newPassword")}
                  />
                </div>{" "}
                <div className="mt-5 text-center">
                  <button
                    className="btn btn-primary profile-button p-2 px-3 fs-6 m-0"
                    type="submit"
                  >
                    Change Password
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <Toast />
        {/* <UserVerify /> */}
      </div>
    </>
  );
}
