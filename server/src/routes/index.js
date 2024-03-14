import authRoute from "./auth.js";

const routes = [
  {
    path: "auth",
    route: authRoute,
  },
];

const initRoutes = (app) => {
  routes.forEach((route) => {
    app.use(`/api/v1/${route.path}`, route.route);
  });
};

export default initRoutes;
