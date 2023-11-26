import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Users } from "./components/users";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { routesContext } from "./contextProvider/ContextProvider";
import { generateRoutes } from "./utils/generateRoutes";
import Dashboard from "./components/dashboard";

const Router = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(routesContext);

  const admin = true;

  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>login page</div>,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "*",
      element: <div>Not Found</div>,
    },
    ...context.routes,
  ]);

  useEffect(() => {
    if (admin) {
      setLoading(true);
      const routes = generateRoutes();
      setTimeout(() => {
        context.setRoutes(routes);
        setLoading(false);
      }, 1000);
    }
  }, [admin]);

  if (loading) return <div>loading....</div>;

  return <RouterProvider router={router} />;
};

export default Router;
