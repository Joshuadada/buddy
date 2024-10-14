import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import Auth from "./pages/auth/Auth";
import SignupSocial from "./pages/auth/children/SignupSocial";
import Signup from "./pages/auth/children/Signup";
import Login from "./pages/auth/children/Login";
import ConfirmEmail from "./pages/auth/children/ConfirmEmail";
import EmailVerified from "./pages/auth/children/EmailVerified";
import VerifyEmail from "./pages/auth/children/VerifyEmail";
import Dashboard from "./pages/dashboard/Dashboard";
import MyPortfolio from "./pages/dashboard/children/MyPortfolio";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Auth />,
          children: [
            {
              path: "",
              element: <Navigate to="signup" replace={true} />,
            },
            {
              path: "signup",
              element: <SignupSocial />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup-email",
              element: <Signup />,
            },
            {
              path: "confirm-email",
              element: <ConfirmEmail />,
            },
            {
              path: "email-verified",
              element: <EmailVerified />,
            },
            {
              path: "verify-email",
              element: <VerifyEmail />,
            },
          ],
        },
        {
          path: "main",
          element: <Dashboard />,
          children: [
            {
              path: "",
              element: <Navigate to="portfolio" replace={true} />,
            },
            {
              path: "portfolio",
              element: <MyPortfolio />,
            },
            {
              path: "group",
              element: <h4>My group</h4>,
            },
            {
              path: "messages",
              element: <h4>Messages</h4>,
            },
            {
              path: "analytics",
              element: <h4>Analytics</h4>,
            },
            {
              path: "packs",
              element: <h4>Packs</h4>,
            },
            {
              path: "settings",
              element: <h4>Settings</h4>,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
