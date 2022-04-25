import React from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

export default function Testimonial() {
  return (
    <>
      <section className="section testimonial">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="text-center mb-5">
                <h3 className="heading">Stories From Our Customers</h3>
                <p className="text-muted fs-17">
                  Though lorem ipsum is sometimes referred to as greek copy or
                  greeking, lorem ipsum text is a garbled form of Latin text.
                </p>
              </div>
            </div>
            {/* <!-- End col --> */}
          </div>
          {/* <!-- End row --> */}
          <div className="row justify-content-between">
            <div className="col-lg-3">
              <h4>Let's Hear What They Say</h4>
              <p className="fs-14 text-muted">
                Don't take our word for it - hear what our lovely users are
                saying.
              </p>
              <button
                className="carousel-control-prev d-none d-lg-block"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <AiOutlineArrowLeft />
              </button>
              <button
                className="carousel-control-next d-none d-lg-block"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <AiOutlineArrowRight />
              </button>
            </div>
            <div className="col-lg-8">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-indicators mb-0">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="0"
                    className=""
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                    className="active"
                    aria-current="true"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                    className=""
                  ></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item">
                    <div className="card testimonial-box h-100">
                      <div className="card-body">
                        <img
                          className="mb-4"
                          src="images/quote.png"
                          alt="quote"
                        />
                        <p className="text-muted">
                          “Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu.”{" "}
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="avatar-sm rounded-circle img-fluid"
                              src="images/user/user1.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0"> Brandon Carney</h6>
                            <p className="text-muted mb-0 fs-14">
                              Vice president
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End card-body --> */}
                    </div>
                    {/* <!-- End card-body --> */}
                  </div>

                  <div className="carousel-item active">
                    <div className="card testimonial-box h-100">
                      <div className="card-body">
                        <img className="mb-4" src="images/quote.png" alt="" />
                        <p className="text-muted">
                          “Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate.”{" "}
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="avatar-sm rounded-circle img-fluid"
                              src="images/user/user.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0">Samuel Campbell</h6>
                            <p className="text-muted mb-0 fs-14">
                              Product Developer
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End card-body --> */}
                    </div>
                    {/* <!-- End card --> */}
                  </div>

                  <div className="carousel-item">
                    <div className="card testimonial-box h-100">
                      <div className="card-body">
                        <img className="mb-4" src="images/quote.png" alt="" />
                        <p className="text-muted">
                          “Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Aenean commodo ligula eget dolor. Aenean massa.
                          Cum sociis natoque penatibus et magnis dis parturient
                          montes, nascetur ridiculus mus. Donec quam felis,
                          ultricies nec, pellentesque eu, pretium quis, sem.
                          Nulla consequat massa quis enim. Donec pede justo,
                          fringilla vel, aliquet nec, vulputate eget, arcu.”{" "}
                        </p>
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <img
                              className="avatar-sm rounded-circle img-fluid"
                              src="images/user/user2.png"
                              alt=""
                            />
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <h6 className="mb-0"> Michelle Stehle</h6>
                            <p className="text-muted mb-0 fs-14"> Manage</p>
                          </div>
                        </div>
                      </div>
                      {/* <!-- End card-body --> */}
                    </div>
                    {/* <!-- End card --> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End container --> */}
      </section>
    </>
  );
}
