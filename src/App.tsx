import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Root from "./pages/Root";

import { AuthRoute, ProtectedRoute } from "./guards";
import { AuthLayout, DashboardLayout, Login, Portfolio, Signup } from "./pages";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: (
            <AuthRoute>
              <AuthLayout />
            </AuthRoute>
          ),
          children: [
            {
              path: "",
              element: <Navigate to="signup" replace={true} />,
            },

            {
              path: "login",
              element: <Login />,
            },
            {
              path: "signup",
              element: <Signup />,
            },
          ],
        },
        {
          path: "main",
          element: (
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              path: "",
              element: <Navigate to="portfolio" replace={true} />,
            },
            {
              path: "portfolio",
              element: <Portfolio />,
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

    {
      path: "*",
      element: <h1>Page not found: 404</h1>,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;
