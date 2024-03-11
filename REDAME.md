## NextJS + Redux + React Hooks + TypeScript + Bootstrap 

## Project Overview
This project is a task management application built using NextJS with Redux for state management and React for Hooks (useState, useEffect,..).
It provides features for adding new tasks, marking tasks as complete, deleting tasks, and navigating between different pages such as the active,complete page and task list page.

## Technologies Used:
- **Next.js: A React framework for building server-rendered applications.
- **React: A JavaScript library for building user interfaces, with a focus on functional components and hooks.
- **Redux: A state management library for managing the global state of the application.
- **React Icons: A library that provides popular icons for React applications.
- **Bootstrap: A front-end framework for building responsive and visually appealing web applications.

## Redux File Structure
The Redux state management in this project is organized using the Redux Toolkit.
The structure follows a modular approach to keep the codebase maintainable and scalable.
# store / Root-Folder for Redux-related files
  * **tasksSlice.ts**: Redux slice for managing tasks state, including actions, reducers, and selectors.
  * **index.ts**: Root file that combines all individual reducers into the root reducer and exports the Redux store.

## How to Install and Run the Project
* **Clone the Repo**: git clone https://github.com/rifaiiaya2/Task-Management-NextJS-Redux.git
* **Navigate to the project dir**: cd task-manag-redux
* **Install dependencies**: npm install
* **Running the App**: npm run dev
- **The application will be accessible at http://localhost:3000 in your web browser.