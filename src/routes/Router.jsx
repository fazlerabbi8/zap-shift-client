import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Rider from "../pages/Rider/Rider";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentSuccess from "../pages/Dashboard/Payment/PaymentSuccess";
import PaymentCancel from "../pages/Dashboard/Payment/PaymentCancel";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import ApproveRider from "../pages/Dashboard/ApproveRider.jsx/ApproveRider";
import UsersManagement from "../pages/Dashboard/UsersManagement/UsersManagement";
import AdminRoute from "../AdminRote/AdminRoute";
import AssignRiders from "../pages/Dashboard/AssignRiders/AssignRiders";
import AssignedDelivaries from "../pages/Dashboard/AssignedDelivaries/AssignedDelivaries";
import RiderRoute from "../RiderRoute/RiderRoute";
import CompletedDelicaries from "../pages/Dashboard/CompletedDelicaries/CompletedDelicaries";
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "coverage",
        Component: Coverage,
        loader: () => fetch("serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("serviceCenter.json").then((res) => res.json()),
      },
      {
        path: "rider",
        element: (
          <PrivateRoute>
            <Rider />
          </PrivateRoute>
        ),
        loader: () => fetch("serviceCenter.json").then((res) => res.json()),
      },
    ],
  },
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "my-parcels",
        element: <MyParcels></MyParcels>,
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path:'payment-history',
        Component: PaymentHistory
      },
      {
        path: 'payment-success',
        Component: PaymentSuccess
      },
      {
        path: 'payment-canceled',
        Component: PaymentCancel
      },
      {
        path: 'assigned-delivaries',
        element: <RiderRoute><AssignedDelivaries></AssignedDelivaries></RiderRoute>
      },
      {
        path: 'completed-delivaries',
        element: <RiderRoute><CompletedDelicaries></CompletedDelicaries></RiderRoute>
      },
      {
        path: 'approve-rider',
        // Component: ApproveRider
        element: <AdminRoute><ApproveRider></ApproveRider></AdminRoute>
      },
      {
        path: 'assign-rider',
        // Component: ApproveRider
        element: <AdminRoute><AssignRiders></AssignRiders></AdminRoute>
      },
      {
        path: 'users-management',
        // Component: UsersManagement
        element: <AdminRoute><UsersManagement></UsersManagement></AdminRoute>
      }
    ],
  },
]);

export default router;
