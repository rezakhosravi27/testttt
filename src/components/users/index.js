import React from "react";
import { generateRoutes } from "../../utils/generateRoutes";

export const Users = () => {
  const routes = generateRoutes();
  console.log("routes from generateRoutes function", routes);
  return <div>Users</div>;
};
