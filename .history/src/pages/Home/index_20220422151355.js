import React from "react";
import { HiChevronDoubleRight } from "react-icons/hi";
import { IoPlayOutline } from "react-icons/io";

export default function Home() {
  return (
    <>
      {/* <!-- Start Home --> */}
      <section className="section home" id="home">
        <div className="container">
          <div className="row align-items-center mt-5 mt-lg-0">
            <div className="col-lg-5">
              <div className="home-heading">
                <h6 className="text-uppercase text-muted">
                  I'm Graphics Designer
                </h6>
                <h1 className="lh-sm">
                  Make your life simplier with{" "}
                  <span className="text-primary">Kasy</span>
                </h1>
              </div>
              <div className="home-btn d-grid d-sm-block gap-3">
                <a
                  className="btn btn-outline-primary rounded-pill me-sm-3"
                  href="#"
                >
                  About us
                  <span className="avatar-xs">
                    <span className="avatar-title rounded-circle btn-icon">
                      {/* <i ></i> */}
                      <HiChevronDoubleRight fontSize={"17px"} />
                    </span>
                  </span>
                </a>
                <a
                  // href="javascript:void(0)"
                  href="#"
                  data-bs-toggle="modal"
                  data-bs-target=".watchvideomodal"
                >
                  <div className="d-inline-flex align-items-center">
                    <div className="flex-grow-1 me-2">
                      <span className="text-muted fs-14">Watch Now</span>
                    </div>
                    <div className="flex-shrink-0">
                      <div className="avatar-sm">
                        <div className="avatar-title rounded-circle modal-btn">
                          <i className="mdi mdi-play"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade bd-example-modal-lg watchvideomodal"
                  data-keyboard="false"
                  tabIndex="-1"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog modal-lg">
                    <div className="modal-content home-modal">
                      <div className="modal-header border-0">
                        <button
                          type="button"
                          className="btn-close btn-close-white"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <video
                        id="VisaChipCardVideo"
                        className="video-box"
                        controls
                      >
                        <source
                          src="https://www.w3schools.com/html/mov_bbb.mp4"
                          type="video/mp4"
                        />
                        {/* <!--Browser does not support <video> tag --> */}
                      </video>
                    </div>
                  </div>
                </div>
                {/* <!-- END MODAL --> */}
              </div>
            </div>
            {/* <!-- end col--> */}
            <div className="col-lg-7">
              <div className="ms-md-4">
                <img className="home-img" src="images/home.png" alt="" />
              </div>
            </div>
            {/* <!-- end col--> */}
            <div className="col-lg-12">
              <div className="client-list">
                <div className="row justify-content-around">
                  <div className="col-md-2 col-6">
                    <img
                      className="img-fluid"
                      src="images/logo/brand-logo-1.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- End col--> */}
                  <div className="col-md-2 col-6">
                    <img
                      className="img-fluid"
                      src="images/logo/brand-logo-2.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- End col--> */}
                  <div className="col-md-2 col-6">
                    <img
                      className="img-fluid"
                      src="images/logo/brand-logo-3.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- End col--> */}
                  <div className="col-md-2 col-6">
                    <img
                      className="img-fluid"
                      src="images/logo/brand-logo-4.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- End col--> */}
                  <div className="col-md-2 col-6">
                    <img
                      className="img-fluid"
                      src="images/logo/brand-logo-2.png"
                      alt=""
                    />
                  </div>
                  {/* <!-- End col--> */}
                </div>
                {/* <!-- End row--> */}
              </div>
            </div>
            {/* <!-- End col--> */}
          </div>
          {/* <!-- end row--> */}
        </div>
        {/* <!--end container--> */}
        <div className="container-fluid">
          <div className="row">
            <div className="home-shape-arrow">
              <a href="#features" className="mouse-down">
                <i className="mdi mdi-arrow-down arrow-icon text-dark h5"></i>
              </a>
            </div>
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!-- End Home --> */}
    </>
  );
}
