import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const MiniHeader = lazy(() => import("../../components/Headers/MiniHeader.js"));
const PageLayout = lazy(() => import("../../components/ui/Layout.js"));
//const DownloadPage = lazy(() => import("./downloader/pages/DownloadPage.js")); v2
const EditorPage = lazy(() => import("./editor/pages/EditorPage.js"));

const ServiceRoutes = () => {
  return (
      <Routes>
        {/*<Route
          path="/download"
          exact
          element={
            <PageLayout header={<MiniHeader />}>
              <DownloadPage />
            </PageLayout>
          }
        /> v2
        */}
        <Route
          path="/editor"
          exact
          element={
            <PageLayout header={<MiniHeader />}>
              <EditorPage />
            </PageLayout>
          }
        />
      </Routes>
  );
};

export default ServiceRoutes;
