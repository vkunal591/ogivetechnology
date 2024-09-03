import achivement from '../../../assets/achivement.webp'

export default function Achivement() {
  return (
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
            <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our Success</h3>
            <h2 className="mb-4 display-5 text-center">We have a proven track record of success.</h2>
            <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle"/>
          </div>
        </div>
      </div>
    
      <div className="container">
        <div className="row gy-4 gy-lg-0 align-items-lg-center">
          <div className="col-12 col-lg-6">
            <img className="img-fluid rounded" loading="lazy" src={achivement} alt="Our Success"/>
          </div>
          <div className="col-12 col-lg-6">
            <div className="row justify-content-xl-end">
              <div className="col-12 col-xl-11">
                <div className="row gy-4 gy-sm-0 overflow-hidden">
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm mb-4">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">60</h3>
                        <p className="fs-5 mb-0 text-secondary">Finished Projects</p>
                      </div>
                    </div>
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">18k+</h3>
                        <p className="fs-5 mb-0 text-secondary">Issues Solved</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-sm-6">
                    <div className="card border-0 border-bottom border-primary shadow-sm mt-lg-6 mt-xxl-8 mb-4">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">10k+</h3>
                        <p className="fs-5 mb-0 text-secondary">Happy Customers</p>
                      </div>
                    </div>
                    <div className="card border-0 border-bottom border-primary shadow-sm">
                      <div className="card-body text-center p-4 p-xxl-5">
                        <h3 className="display-2 fw-bold mb-2">78</h3>
                        <p className="fs-5 mb-0 text-secondary">Awwwards</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
