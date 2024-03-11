import React from "react";
import Image from "next/image";

function mashhadapi({ apiDetails }: { apiDetails: Object }) {
  console.log(apiDetails);
  return (
    <div className="container-fluid text-center">
      <div className="col-md-12 mt-5">
        <h1 className="display-4 fst-italic text-success">
          Al Mashhad-API Details
        </h1>
      </div>

      <div className="d-flex justify-content-center align-items-center mt-5 pt-4">
        <div className="card align-items-center" style={{ width: "22rem" }}>
          <Image
            src={apiDetails.data.result.image}
            alt="image"
            width={345}
            height={250}
          />
          <div className="card-body">
            <h3 className=" fs-3 text fw-semibold fst-italic text-danger align-items-center text-decoration-underline ">
              Title:
            </h3>
            <span className="fs-3 text text-decoration-none">
              {" "}
              {apiDetails.data.result.title}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async () => {
  const FetchApi = await fetch(
    `https://dev-api.almashhad.tv/api/videos/detailsElastic/182622880654874`
  );
  const response = await FetchApi.json();

  return {
    props: {
      apiDetails: response,
    },
  };
};

export default mashhadapi;
