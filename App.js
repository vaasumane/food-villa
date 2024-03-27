import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import ErrorPage from "./ErrorPage";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestaurantMenu";
import useInternetConnection from "./utils/useInternetConnection";
import NotConnect from "./NotConnect";
import { Provider } from "react-redux";
import reduxstore from "./utils/reduxstore";
import Cart from "./components/Cart";

const AppLayout = () => {
  const IsInternetConnection = useInternetConnection();
  return !IsInternetConnection ? (
    <NotConnect />
  ) : (
    <Provider store={reduxstore}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
};
appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
