import React from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";

export default function Footer() {
  return (
    <>
      <footer className="section bg-footer">
        <div className="container">
          <div className="row g-sm-4">
            <div className="col-lg-12">
              <div className="mb-3 mb-sm-0">
                <img
                  src="images/logo-dark.png"
                  className="logo-dark"
                  alt=""
                  height="22"
                />
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="text-uppercase fw-semibold">About</h6>
              <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                <li>
                  <a href="javascript:void(0)">About</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Submit on issue</a>
                </li>
                <li>
                  <a href="javascript:void(0)">GitHub Repo</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Slack</a>
                </li>
              </ul>
            </div>
            {/* <!-- End col --> */}

            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="text-uppercase fw-semibold">Gatting Started</h6>
              <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                <li>
                  <a href="javascript:void(0)">introduction</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Usage</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Globls</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Elements</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Collection</a>
                </li>
              </ul>
            </div>
            {/* <!-- End col --> */}

            <div className="col-lg-3 col-md-4 col-6 d-none d-sm-block">
              <h6 className="text-uppercase fw-semibold">Resources</h6>
              <ul className="list-unstyled footer-link mt-3 mb-0 fs-14">
                <li>
                  <a href="javascript:void(0)">Monitoring Grader </a>
                </li>
                <li>
                  <a href="javascript:void(0)">Video Tutorial</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Term &amp; Service</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Tulsy API</a>
                </li>
                <li>
                  <a href="javascript:void(0)">Marketplace</a>
                </li>
              </ul>
            </div>
            {/* <!-- End col --> */}
            <div className="col-lg-3 col-10">
              <h6 className="text-uppercase fw-semibold">
                Social medial
                <span className="text-primary text-uppercase fs-18">Kasy</span>
              </h6>
              <p className="mt-md-3 pt-3 pt-md-2 fs-14">
                Semper nibh a dignissim Integer cursus tempsed.
              </p>
              <div className="footer-subcribe text-end shadow-sm d-inline-block">
                <form action="javascript:void(0)">
                  <input placeholder="Your Email Address" type="email" />
                  <button type="submit" className="btn btn-primary">
                    <MdOutlineNotificationsActive />
                  </button>
                </form>
              </div>
              <div className="mt-md-4 mt-3">
                <ul className="list-inline footer-social mb-0">
                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-facebook text-dark"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-linkedin text-dark"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-pinterest text-dark"></i>
                    </a>
                  </li>

                  <li className="list-inline-item">
                    <a href="javascript:void(0)" className="rounded">
                      <i className="mdi mdi-twitter text-dark"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* <!-- End row --> */}
        </div>
        {/* <!-- End container --> */}
      </footer>
    </>
  );
}
