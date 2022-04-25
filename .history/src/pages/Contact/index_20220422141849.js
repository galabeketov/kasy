import React from "react";

export default function Contact() {
  return (
    <>
      <section class="section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <div class="text-center mb-5">
                <h3 class="heading">Contact Us</h3>
                <p class="text-muted mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-around">
            <div class="col-lg-6">
              <form
                method="post"
                onsubmit="return validateForm()"
                class="contact-form"
                name="myForm"
                id="myForm"
              >
                <span id="error-msg"></span>
                <div class="row">
                  <div class="col-lg-6">
                    <div class="position-relative mb-3">
                      <span class="input-group-text">
                        <i class="mdi mdi-account-outline"></i>
                      </span>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        class="form-control"
                        placeholder="Enter your name*"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6">
                    <div class="position-relative mb-3">
                      <span class="input-group-text">
                        <i class="mdi mdi-email-outline"></i>
                      </span>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        class="form-control"
                        placeholder="Enter your email*"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="position-relative mb-3">
                      <span class="input-group-text">
                        <i class="mdi mdi-file-document-outline"></i>
                      </span>
                      <input
                        name="subject"
                        id="subject"
                        type="text"
                        class="form-control"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="col-lg-12">
                    <div class="position-relative mb-3">
                      <span class="input-group-text align-items-start">
                        <i class="mdi mdi-comment-text-outline"></i>
                      </span>
                      <textarea
                        name="comments"
                        id="comments"
                        rows="4"
                        class="form-control"
                        placeholder="Enter your message*"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-sm-12">
                    <input
                      type="submit"
                      id="submit"
                      name="send"
                      class="btn btn-primary"
                      value="Send Message"
                    />
                  </div>
                </div>
              </form>
              {/* <!--end form--> */}
            </div>
            {/* <!--end col--> */}
            <div class="col-lg-4">
              <div class="contact-details mb-4 mb-lg-0">
                <p class="mb-3">
                  <i class="mdi mdi-email-outline align-middle text-muted fs-20 me-2"></i>{" "}
                  <span class="fw-medium">support@website.com</span>
                </p>
                <p class="mb-3">
                  <i class="mdi mdi-web align-middle text-muted fs-20 me-2"></i>{" "}
                  <span class="fw-medium">www.website.com</span>
                </p>
                <p class="mb-3">
                  <i class="mdi mdi-phone align-middle text-muted fs-20 me-2"></i>{" "}
                  <span class="fw-medium">+278 5678 8901</span>
                </p>
                <p class="mb-3">
                  <i class="mdi mdi-hospital-building text-muted fs-20 me-2"></i>{" "}
                  <span class="fw-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p class="mb-3">
                  <i class="mdi mdi-map-marker-outline text-muted fs-20 me-2"></i>{" "}
                  <span class="fw-medium">12, MK Street, NC, 452768.</span>
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
