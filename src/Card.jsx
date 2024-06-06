import React from "react";

function Card({ data }) {
  return (
    <>
      <div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">
              {data.plan}
            </h5>
            <h6 className="card-price text-center">
              ${data.price}
              <span className="period">/month</span>
            </h6>

            <ul className="fa-ul">
              <li className={data.userEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-check" : "fas fa-times"}></i>
                </span>
                {data.plan === "PLUS" || data.plan === "PRO" ? (
                  <strong>{data.user}</strong>
                ) : (
                  data.user
                )}
              </li>
              <li className={data.storgeEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-check" : "fas fa-times"}></i>
                </span>
                {data.storage}
              </li>
              <li className={data.publicprojectEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-check" : "fas fa-times"}></i>
                </span>
                {data.publicproject}
              </li>
              <li className={data.communityAccessEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-check" : "fas fa-times"}></i>
                </span>
                {data.communityAccess}
              </li>
              <li className={data.privateprojectsEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-times" : "fas fa-check"}></i>
                </span>
                {data.privateprojects}
              </li>
              <li className={data.supportEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-times" : "fas fa-check"}></i>
                </span>
                {data.support}
              </li>
              <li className={data.subDomainEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-times" : "fas fa-check"}></i>
                </span>
                {data.plan === "PRO" ? <strong>unlimited</strong> : <></>}
                {data.subDomain}
              </li>
              <li className={data.reportsEnabler ? "" : "text-muted"}>
                <span className="fa-li">
                  <i className={true ? "fas fa-times" : "fas fa-check"}></i>
                </span>
                {data.reports}
              </li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">
                Button
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
