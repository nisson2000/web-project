import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import RootLayout, { RootIndex } from "./pages";
import Index from "./pages/index";
import About from "./pages/about";
import "./index.css";
import UserPage from "./pages/users";
import CreateUserPage from "./pages/create-user";
import ErrorPage from "./pages/error-page";

/*const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <RootIndex /> },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/create-user",
        element: <CreateUserPage />,
      },
    ],
  },
], {
  basename: '/web_project/',  // Set the base path for all routes
});*/

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<RootLayout />} errorElement={<ErrorPage />}>
          <Route index element={<RootIndex />} />
          <Route path="about" element={<About />} />
          <Route path="users" element={<UserPage />} />
          <Route path="create-user" element={<CreateUserPage />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
