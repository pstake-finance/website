import React from "react";
import { STK_ATOM_BLOG_URL } from "../../../constants/config";

const NewsLetter = () => {
  return (
    <>
      <section className="news-letter-section" data-aos="fade-up">
        <div className="container">
          <h1 className="section-title">Subscribe to our mailing list</h1>
          <p className="section-sub-title">
            Stay up to date with Lido developments
          </p>
          <div className="row">
            <div className="col-md-6">
              <div className="buttons">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href={STK_ATOM_BLOG_URL}
                  className="button-link primary"
                >
                  <span className="button xprt">
                    <span className="hideone">{t("READ_ALL")}&nbsp;</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default NewsLetter;
