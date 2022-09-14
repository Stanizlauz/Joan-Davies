import React from "react";

export default function Facts() {
  return (
    <>
      {/* ======= Facts Section ======= */}
      <section id="facts" className="facts">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Facts</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={232}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-shield-fill-check" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={521}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Trustworthy</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={1463}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>24 Hours Of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-graph-up" />
                <span
                  data-purecounter-start={0}
                  data-purecounter-end={25}
                  data-purecounter-duration={1}
                  className="purecounter"
                />
                <p>Reliable</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Facts Section */}

      <section className="facts">
        <div className="container">
        <div className="section-title">
            <h2>Registrations</h2>
            {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
          </div>
          <div className="col">
            <div className="row ">
              <div className="col-xl-3 col-lg-6">
                <div className="card l-bg-cherry">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-shopping-cart" />
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">State Licenses</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          53
                        </h2>
                      </div>
                      {/* <div className="col-4 text-right">
                        <span>
                          12.5% <i className="fa fa-arrow-up" />
                        </span>
                      </div> */}
                    </div>
                    {/* <div
                      className="progress mt-1 "
                      data-height={8}
                      style={{ height: 8 }}
                    >
                      <div
                        className="progress-bar l-bg-cyan"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "25%" }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <div className="col-xl-3 col-lg-6">
                <div className="card l-bg-blue-dark">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-users" />
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">Customers</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          15.07k
                        </h2>
                      </div>
                      <div className="col-4 text-right">
                        <span>
                          9.23% <i className="fa fa-arrow-up" />
                        </span>
                      </div>
                    </div>
                    <div
                      className="progress mt-1 "
                      data-height={8}
                      style={{ height: 8 }}
                    >
                      <div
                        className="progress-bar l-bg-green"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "25%" }}
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              <div className="col-xl-3 col-lg-6">
                <div className="card l-bg-green-dark">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-ticket-alt" />
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">Years of Experience</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">18</h2>
                      </div>
                      {/* <div className="col-4 text-right">
                        <span>
                          10% <i className="fa fa-arrow-up" />
                        </span>
                      </div> */}
                    </div>
                    {/* <div
                      className="progress mt-1 "
                      data-height={8}
                      style={{ height: 8 }}
                    >
                      <div
                        className="progress-bar l-bg-orange"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "25%" }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6">
                <div className="card l-bg-orange-dark">
                  <div className="card-statistic-3 p-4">
                    <div className="card-icon card-icon-large">
                      <i className="fas fa-dollar-sign" />
                    </div>
                    <div className="mb-4">
                      <h5 className="card-title mb-0">Examinations Passed</h5>
                    </div>
                    <div className="row align-items-center mb-2 d-flex">
                      <div className="col-8">
                        <h2 className="d-flex align-items-center mb-0">
                          4
                        </h2>
                      </div>
                      {/* <div className="col-4 text-right">
                        <span>
                          2.5% <i className="fa fa-arrow-up" />
                        </span>
                      </div> */}
                    </div>
                    {/* <div
                      className="progress mt-1 "
                      data-height={8}
                      style={{ height: 8 }}
                    >
                      <div
                        className="progress-bar l-bg-cyan"
                        role="progressbar"
                        data-width="25%"
                        aria-valuenow={25}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{ width: "25%" }}
                      />
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
