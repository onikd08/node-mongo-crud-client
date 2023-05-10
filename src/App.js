import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import AddUser from "./components/AddUser";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      loader: () => fetch("http://localhost:8000/users"),
    },
    { path: "/users/add", element: <AddUser /> },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
