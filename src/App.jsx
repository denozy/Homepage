import { HashRouter as Router, Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PostsPage from "./pages/PostsPage";
import SinglePostPage from "./pages/SinglePostPage";
import ProjectsPage from "./pages/ProjectsPage";
import SingleProjectPage from "./pages/SingleProjectPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Router basename="/homepage">
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="Posts" element={<PostsPage />} />
          <Route path="Posts/:slug" element={<SinglePostPage />} />
          <Route path="Projects" element={<ProjectsPage />} />
          <Route path="Projects/:slug" element={<SingleProjectPage />} />
          <Route path="About" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
