import React, { useState, useEffect, FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  selectTasks,
  toggleTask,
} from "../store/tasksSlice";
import { useRouter } from "next/router";
import { RootState } from "../store";
import { MdDeleteForever, MdArrowForward } from "react-icons/md";
import { RingLoader } from "react-spinners";
function ActiveTask() {
  const [newTask, setNewTask] = useState("");
  const [showSpinner, setShowSpinner] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const tasks = useSelector(selectTasks);
  const loading = useSelector((state: RootState) => state.tasks.loading);
  const activeTasks = tasks.filter((task) => !task.completed);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowSpinner(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addTask({
        id: Date.now().toString(),
        name: newTask,
        completed: false,
      })
    );
    setNewTask("");
  };
  const handleToggleActive = (id: string) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };
  const handleGoToComplete = () => {
    router.push('/complete')
  }
  const handleGoToList = () => {
    router.push('/tasklist')
  }
  return (
    <div className="container-fluid text-center">
      <div className="row mt-5">
        <div className="col-ms-12">
          <h1 className="display-4 fst-italic text-success">
            Active Task Form
          </h1>
          {loading || showSpinner ? (
            <RingLoader color="#ff0000" loading={true} size={150} />
          ) : null}
        </div>

        <form
          className="row justify-content-center mt-4 pt-5"
          onSubmit={handleSubmit}
        >
          <label className=" mb-3 form-label fs-3 text text-warning">
            Enter Your Task
          </label>
          <input
            type="text"
            placeholder="Type Your Tasks Here..."
            className="w-50 border border-solid border-ccc my-10 px-3 py-2 fs-7 fw-bold rounded focus-outline-none "
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          ></input>
          <div className="text-center mt-2">
            <button className="text-light btn btn-success"
              disabled={!newTask.trim()}>Add Task</button>
          </div>
        </form>
      </div>
      <div className="Container-fluid mt-4">
        <h1 className="fs-4 text fw-light text-warning">Your Tasks</h1>
        {activeTasks.length > 0 ? (
          activeTasks.map((task) => (
            <div
              key={task.id}
              className="d-flex justify-content-between bg-white p-1 px-3 rounded-sm"
            >
              <div className="d-flex gap-3 align-items-center">
                <input
                  type="checkbox"
                  className="form-check-input"
                  checked={task.completed}
                  onChange={() => handleToggleActive(task.id)}
                />
                <label className="form-check-label me-3">{task.name}</label>
              </div>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="flex align-items-center btn-sm btn btn-danger bg-gradient text-white rounded"
              >
                <MdDeleteForever size={18} className="me-1" />
                Delete
              </button>
            </div>
          ))
        ) : (
          <div className="fs-4 text fw-semibold text-danger mt-4">
            No Active Tasks
          </div>
        )}
      </div>
      <div className="row mt-5">
        <div className="col-md-6 d-flex justify-content-start">
          <button className="btn btn-warning text-light fs-6 text m-2" onClick={handleGoToComplete}>Go To Complete Page<MdArrowForward className="ms-1" /></button>
        </div>
        <div className="col-md-6 d-flex justify-content-end">
          <button className="btn btn-warning text-light fs-6 m-2" onClick={handleGoToList}>Go To Task List Page<MdArrowForward className="ms-1" /></button>
        </div>
      </div>
    </div>
  );
}

export default ActiveTask;
