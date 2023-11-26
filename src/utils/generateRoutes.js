import { Users } from "../components/users";

export const generateRoutes = (data) => {
  const routes = [
    { path: "/users", element: <Users />, icon: <div>icon</div> },
  ];

  return routes;
};
