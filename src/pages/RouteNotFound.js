import React from "react";
import Footer from "../components/Footer";

const RouteNotFound = () => {
  return (
    <React.Fragment>
      <div className="container-fluid p-0 page-error">
        <section className="banner aos-init aos-animate">
          <div className="container">
            <div className="d-flex align-items-center justify-content-center content">
              <p className="text">Page Not found</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default RouteNotFound;
