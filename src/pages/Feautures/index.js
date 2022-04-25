import React from "react";
import {
  BiTrophy,
  BiAtom,
  BiEnvelope,
  BiLockOpen,
  BiShield,
} from "react-icons/bi";
import { FiOctagon } from "react-icons/fi";

export default function Feautures() {
  return (
    <>
      {/*  <!-- Start features --> */}
      <section className="section features features-bg" id="features">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center mb-5">
                <h3 className="heading">Features</h3>
                <p className="text-muted fs-17">
                  Ut enim ad minima veniam quis nostrum exercitationem ullam
                  corporis suscipit laboriosam nisi commodi consequatur.
                </p>
              </div>
            </div>
            {/* <!-- end col--> */}
          </div>
          {/* <!-- end row--> */}
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <BiTrophy className="iconFont" />
                    </div>
                  </div>
                  <h5>Responsive Layout</h5>
                  <p className="text-muted">
                    Aenean tellus metus bibendum sed posuere ac pede amet augue
                    turpis Pellentesque posuere.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div className="col-lg-4 col-md-6">
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <BiAtom className="iconFont" />
                    </div>
                  </div>
                  <h5>Powerful Performance</h5>
                  <p className="text-muted">
                    Nisi aenean vulputate eleifend tellus vitae eleifend enim a
                    Aliquam aenean elementum semper.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div className="col-lg-4 col-md-6">
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <BiEnvelope className="iconFont" />
                    </div>
                  </div>
                  <h5>Work With Love</h5>
                  <p className="text-muted">
                    Pellentesque habitant morbi tristique senectus et turpis
                    egestas dui magna posuere eget justo.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div className="col-lg-4 col-md-6">
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <BiLockOpen className="iconFont" />
                    </div>
                  </div>
                  <h5>Unique Design</h5>
                  <p className="text-muted">
                    In ac felis quis tortor malesuada pretium pellentesque
                    sapien ipsum porta euismod ut mi.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div className="col-lg-4 col-md-6">
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <BiShield className="iconFont" />
                    </div>
                  </div>
                  <h5>Retina Ready Graphics</h5>
                  <p className="text-muted">
                    Donec elit libero sodales nec volutpat a suscipit nec
                    pellentesque velit pedepede primis.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
            <div className="col-lg-4 col-md-6">
              <div className="card features-card">
                <div className="card-body">
                  <div className="avatar-md mb-4">
                    <div className="avatar-title bg-primary rounded-circle">
                      <FiOctagon className="iconFont" />
                    </div>
                  </div>
                  <h5>Creative Design</h5>
                  <p className="text-muted">
                    Maecenas ullamcorper dui et placerat feugiat eros pede felis
                    nunc loremlorem Sed fermentum.
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- end col --> */}
          </div>
          {/* <!-- end row --> */}
        </div>
        {/* <!-- end container --> */}
      </section>
      {/* <!-- end Features --> */}
    </>
  );
}
