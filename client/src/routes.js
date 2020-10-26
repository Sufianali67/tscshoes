
import Dashboard from "./views/dashboard";
import PendingUsers from "./views/pendingUsers";
import UpdatePassword from "./views/updatePassword";
import UpdateProfile from "./views/updateProfile";
var routes = [
  {
    layout: "/home",
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    icon: "tim-icons icon-chart-pie-36",
  },
  // {
  //   layout: "/home",
  //   name: "Pending Users",
  //   path: "/table",
  //   component: PendingUsers,
  //   icon: "tim-icons icon-chart-pie-36",
  // },
  {
    layout: "/home",
    name: 'hidden',
    path: "/update-password",
    component: UpdatePassword,
    icon: "tim-icons icon-chart-pie-36",
  },
  {
    layout: "/home",
    name: 'hidden',
    path: "/settings",
    component: UpdateProfile,
    icon: "tim-icons icon-chart-pie-36",
  },
];
export default routes;
