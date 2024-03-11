import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { deleteTask, selectTasks, toggleTask } from "../store/tasksSlice";
import { RootState } from "../store";
import { MdDeleteForever, MdArrowForward } from "react-icons/md";
import { RingLoader } from "react-spinners";

function CompleteTask() {
  const [showSpinner, setShowSpinner] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const tasks = useSelector(selectTasks);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const completeTasks = tasks.filter((task) => task.completed);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const handleToggleTask = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };
  const handleGoToACtive = () => {
    router.push('/active')
  }
  const handleGoToList = () => {
    router.push('/tasklist')
  }

  return (
    <div className="container-fluid text-center">
      <div className="row mt-5">
        <div className="col-md-12">
          <h1 className="display-4 fst-italic text-success">
            Completed Task Form
          </h1>
          {loading || showSpinner ? (
            <RingLoader color="#ff0000" loading={true} size={150} />
          ) : null}
          {completeTasks.length > 0 ? (
            completeTasks.map((task) => (
              <div
                key={task.id}
                className="d-flex justify-content-between bg-white p-1 px-3 rounded-sm"
              >
                <div className="d-flex gap-3 align-items-center">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={task.completed}
                    onChange={() =>
                      handleToggleTask(task.id)
                    }
                  ></input>
                  <label className="form-check-label me-3">{task.name}</label>
                </div>
                <button
                  onClick={() => handleDeleteTask(task.id)}
                  className="d-flex align-items-center btn-sm btn btn-danger bg-gradient text-white rounded"
                >
                  <MdDeleteForever size={18} className="me-1" />
                  Delete
                </button>
              </div>
            ))
          ) : (
            <div className="fs-4 text fw-semibold text-danger mt-4">
              No Completed Task !
            </div>
          )}
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-start">
          <button className="btn btn-warning text-light fs-6 text m-2" onClick={handleGoToACtive}>Go To Active Page<MdArrowForward className="ms-1" /></button>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className="btn btn-warning text-light fs-6 m-2" onClick={handleGoToList}>Go To Task List Page<MdArrowForward className="ms-1" /></button>
        </div>
      </div>
    </div>
  );
}

export default CompleteTask;
