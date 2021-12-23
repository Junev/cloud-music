import { useRoutes, Navigate } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singer from "../application/Singer";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Navigate to="/recommend" />,
      },
      {
        path: "recommend",
        element: <Recommend />,
      },
      {
        path: "singers",
        element: <Singer />,
      },
      {
        path: "rank",
        element: <Recommend />,
      },
    ],
  },
];

const AppRoutes = () => {
  const appRoutes = useRoutes(routes);
  return appRoutes;
  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="user" element={<Recommend />}>
  //       <Route path="case" element={<Recommend />} />
  //       <Route path="tasks" element={<Recommend />} />
  //     </Route>
  //   </Routes>
  // );
};

export default AppRoutes;
