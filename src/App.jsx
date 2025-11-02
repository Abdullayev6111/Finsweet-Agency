import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import Company from "./pages/Company.jsx";
import Career from "./pages/Career.jsx";
import CareerInner from "./pages/CareerInner.jsx";
import Blog from "./pages/Blog.jsx";
import BlogInner from "./pages/BlogInner.jsx";
import Team from "./pages/Team.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/service" element={<Service />} />
                <Route path="/company" element={<Company />} />
                <Route path="/career" element={<Career />}>
                    <Route path=":id" element={<CareerInner />} />
                </Route>
                <Route path="/blog" element={<Blog />}>
                    <Route path=":slug" element={<BlogInner />} />
                </Route>
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacypolicy" element={<PrivacyPolicy />} />
            </Route>
        </Routes>
    );
}

export default App;
