import React from "react";
import { HiOutlineUser, HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineMail, AiOutlineFileText } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import { GrLanguage } from "react-icons/gr";
import { MdPhone } from "react-icons/md";
import { FaHospitalAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <>
      <section className="section" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="text-center mb-5">
                <h3 className="heading">Contact Us</h3>
                <p className="text-muted mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-around">
            <div className="col-lg-6">
              <form
                method="post"
                // onSubmit="return validateForm()"
                className="contact-form"
                name="myForm"
                id="myForm"
              >
                <span id="error-msg"></span>
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
                  <div className="col-lg-6">
                    <div className="position-relative mb-3">
                      <span className="input-group-text">
                        <AiOutlineMail />
                      </span>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative mb-3">
                      <span className="input-group-text">
                        <AiOutlineFileText />
                      </span>
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="position-relative mb-3">
                      <span className="input-group-text align-items-start">
                        <BiCommentDetail />
                      </span>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        className="form-control"
                        placeholder="Enter your message*"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      className="btn btn-primary"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
              {/* <!--end form--> */}
            </div>
            {/* <!--end col--> */}
            <div className="col-lg-4">
              <div className="contact-details mb-4 mb-lg-0">
                <p className="mb-3">
                  <AiOutlineMail className="text-muted fs-20 me-2" />
                  <span className="fw-medium">support@website.com</span>
                </p>
                <p className="mb-3">
                  <GrLanguage
                    className="text-muted fs-20 me-2"
                    style={{ opacity: 0.5 }}
                  />
                  <span className="fw-medium">www.website.com</span>
                </p>
                <p className="mb-3">
                  <MdPhone className="text-muted fs-20 me-2" />
                  <span className="fw-medium">+278 5678 8901</span>
                </p>
                <p className="mb-3">
                  <FaHospitalAlt className="text-muted fs-20 me-2" />
                  <span className="fw-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="mb-3">
                  <HiOutlineLocationMarker className="text-muted fs-20 me-2" />
                  <span className="fw-medium">12, MK Street, NC, 452768.</span>
                </p>
              </div>
              {/* <!--end contact-details--> */}
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
    </>
  );
}
