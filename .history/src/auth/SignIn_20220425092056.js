import React from "react";
import { HiOutlineUser } from "react-icons/hi";

export default function SignIn() {
  return (
    <div className="container w-100 h-100 d-flex align-items-center justify-content-center py-5">
      <div>
        <h1 className="text-center">Sign in</h1>
        <form className="row mt-5">
          <div className="col-lg-12">
            <div>
              <div className="d-flex align-items-center flex-column gap-2">
                <div className="position-relative mb-3 d-flex">
                  <span className="input-group-text">
                    <HiOutlineUser />
                  </span>
                  <input
                    name="name"
                    id="name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your name*"
                  />
                </div>
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  placeholder="Enter your name*"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
