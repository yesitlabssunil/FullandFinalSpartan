import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
// ========== SHIVM NEW CHANGES START ==========
import { lazy, Suspense } from "react";
// ========== SHIVM NEW CHANGES END ==========
// import HomeScreen from "../pages/Home1";
import HomeScreen from "../pages/HomeScreen";
import NotFoundRedirect from "./NotFoundRedirect";
import ScrollToTop from "./ScrollToTop";
// import Faq from "../pages/Faq";
import TrailingSlashRedirect from "./TrailingSlashRedirect";
// ========== SHIVM NEW CHANGES START ==========
const BlogScreen = lazy(() => import("../pages/BlogScreen"));
const ContactScreen = lazy(() => import("../pages/ContactScreen"));
const ApproachScreen = lazy(() => import("../pages/ApproachScreen"));
const ComplianceScreen = lazy(() => import("../pages/ComplianceScreen"));
const IndustriesScreen = lazy(() => import("../pages/IndustriesScreen"));
const SecurityScreen = lazy(() => import("../pages/SecurityScreen"));
const CmmcScreen = lazy(() => import("../pages/CmmcScreen"));
const ResourcesScreen = lazy(() => import("../pages/ResourcesScreen"));
const AboutScreen = lazy(() => import("../pages/AboutScreen"));
const ResourceDetailScreen = lazy(() => import("../pages/ResourceDetailScreen"));
const AllBlogs = lazy(() => import("../pages/AllBlogs"));
const CustomizePolicy = lazy(() => import("../pages/CustomizePolicy"));
// ========== SHIVM NEW CHANGES END ==========

// ✅ NEW: redirects /resource/:slug → /policy/:slug (client-side)
const ResourceToPolicyRedirect = () => {
    const { slug } = useParams();
    const { search, hash } = useLocation();
    return <Navigate to={`/policy/${slug}${search}${hash}`} replace />;
};

const AppRouter = () => (
    <Router>

        <ScrollToTop />

        <TrailingSlashRedirect>
            {/* ========== SHIVM NEW CHANGES START ========== */}
            <Suspense fallback={null}>
            {/* ========== SHIVM NEW CHANGES END ========== */}
            <Routes>
                <Route path="/" element={
                    <HomeScreen />
                } />

                {/* <Route path="/blog" element={
                <BlogScreen />
            } /> */}
                <Route path="/blog/:slug" element={
                    <BlogScreen />
                } />

                <Route path="/contact-us" element={
                    <ContactScreen />
                } />

                <Route path="/approach" element={
                    <ApproachScreen />
                } />

                <Route path="/compliance-systems" element={
                    <ComplianceScreen />
                } />

                <Route path="/industries" element={
                    <IndustriesScreen />
                } />

                <Route path="/microsoft-365-security" element={
                    <SecurityScreen />
                } />

                <Route path="/cmmc" element={
                    <CmmcScreen />
                } />

                <Route path="/policies" element={
                    <ResourcesScreen />
                } />

                <Route path="/about" element={
                    <AboutScreen />
                } />

                {/* <Route path="/faq" element={
                <Faq />
            } /> */}
                <Route path="/blogs" element={
                    <AllBlogs />
                } />

                <Route path="/customize-policy" element={
                    <CustomizePolicy />
                } />


                <Route path="/policy/:slug" element={
                    <ResourceDetailScreen />
                } />

                {/* ✅ NEW: /resource/:slug → /policy/:slug, MUST be above the "*" route */}
                <Route path="/resource/:slug" element={
                    <ResourceToPolicyRedirect />
                } />

                <Route path="*" element={
                    <NotFoundRedirect />
                } />

            </Routes>
            {/* ========== SHIVM NEW CHANGES START ========== */}
            </Suspense>
            {/* ========== SHIVM NEW CHANGES END ========== */}
        </TrailingSlashRedirect>
    </Router>
)

export default AppRouter