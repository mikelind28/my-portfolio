import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import "./index.css";
import App from "./App.tsx";
import Home from "./Pages/Home.tsx";
import About from "./Pages/About.tsx";
import Portfolio from "./Pages/Portfolio.tsx";
import Contact from "./Pages/Contact.tsx";
import RootErrorElement from "./Pages/RootErrorElement.tsx";

// TODO: use images for web rather than jpg/png
// TODO: add Motion to proficiencies
// TODO: light mode first?
// TODO: add tech stack icons for each portfolio item
// TODO: allow user to skip to end of animation sequence on About page
// TODO: expand Home page welcome text (I'm a full-stack developer proficient with...)
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    errorElement: <RootErrorElement />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about",
        Component: About,
      },
      {
        path: "portfolio",
        Component: Portfolio,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
