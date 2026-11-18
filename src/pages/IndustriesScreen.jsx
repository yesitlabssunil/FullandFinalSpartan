import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/industryScreen.css";
import { useDispatch, useSelector } from "react-redux";

// --- PLACEHOLDER IMAGE PATHS (Replace these with your actual figma exports) ---
import envIcon1 from "../assets/images/industryScreen/env-icon1.png";
import envIcon2 from "../assets/images/industryScreen/env-icon2.png";
import envIcon3 from "../assets/images/industryScreen/env-icon3.png";
import envIcon4 from "../assets/images/industryScreen/env-icon4.png";
import startBullet from "../assets/images/approachScreen/startBullet.png";

import industryImg1 from "../assets/images/industryScreen/construction.jpg";
import industryImg2 from "../assets/images/industryScreen/defense.jpg";
import industryImg3 from "../assets/images/industryScreen/aviation.jpg";
import industryImg4 from "../assets/images/industryScreen/engineering.jpg";
import industryImg5 from "../assets/images/industryScreen/manufacturing.jpg";
import { Link } from "react-router-dom";
import { industryScreenData } from "../redux/slices/secondSlice";
import SEO from "../component/SEO";

const IMAGE_URL = import.meta.env.VITE_IMAGE_URL;

const IndustriesScreen = () => {
  const dispatch = useDispatch();
  const { industryData, loading } = useSelector((state) => state.second);

  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  useEffect(() => {
    dispatch(industryScreenData());
  }, [dispatch]);

  const environments = [envIcon1, envIcon2, envIcon3, envIcon4];

  const sectors = [
    {
      title: "Construction & Federal Infrastructure",
      desc: "General contractors, design-build firms and AEC teams delivering federal, MILCON and critical infrastructure projects.",
      points: [
        "CUI protection for site plans, BIM/CAD and project schedules",
        "Subcontractor and trade partner flowdown management",
        "Field device and mobile workforce hardening (tablets, BYOD)",
      ],
      image: industryImg1,
      imageRight: true, // Image on the right side
    },
    {
      title: "Defense & Aerospace",
      desc: "Prime and subcontractor support across DoD weapon systems and platforms.",
      points: [
        "CUI segmentation across engineering data",
        "ITAR-aligned access controls",
        "Subcontractor flowdown management",
      ],
      image: industryImg2,
      imageRight: false, // Image on the left side (Alternating)
    },
    {
      title: "Aviation & Logistics",
      desc: "Supply chain and logistics partners moving CUI across the DIB.",
      points: [
        "Logistics data protection",
        "Multi-site compliance posture",
        "Vendor risk management",
      ],
      image: industryImg3,
      imageRight: true,
    },
    {
      title: "Engineering & R&D",
      desc: "Research Organization handling sensitive controlled technical data.",
      points: [
        "Research enclave architecture",
        "Lab and BYOD device control",
        "Export-controlled data handling",
      ],
      image: industryImg4,
      imageRight: false,
    },
    {
      title: "Advanced Manufacturing",
      desc: "Precision manufacturers producing components for DoD and federal supply chains.",
      points: [
        "OT/IT segmentation for shop floors",
        "CAD and CAM data protection",
        "Supplier portal hardening",
      ],
      image: industryImg5,
      imageRight: true,
    },
  ];

  // const faqSchema = {
  //   "@type": "FAQPage",
  //   "@id": "https://spartan-cs.com/industries#faq",
  //   "mainEntity": industryData?.industry_faq_content?.map((faq) => ({
  //     "@type": "Question",
  //     "name": faq?.question,
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": faq?.answer
  //     }
  //   }))
  // };

  const industryFaqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why do defense contractors choose Spartan Cyber Security for industry-specific compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Defense contractors choose Spartan Cyber Security because its approach starts with how their specific industry handles CUI, not a one-size-fits-all framework checklist. This industry-first methodology tends to produce documentation and controls that hold up better under a real C3PAO or self-assessment review."
        }
      },
      {
        "@type": "Question",
        "name": "Does Spartan Cyber Security work with small and mid-sized defense contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Spartan Cyber Security works with organizations across the defense industrial base regardless of size, since CMMC requirements apply the same way to small subcontractors as they do to large primes. Smaller contractors often need more hands-on support closing gaps, which is where a dedicated compliance partner matters most."
        }
      },
      {
        "@type": "Question",
        "name": "How does Spartan Cyber Security tailor compliance support by industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Spartan Cyber Security builds compliance programs around how CUI actually flows through each industry's operations, rather than applying a generic checklist across every client. This means a manufacturer's shop-floor data handling gets addressed differently than an IT provider's remote access controls, even under the same CMMC level."
        }
      },
      {
        "@type": "Question",
        "name": "Which industries are most affected by CMMC 2.0 enforcement?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Manufacturing, aerospace and defense, IT services, and engineering firms make up the largest share of organizations affected by CMMC 2.0, since these sectors most frequently handle CUI under DoD contracts. Any subcontractor feeding into these primes, regardless of industry label, inherits the same requirements."
        }
      },
      {
        "@type": "Question",
        "name": "Do research institutions and universities need CMMC compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Universities and research institutions performing DoD-funded research involving Controlled Unclassified Information are subject to CMMC requirements, typically at Level 2. This applies even when the research is conducted through a university department rather than a traditional commercial contractor."
        }
      },
      {
        "@type": "Question",
        "name": "What compliance requirements apply to healthcare contractors working with the DoD?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Healthcare contractors serving the DoD, such as military medical suppliers, must meet both HIPAA requirements for patient data and CMMC requirements for any CUI they handle under their federal contract. These frameworks apply simultaneously and require separate control implementations for each type of data."
        }
      },
      {
        "@type": "Question",
        "name": "Does CMMC apply to companies outside the traditional defense industry?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — any company in the supply chain that touches CUI or FCI is in scope, including logistics providers, engineering firms, and software vendors, not just traditional weapons or equipment manufacturers. The requirement follows the data, not the industry label."
        }
      },
      {
        "@type": "Question",
        "name": "Do IT service providers and MSPs need CMMC certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, IT service providers and managed service providers (MSPs) supporting defense contractors need CMMC certification if their access to client systems could expose them to Controlled Unclassified Information. Even indirect access to CUI through managed services can trigger the same certification requirements as handling the data directly."
        }
      },
      {
        "@type": "Question",
        "name": "What CMMC level do aerospace suppliers need?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most aerospace suppliers handling CUI, such as technical drawings or export-controlled specifications, need CMMC Level 2 certification. Suppliers that only handle Federal Contract Information (FCI) without CUI may qualify for the lower Level 1 requirement instead."
        }
      },
      {
        "@type": "Question",
        "name": "Does CMMC apply to small manufacturers in the defense supply chain?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, CMMC applies to manufacturers of any size if they process, store, or transmit Controlled Unclassified Information (CUI) as part of a DoD contract. Company size doesn't exempt a manufacturer from certification requirements — only the type of data handled determines the required CMMC level."
        }
      }
    ]
  }

  // console.log("industryData___", industryData?.industry_faq_content)

  return (
    <>
      <SEO
        title="CMMC 2.0 Compliance by Industry | Spartan Cyber Security"
        description="CMMC 2.0 compliance by industry — sector-specific guidance for manufacturing, aerospace, and defense supply chain contractors pursuing certification."
        url="https://spartan-cs.com/industries"
        schema={[
          industryFaqSchema
        ]}
      />
      <Header />
      <main className="industries-main">
        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content blog-hero-content1">
              <div className="blog-breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}><span style={{ color: "white" }}>Home</span></Link> <span className="separator">|</span>{" "}
                <span>Industries</span>
              </div>
              <h1 className="blog-hero-title">
                {industryData?.industry_sec_heading}
              </h1>
              <p className="blog-hero-subtitle">
                {industryData?.industry_sec_paragraph}
              </p>
            </div>
          </div>
        </div>

        {/* 2. ENVIRONMENTS SECTION */}
        <section className="environments-section">
          <div className="custom-container">
            <div className="section-tag-wrapper justify-content-start">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>WHO WE SERVE
              </span>
            </div>
            <h2 className="section-main-heading mb-5">
              {industryData?.industry_sec_serve_heading}
            </h2>

            <div className="row g-4">
              {/* {environments.map((env, idx) => ( */}
              {industryData?.industry_sec_content?.map((env, idx) => (
                <div className="col-xl-3 col-md-6" key={idx}>
                  <div className="env-card">
                    <div className="env-icon-box">
                      <img
                        src={environments[idx]}
                        alt=""
                        className="env-figma-icon"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      {/* <span className="fallback-red-dot"></span> */}
                    </div>
                    <h3 className="env-title">{env.title}</h3>
                    <p className="env-desc">{env.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SECTOR DETAILS (ALTERNATING LAYOUTS) */}
        <section className="sectors-detail-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>VERTICALS
              </span>
            </div>
            <h2 className="section-main-heading text-center mb-5">
              {industryData?.industry_sec_vertical_content}
            </h2>

            <div className="sectors-stack">
              {/* {sectors.map((sec, idx) => ( */}
              {industryData?.industry_sec_card_content?.map((sec, idx) => (
                <div
                  className={`row sector-row align-items-stretch g-0 ${sec.imageRight === "1" ? "" : "flex-row-reverse"
                    }`}
                  key={idx}
                >
                  {/* Text Column */}
                  <div className="col-lg-6">
                    <div className="sector-text-block">
                      <h3 className="sector-title">{sec.title}</h3>
                      <p className="sector-desc">{sec.description}</p>
                      <ul className="sector-points-list">
                        {sec.points.map((pt, pIdx) => (
                          <li key={pIdx}>
                            <span className="red-arrow">
                              <img src={startBullet} alt="" />
                            </span>
                            {pt}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Image Column */}
                  <div className="col-lg-6">
                    <div className="sector-image-block">
                      <img
                        src={`${IMAGE_URL}/${sec?.image}`}
                        alt={sec?.title}
                        className="sector-display-img"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ===================faq section=========== */}

        <section className="resource-faq-section" style={{marginTop: "60px"}}>
          <div className="section-inner-content faq-layout-grid">
            {/* Left Column Sticky Header Block */}
            <div className="faq-left-header-panel">
              <div className="faq-mini-badge">
                <span className="badge-dot-indicator" />
                <span className="badge-label-text">FAQ</span>
              </div>
              <h2 className="faq-panel-title">
                You Have Questions.
                <br />
                We Have Answers.
              </h2>
              <Link
                to="/contact-us"
                className="btn-red-action"
                style={{ marginTop: "15px" }}
              >
                Schedule a call <i className="fas fa-arrow-right"></i>
              </Link>
            </div>

            {/* Right Column Interactive Accordion Stack */}
            <div className="faq-right-accordion-panel">
              {industryData?.industry_faq_content?.map((item, index) => {
                const isOpen = activeFaqId === item.id;
                return (
                  <div
                    key={item?.id}
                    className={`faq-accordion-row ${isOpen ? "is-expanded" : ""}`}
                    onClick={() => toggleFaq(item?.id)}
                  >
                    <div className="faq-row-trigger-line">
                      <h3 className="faq-question-text">{item?.question}</h3>
                      <div
                        className={`faq-toggle-circle-indicator ${isOpen ? "active-minus" : "inactive-plus"
                          }`}
                      >
                        {isOpen ? (
                          /* Minus SVG Icon */
                          <svg
                            width="12"
                            height="2"
                            viewBox="0 0 12 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1 1H11"
                              stroke="#FFFFFF"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        ) : (
                          /* Plus SVG Icon */
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6 1V11M1 6H11"
                              stroke="#27272A"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Smooth height container breakdown space */}
                    <div className="faq-row-collapsible-content">
                      <div className="faq-answer-inner-wrapper">
                        <p className="faq-answer-paragraph">{item?.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4. CALL TO ACTION SECTION */}
        <section className="industries-cta-section">
          <div className="custom-container">
            <div className="industries-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>GET STARTED
              </span>
              <h2 className="cta-banner-title">
                {industryData?.industry_sec_started_heading}
              </h2>
              <p className="cta-banner-desc">
                {industryData?.industry_sec_started_paragraph}
              </p>
              <div className="cta-buttons-group">
                <Link
                  to="/contact-us"
                  className="cta-btn-white"
                  style={{ textDecoration: "none" }}
                >
                  Schedule Consultation <span>→</span>
                </Link>
                <Link
                  to="/compliance-systems"
                  className="cta-btn-outline"
                  style={{ textDecoration: "none" }}
                >
                  Explore Compliance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default IndustriesScreen;
