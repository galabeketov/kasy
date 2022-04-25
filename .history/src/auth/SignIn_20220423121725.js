import React from "react";
import { HiOutlineUser } from "react-icons";

export default function SignIn() {
  return (
    <div className="container w-100 h-100 d-flex align-items-center justify-content-center py-5">
      <div>
        <h1>Sign in</h1>
        <div className="row">
          <div className="col-lg-6">
            <div className="position-relative mb-3">
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
          </div>
        </div>
      </div>
    </div>
  );
}
