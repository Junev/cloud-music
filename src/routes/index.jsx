import { useRoutes, Navigate } from "react-router-dom";
import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import Album from "../application/Album";

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
        children: [{ path: "/recommend/:id", element: <Album /> }],
      },
      {
        path: "singers",
        element: <Singers />,
      },
      {
        path: "rank",
        element: <Rank />,
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
