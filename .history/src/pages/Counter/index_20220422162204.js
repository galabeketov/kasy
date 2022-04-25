import React from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <>
      {/* <!-- start counter --> */}
      <section
        className="bg-counter w-100"
        id="counter"
        // style="background-image: url(images/counter-bg.png);"
      >
        <div className="bg-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center">
                <h3 className="heading">
                  We're all about helping you reach your next financial goal and
                  loan help
                </h3>
                <p className="text-muted">
                  Organized workflow and predictive patterns to boost your
                  revenue.
                </p>
              </div>
            </div>

            {/* <!--end col--> */}
          </div>

          {/* <!--end row--> */}
          <div className="row justify-content-lg-between justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="mt-5 text-center">
                <h1 className="fw-semibold display-6 mb-3">
                  <span className="counter_value" data-target="3700">
                    <CountUp end={3700} delay={3} duration={5} />
                  </span>
                  <span>k</span>
                </h1>
                <p className="mb-0 fs-17 text-muted">
                  Customer Empowered $5 billion+
                </p>
              </div>
            </div>
            {/* <!--end col--> */}
            <div className="col-lg-3 col-md-6">
              <div className="mt-5 text-center">
                <h1 className="fw-semibold display-6 mb-3">
                  <span className="counter_value" data-target="250">
                    <CountUp end={250} delay={3} duration={5} />
                  </span>
                  <span>+</span>
                </h1>
                <p className="mb-0 fs-17 text-muted">
                  Times Internaational Award Winner
                </p>
              </div>
            </div>
            {/* <!--end col--> */}
            <div className="col-lg-3 col-md-6">
              <div className="mt-5 text-center">
                <h1 className="fw-semibold display-6 mb-3">
                  <span className="counter_value" data-target="34780">
                    <CountUp end={34780} delay={2} duration={5} />
                  </span>
                  <span>+</span>
                </h1>
                <p className="mb-0 fs-17 text-muted">
                  Completed Projects $19 billion+
                </p>
              </div>
            </div>
            {/* <!--end col--> */}
            <div className="col-lg-12">
              <div className="d-flex justify-content-center">
                <div className="mt-5">
                  <a className="btn btn-outline-dark" href="#">
                    Know More <i className="mdi mdi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
            {/* <!--end col--> */}
          </div>
          {/* <!--end row--> */}
        </div>
        {/* <!--end container--> */}
      </section>
      {/* <!-- end counter --> */}
    </>
  );
}
