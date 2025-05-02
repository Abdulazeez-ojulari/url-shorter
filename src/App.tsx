import { RouterProvider } from "react-router-dom";
import { pageRoutes } from "./routes/pageRoutes";
import { App, ConfigProvider } from "antd";
import { Suspense } from "react";
import LazyLoader from "./common/component/LazyLoader";

const AppEntry = () => {
  return (
    <App>
      <ConfigProvider>
        <Suspense fallback={<LazyLoader />}>
          <RouterProvider router={pageRoutes} />
        </Suspense>
      </ConfigProvider>
    </App>
  );
};

export default AppEntry;
