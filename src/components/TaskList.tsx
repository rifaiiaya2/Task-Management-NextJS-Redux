import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useRouter } from "next/router";

import { RingLoader } from "react-spinners";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { IoIosTime } from "react-icons/io";
import { MdArrowForward } from "react-icons/md";



const TaskList = () => {
  const [showSpinner, setShowSpinner] = useState(true);
  const router = useRouter();
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const handleGoToHome = () => {
    router.push('/')
  }
  return (
    <div className="container-fluid text-center pt-2">
      <div className="row mt-5 justify-content-center">
        <div className="col-md-7">
          <h1 className="display-4 fst-italic text-success mb-4">
            List Of All Tasks
          </h1>
          {loading || showSpinner ? (
            <RingLoader color="#ff0000" loading={true} size={150} />
          ) : null}
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`task ${task.completed ? "complete" : "active"}`}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  border: "1px solid #ccc",
                  borderRadius: "15px",
                  padding: "15px",
                  margin: "7px",
                  fontSize: "21px",
                  //fontWeight: "bold",
                  fontFamily: "cursive",
                  color: task.completed ? "#008080" : "#d96459",
                  backgroundColor: "#f0f0f0",
                  // backgroundColor: task.completed ? "#008080" : "#d96459",
                }}
              >
                <span>{task.name}</span>
                <div>
                  {task.completed ? (
                    <IoCheckmarkDoneSharp
                      size={25}
                      style={{ color: "#008080", marginRight: "5px" }}
                    />
                  ) : (
                    <IoIosTime
                      size={27}
                      style={{ color: "#d96459", marginRight: "5px" }}
                    />
                  )}
                  <span>{task.completed ? "Complete" : "Active"}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="fs-4 text fw-semibold text-danger mt-4">
              OUPS! No Tasks Available !!
            </div>
          )}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-12 d-flex justify-content-end mt-5">
          <button className="btn btn-success text-light fs-6 text m-2 mt-5" onClick={handleGoToHome}>Go To Complete Page<MdArrowForward className="ms-1" /></button>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
