// import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
// // import HomeScreen from "../pages/Home1";
// import HomeScreen from "../pages/HomeScreen";
// import BlogScreen from "../pages/BlogScreen";
// import ContactScreen from "../pages/ContactScreen";
// import ApproachScreen from "../pages/ApproachScreen";
// import ComplianceScreen from "../pages/ComplianceScreen";
// import IndustriesScreen from "../pages/IndustriesScreen";
// import SecurityScreen from "../pages/SecurityScreen";
// import CmmcScreen from "../pages/CmmcScreen";
// import ResourcesScreen from "../pages/ResourcesScreen";
// import AboutScreen from "../pages/AboutScreen";
// import NotFoundRedirect from "./NotFoundRedirect";
// import ScrollToTop from "./ScrollToTop";
// // import Faq from "../pages/Faq";
// import ResourceDetailScreen from "../pages/ResourceDetailScreen";
// import AllBlogs from "../pages/AllBlogs";
// import TrailingSlashRedirect from "./TrailingSlashRedirect";
// import CustomizePolicy from "../pages/CustomizePolicy";

// // ✅ NEW: redirects /resource/:slug → /policy/:slug (client-side)
// const ResourceToPolicyRedirect = () => {
//     const { slug } = useParams();
//     const { search, hash } = useLocation();
//     return <Navigate to={`/policy/${slug}${search}${hash}`} replace />;
// };

// const AppRouter = () => (
//     <Router>

//         <ScrollToTop />

//         <TrailingSlashRedirect>
//             <Routes>
//                 <Route path="/" element={
//                     <HomeScreen />
//                 } />

//                 {/* <Route path="/blog" element={
//                 <BlogScreen />
//             } /> */}
//                 <Route path="/blog/:slug" element={
//                     <BlogScreen />
//                 } />

//                 <Route path="/contact-us" element={
//                     <ContactScreen />
//                 } />

//                 <Route path="/approach" element={
//                     <ApproachScreen />
//                 } />

//                 <Route path="/compliance-systems" element={
//                     <ComplianceScreen />
//                 } />

//                 <Route path="/industries" element={
//                     <IndustriesScreen />
//                 } />

//                 <Route path="/microsoft-365-security" element={
//                     <SecurityScreen />
//                 } />

//                 <Route path="/cmmc" element={
//                     <CmmcScreen />
//                 } />

//                 <Route path="/policies" element={
//                     <ResourcesScreen />
//                 } />

//                 <Route path="/about" element={
//                     <AboutScreen />
//                 } />

//                 {/* <Route path="/faq" element={
//                 <Faq />
//             } /> */}
//                 <Route path="/blogs" element={
//                     <AllBlogs />
//                 } />

//                 <Route path="/customize-policy" element={
//                     <CustomizePolicy />
//                 } />


//                 <Route path="/policy/:slug" element={
//                     <ResourceDetailScreen />
//                 } />

//                 {/* ✅ NEW: /resource/:slug → /policy/:slug, MUST be above the "*" route */}
//                 <Route path="/resource/:slug" element={
//                     <ResourceToPolicyRedirect />
//                 } />

//                 <Route path="*" element={
//                     <NotFoundRedirect />
//                 } />

//             </Routes>
//         </TrailingSlashRedirect>
//     </Router>
// )

// export default AppRouter





// deepseek

import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useParams, useLocation } from "react-router-dom";
import NotFoundRedirect from "./NotFoundRedirect";
import ScrollToTop from "./ScrollToTop";
import TrailingSlashRedirect from "./TrailingSlashRedirect";

// ✅ OPTIMIZATION: Lazy load all screens
const HomeScreen = lazy(() => import("../pages/HomeScreen"));
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
            {/* ✅ OPTIMIZATION: Suspense provides a fallback while the page loads */}
            <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#0a0f1e' }}></div>}>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/blog/:slug" element={<BlogScreen />} />
                    <Route path="/contact-us" element={<ContactScreen />} />
                    <Route path="/approach" element={<ApproachScreen />} />
                    <Route path="/compliance-systems" element={<ComplianceScreen />} />
                    <Route path="/industries" element={<IndustriesScreen />} />
                    <Route path="/microsoft-365-security" element={<SecurityScreen />} />
                    <Route path="/cmmc" element={<CmmcScreen />} />
                    <Route path="/policies" element={<ResourcesScreen />} />
                    <Route path="/about" element={<AboutScreen />} />
                    <Route path="/blogs" element={<AllBlogs />} />
                    <Route path="/customize-policy" element={<CustomizePolicy />} />
                    <Route path="/policy/:slug" element={<ResourceDetailScreen />} />
                    <Route path="/resource/:slug" element={<ResourceToPolicyRedirect />} />
                    <Route path="*" element={<NotFoundRedirect />} />
                </Routes>
            </Suspense>
        </TrailingSlashRedirect>
    </Router>
)

export default AppRouter