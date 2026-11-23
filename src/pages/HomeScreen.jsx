import React, { lazy, Suspense, useEffect } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import "../assets/css/home.css";
import { initHomeScripts } from "../homeInteractions";
import { Link } from "react-router-dom";
import SEO from "../component/SEO";

import { getFaqData, homeScreenData } from "../redux/slices/homeSlice";

// ========== SHIVM NEW CHANGES START ==========
// Below-fold home sections are lazy-loaded to reduce initial JS on mobile.
const HomeBelowFold = lazy(() => import("../component/HomeBelowFold"));
// ========== SHIVM NEW CHANGES END ==========

const HomeScreen = () => {
  const dispatch = useDispatch();
  const { AllFaq, homeData, loading } = useSelector((state) => state.home);

  const safeArray = (value) => (Array.isArray(value) ? value : []);

  //   useEffect(() => {
  //     const cleanup = initHomeScripts();

  //     return () => {
  //       cleanup();
  //     };
  //   }, []);

  useEffect(() => {
    try {
      const cleanup = initHomeScripts();
      return cleanup;
    } catch (e) {
      console.error("initHomeScripts error:", e);
    }
  }, []);

  useEffect(() => {
    dispatch(getFaqData());
    dispatch(homeScreenData());
  }, [dispatch]);


  // if (loading) {
  //     return <div className="text-center py-5">Loading...</div>;
  // }
  const professionalServiceSchema = {
    "@type": "ProfessionalService",
    "@id": "https://spartan-cs.com/#professional-service",
    name: "Spartan Cyber Security",
    url: "https://spartan-cs.com/",
    logo: "https://spartan-cs.com/assets/logo-DH4HSouC.png",
    description:
      "Executive advisory firm specializing in CMMC 2.0, NIST 800-171 compliance, and cybersecurity for federal contractors.",

    founder: {
      "@type": "Person",
      name: "Raphael Warren",
      jobTitle: "Founder & CEO",
      honorificPrefix: "Brigadier General (Ret.)",
    },

    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-505-639-3883",
      contactType: "customer service",
      email: "rwarren@spartan-cs.com",
      availableLanguage: "English",
    },

    address: {
      "@type": "PostalAddress",
      addressLocality: "Albuquerque",
      addressRegion: "NM",
      postalCode: "87113",
      addressCountry: "US",
    },

    areaServed: {
      "@type": "Country",
      name: "United States",
    },

    openingHours: "Mo-Fr 09:00-17:00",
    priceRange: "$$$",

    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Cybersecurity & Compliance Services",
      itemListElement: [
        {
          "@type": "Service",
          name: "CMMC 2.0 Readiness",
          description:
            "Gap assessments, readiness roadmaps, SSP creation, POAM development, security controls implementation, audit preparation",
          serviceOutput: "Audit-ready CMMC 2.0 compliance certification",
        },
        {
          "@type": "Service",
          name: "NIST SP 800-171 Compliance",
          description:
            "Security control alignment, governance support and operational readiness built around NIST SP 800-171 standards",
          serviceOutput: "Compliant security posture for federal contracts",
        },
        {
          "@type": "Service",
          name: "Audit Readiness & Evidence Preparation",
          description:
            "Documentation, evidence and operational validation designed to withstand formal assessment scrutiny",
          serviceOutput: "Validated audit evidence and assessment support",
        },
        {
          "@type": "Service",
          name: "Microsoft 365 Security",
          description:
            "Identity management, conditional access, endpoint protection, secure cloud configuration, data governance, compliance controls",
          serviceOutput: "Hardened M365 environment for regulated workloads",
        },
      ],
    },

    sameAs: [
      "https://www.linkedin.com/company/spartan-cyber-security",
      "https://twitter.com/spartan_cs",
    ],
  };

  const faqSchema = {
    "@type": "FAQPage",
    "@id": "https://spartan-cs.com/#faq",
    mainEntity: safeArray(AllFaq)?.map((faq) => ({
      "@type": "Question",
      name: faq?.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq?.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="CMMC Compliance Consultant | Spartan Cyber Security"
        description="CMMC compliance consultant helping defense contractors achieve CMMC 2.0 and NIST 800-171 certification with audit-ready, evidence-driven security programs."
        url="https://spartan-cs.com"
        schema={[professionalServiceSchema, faqSchema]}
      />
      <Header />

      <section
        className="hero"
        //   style={{
        //     backgroundImage: `linear-gradient(rgba(10, 15, 30, 0.5), rgba(5, 10, 20, 0.6)), url(${
        //       homeData?.hero?.backgroundImage
        //         ? `${IMAGE_URL}/${homeData.hero.backgroundImage}`
        //         : "/images/hero-banner-bg.webp"
        //     })`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //   }}
        // >

        //   style={{
        //     backgroundImage: `url(${homeData?.hero?.backgroundImage
        //       ? `${IMAGE_URL}/${homeData.hero.backgroundImage}`
        //       : "/images/hero-banner-bg.webp"
        //       })`,
        //     backgroundRepeat: "no-repeat",
        //     backgroundSize: "cover",
        //   }}
        // > 
        style={{
          // ========== SHIVM NEW CHANGES START ==========
          // Use locally optimized hero image (1920px WebP, ~89KB) instead of the
          // 4500px API asset (~431KB) to reduce LCP weight on mobile and desktop.
          backgroundImage: `url("/images/hero-banner-api.webp")`,
          // ========== SHIVM NEW CHANGES END ==========
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in visible">
          <div className="badge-tag">
            <span className="dot-black"></span>{" "}
            {homeData?.hero?.badgeTag || "Executive Advisory & Compliance"}
          </div>
          <h1>
            {homeData?.hero?.title ||
              "CMMC 2.0 & NIST Compliance Consulting for Federal Contractors"}
          </h1>
          <p className="hero-subtext">
            {homeData?.hero?.subtext ||
              "Helping defense contractors achieve CMMC 2.0 and NIST 800-171 certification with audit-ready, evidence-driven security programs."}
          </p>

          <div className="hero-btns">
            <Link to="/contact-us" className="btn-white">
              Schedule Consultation <i className="fas fa-arrow-right"></i>
            </Link>
            <Link to="/compliance-systems" className="btn-transparent">
              Get Compliance Ready
            </Link>
          </div>
        </div>
      </section>

      {/* ========== SHIVM NEW CHANGES START ========== */}
      {/* Below-fold sections lazy-loaded to reduce initial mobile JS. */}
      <Suspense fallback={null}>
        <HomeBelowFold homeData={homeData} AllFaq={AllFaq} />
      </Suspense>
      {/* ========== SHIVM NEW CHANGES END ========== */}
      <Footer />
    </>
  );
};

export default HomeScreen;
