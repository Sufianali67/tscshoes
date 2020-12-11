
import Shoes from "./views/categories/Shoes";
import Dashboard from "./views/dashboard";
import PendingUsers from "./views/pendingUsers";
import AllProducts from "./views/products/AllProducts";
import UpdatePassword from "./views/updatePassword";
import UpdateProfile from "./views/updateProfile";
var routes = [
  {
    layout: "/home",
    name: "Dashboard",
    path: "/dashboard",
    component: Dashboard,
    icon: "tim-icons icon-chart-pie-36",
    role: ["admin"],
  },
  {
    layout: "/home",
    name: "Shoes",
    path: "/shoes",
    component: Shoes,
    icon: "tim-icons icon-chart-pie-36",
    role: ["user"],
  },
  {
    layout: "/home",
    name: "Manage Pending Users",
    path: "/pending-users",
    component: PendingUsers,
    icon: "tim-icons icon-chart-pie-36",
    role: ["admin"],
  },
  {
    layout: "/home",
    name: 'hidden',
    path: "/update-password",
    component: UpdatePassword,
    icon: "tim-icons icon-chart-pie-36",
    role: ["admin"],
  },
  {
    layout: "/home",
    name: 'hidden',
    path: "/settings",
    component: UpdateProfile,
    icon: "tim-icons icon-chart-pie-36",
    role: ["admin"],
  },
  {
    layout: "/home",
    name: "Products",
    path: "/products",
    component: AllProducts,
    icon: "tim-icons icon-chart-pie-36",
    role: ["admin"],
  },
];
export default routes;
