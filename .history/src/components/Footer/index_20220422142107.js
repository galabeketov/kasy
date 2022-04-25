import React from "react";

export default function Footer() {
  return (
    <>
      <footer class="section bg-footer">
        <div class="container">
          <div class="row g-sm-4">
            <div class="col-lg-12">
              <div class="mb-3 mb-sm-0">
                <img
                  src="images/logo-dark.png"
                  class="logo-dark"
                  alt=""
                  height="22"
                />
              </div>
            </div>

            <div class="col-lg-3 col-md-4 col-6">
              <h6 class="text-uppercase fw-semibold">About</h6>
              <ul class="list-unstyled footer-link mt-3 mb-0 fs-14">
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

            <div class="col-lg-3 col-md-4 col-6">
              <h6 class="text-uppercase fw-semibold">Gatting Started</h6>
              <ul class="list-unstyled footer-link mt-3 mb-0 fs-14">
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

            <div class="col-lg-3 col-md-4 col-6 d-none d-sm-block">
              <h6 class="text-uppercase fw-semibold">Resources</h6>
              <ul class="list-unstyled footer-link mt-3 mb-0 fs-14">
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
            <div class="col-lg-3 col-10">
              <h6 class="text-uppercase fw-semibold">
                Social medial
                <span class="text-primary text-uppercase fs-18">Kasy</span>
              </h6>
              <p class="mt-md-3 pt-3 pt-md-2 fs-14">
                Semper nibh a dignissim Integer cursus tempsed.
              </p>
              <div class="footer-subcribe text-end shadow-sm d-inline-block">
                <form action="javascript:void(0)">
                  <input placeholder="Your Email Address" type="email" />
                  <button type="submit" class="btn btn-primary">
                    <i class="mdi mdi-bell-ring"></i>
                  </button>
                </form>
              </div>
              <div class="mt-md-4 mt-3">
                <ul class="list-inline footer-social mb-0">
                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded">
                      <i class="mdi mdi-facebook text-dark"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded">
                      <i class="mdi mdi-linkedin text-dark"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded">
                      <i class="mdi mdi-pinterest text-dark"></i>
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="javascript:void(0)" class="rounded">
                      <i class="mdi mdi-twitter text-dark"></i>
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
