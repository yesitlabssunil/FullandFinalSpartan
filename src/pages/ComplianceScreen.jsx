import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  FaShieldAlt,
  FaFileContract,
  FaTools,
  FaEye,
  FaUserShield,
  FaGraduationCap,
} from "react-icons/fa";
import "../assets/css/complianceScreen.css";
import checkIcon from "../assets/images/complianceScreen/check-icon.png";
import icon1 from "../assets/images/complianceScreen/icon1.png";
import icon2 from "../assets/images/complianceScreen/icon2.png";
import icon3 from "../assets/images/complianceScreen/icon3.png";
import icon4 from "../assets/images/complianceScreen/icon4.png";
import icon5 from "../assets/images/complianceScreen/icon5.png";
import icon6 from "../assets/images/complianceScreen/icon6.png";
import { Link } from "react-router-dom";
import { complianceScreenData } from "../redux/slices/secondSlice";
import SEO from "../component/SEO";

const ComplianceScreen = () => {
  const dispatch = useDispatch();
  const { complianceData, loading } = useSelector((state) => state.second);

  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };



  useEffect(() => {
    dispatch(complianceScreenData());
  }, [dispatch]);

  const frameworks = [
    {
      tag: "DOD",
      title: "CMMC 2.0",
      desc: "Foundational, Advanced and Expert levels for the Defense Industrial Base.",
    },
    {
      tag: "NIST",
      title: "NIST SP 800-171",
      desc: "All 110 controls implemented with traceable evidence and documented SSP.",
    },
    {
      tag: "NIST",
      title: "NIST 800-53",
      desc: "Federal civilian baseline for high/moderate/low impact systems.",
    },
    {
      tag: "DFARS",
      title: "DFARS 7012 / 7019 / 7020 / 7021",
      desc: "Contract clause compliance and SPRS scoring.",
    },
    {
      tag: "FEDRAMP",
      title: "FedRAMP Readiness",
      desc: "Cloud service provider posture and 3PAO preparation.",
    },
    {
      tag: "ITAR",
      title: "ITAR & Export Control",
      desc: "Technical data segmentation and access controls.",
    },
  ];

  const services = [icon1, icon2, icon3, icon4, icon5, icon6];

  const outcomes = [
    {
      title: "Protect Revenue",
      desc: "Maintain eligibility for active and pipeline contracts.",
    },
    {
      title: "Preserve Contracts",
      desc: "Reduce risk of pause, recompete, or termination.",
    },
    {
      title: "Strengthen Security",
      desc: "Move from documented controls to measurable posture.",
    },
    {
      title: "Audit Readiness",
      desc: "Be ready for assessor visit any week of the year.",
    },
    {
      title: "Executive Confidence",
      desc: "Board-grade visibility into compliance posture.",
    },
    {
      title: "Team Capability",
      desc: "Knowledge transfer that lasts beyond engagement.",
    },
  ];

  const complianceSystemsSchema = {
    "@type": "Service",
    "@id": "https://spartan-cs.com/compliance-systems#service",
    "name": "Compliance Systems Development",
    "serviceType": "GRC Program Design and Compliance System Implementation",
    "provider": {
      "@id": "https://spartan-cs.com/#organization"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Federal Contractors / Defense Industrial Base"
    },
    "description": "Cybersecurity compliance programs aligned to CMMC 2.0, NIST SP 800-171, NIST 800-53, DFARS, FedRAMP, and ITAR requirements for federal contractors.",
    "url": "https://spartan-cs.com/compliance-systems",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://spartan-cs.com/compliance-systems"
    }
  };

  // const faqSchema = {
  //   "@type": "FAQPage",
  //   "@id": "https://spartan-cs.com/compliance-systems#faq",
  //   "mainEntity": complianceData?.compliance_faq_content?.map((faq) => ({
  //     "@type": "Question",
  //     "name": faq?.question,
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": faq?.answer
  //     }
  //   }))
  // };

  const complianceFaqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How often should a cybersecurity risk assessment be conducted?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most compliance frameworks require a formal risk assessment at least annually, though organizations handling sensitive data often benefit from more frequent reviews. Significant changes, like new systems, vendors, or a security incident, should also trigger an updated assessment outside the regular schedule."
        }
      },
      {
        "@type": "Question",
        "name": "What documentation is required for a cybersecurity compliance audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A compliance audit typically requires a System Security Plan (SSP), evidence of implemented controls, incident response records, and access control logs. Organizations that maintain this documentation continuously, rather than assembling it right before an audit, tend to pass assessments with far fewer findings."
        }
      },
      {
        "@type": "Question",
        "name": "Who is responsible for cybersecurity compliance in an organization?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ultimate responsibility for cybersecurity compliance sits with executive leadership, since frameworks like CMMC require a senior official to formally affirm compliance status. Day-to-day implementation is typically managed by IT and security teams, but accountability for accuracy rests at the leadership level."
        }
      },
      {
        "@type": "Question",
        "name": "What is continuous compliance monitoring?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Continuous compliance monitoring is the ongoing process of tracking security controls in real time, rather than relying on a single point-in-time audit. For federal contractors, this approach supports annual affirmations and reduces the risk of drifting out of compliance between formal assessments."
        }
      },
      {
        "@type": "Question",
        "name": "How is a cybersecurity risk assessment different from a compliance audit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A risk assessment identifies and prioritizes an organization's actual security vulnerabilities, while a compliance audit verifies whether specific required controls have been implemented. Organizations typically need both — the assessment shapes the remediation plan, and the audit confirms it meets the standard."
        }
      },
      {
        "@type": "Question",
        "name": "What compliance frameworks apply to defense contractors?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Defense contractors most commonly need to comply with CMMC 2.0, NIST 800-171, and DFARS 252.204-7012, depending on the type of data they handle. Organizations working with export-controlled technical data may also need to meet ITAR requirements."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between NIST 800-53 and NIST 800-171?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIST 800-53 governs federal information systems directly operated by government agencies, while NIST 800-171 applies to non-federal organizations, like contractors, that handle Controlled Unclassified Information (CUI). Most defense contractors pursuing CMMC compliance work with NIST 800-171, not 800-53."
        }
      },
      {
        "@type": "Question",
        "name": "Is ISO 9001 a cybersecurity standard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, ISO 9001 is a quality management standard, not a cybersecurity or information security standard — that's ISO 27001. Organizations are sometimes confused because both are ISO certifications, but they address entirely different areas of operations."
        }
      },
      {
        "@type": "Question",
        "name": "Is NIST CSF free to use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the NIST Cybersecurity Framework is free and publicly available, since it's published by a U.S. government agency for voluntary adoption. That said, implementing it well typically requires expertise and resources most organizations don't have in-house."
        }
      },
      {
        "@type": "Question",
        "name": "What are the key differences between NIST 800-53 and SOC 2?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "NIST 800-53 is a prescriptive federal standard with over 1,000 detailed security controls, while SOC 2 is a flexible, customer-facing framework built around five trust service criteria and audited by a CPA firm. Federal contractors are typically required to follow NIST frameworks, while SOC 2 is more common in commercial SaaS and service organizations."
        }
      },
      {
        "@type": "Question",
        "name": "Is NIST 800-53 a compliance standard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, NIST SP 800-53 provides a comprehensive catalog of security and privacy controls for U.S. federal information systems. It supports federal information security requirements and serves as a technical foundation for frameworks such as FedRAMP. Its applicability depends on the system, agency requirements, and relevant regulations."
        }
      }
    ]
  }


const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://spartan-cs.com/compliance-systems#breadcrumb",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home Page",
      "item": "https://spartan-cs.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Compliance Systems",
      "item": "https://spartan-cs.com/compliance-systems"
    }
  ]
};


  return (
    <>
      <SEO
        title="NIST Compliance Services | Spartan Cyber Security"
        description="Compliance consulting services for federal contractors: NIST SP 800-171 gap assessments, risk assessments, policies, SSP development and continuous monitoring."
        url="https://spartan-cs.com/compliance-systems"
        schema={[
          complianceSystemsSchema,
          complianceFaqSchema,
          breadcrumbSchema
        ]}
      />
      <Header />
      <main className="compliance-main">
        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}> <span style={{ color: "white" }}>Home</span></Link> <span className="separator">|</span>{" "}
                <span>Compliance Systems</span>
              </div>
              <h1 className="blog-hero-title">
                One Program Every Framework
                <br /> that Matters to Your Contracts.
              </h1>
              <p className="blog-hero-subtitle">
                From CMMC 2.0 to NIST 800-171, DFARS, and FedRAMP – We engineer
                <br /> a single compliance posture that maps to all of them.
              </p>
            </div>
          </div>
        </div>

        {/* 2. STANDARDS REQ GRID */}
        <section className="standards-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>FRAMEWORKS
              </span>
            </div>
            <h2 className="section-main-heading text-center">
              Built for the standards your contracts require.
            </h2>

            <div className="row g-4 mt-4">
              {frameworks?.map((fw, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="framework-card">
                    <span className="framework-mini-label">{fw.tag}</span>
                    <h3 className="framework-card-title">{fw.title}</h3>
                    <p className="framework-card-desc">{fw.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. SIX SERVICES SECTION */}
        <section className="services-grid-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>SERVICE LINES
              </span>
            </div>
            <h2 className="section-main-heading text-center">
              {complianceData?.serviceline_sec_heading}
            </h2>
            <p className="section-sub-heading text-center">
              {complianceData?.serviceline_sec_paragraph}
            </p>

            <div className="row g-4 mt-4">
              {/* {services.map((svc, idx) => ( */}
              {complianceData?.serviceline_sec_content?.map((svc, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="service-feature-card">
                    <div className="service-feature-icon-box">
                      <img src={services[idx]} alt="" />
                    </div>
                    <h3 className="service-feature-title">{svc.title}</h3>
                    <p className="service-feature-desc">{svc.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. MIDWAY SPLIT NOT SURE SECTION */}
        <section className="midway-split-section">
          <div className="custom-container">
            <div className="midway-split-wrapper">
              <div className="midway-left">
                <h3 className="midway-title">Not sure where you stand?</h3>
                <p className="midway-desc">
                  A 30-minute scoping call will pinpoint your gaps and the
                  fastest path forward.
                </p>
              </div>
              <div className="midway-right">
                <Link
                  to="/contact-us"
                  className="midway-btn-red"
                  style={{ textDecoration: "none" }}
                >
                  Talk to a Senior Advisor <span className="ms-1">→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OUTCOMES (DARK SECTION) */}
        <section className="outcomes-dark-section">
          <div className="custom-container custom-container1">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag dark-theme-tag">
                <span className="fallback-red-dot"></span>OUTCOMES
              </span>
            </div>
            <h2 className="dark-section-heading text-center">
              Protect revenue. Preserve contracts.{" "}
              <br className="d-none d-md-block" /> Strengthen security.
            </h2>

            <div className="row g-4 mt-5">
              {outcomes?.map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="outcome-dark-card">
                    <div className="outcome-icon-bullet">
                      {/* <div className="outcome-inner-dot"></div> */}
                      <img src={checkIcon} alt="" />
                    </div>
                    <h3 className="outcome-card-title">{item.title}</h3>
                    <p className="outcome-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========FAQ SECTION============ */}
        <section className="resource-faq-section">
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
              {complianceData?.compliance_faq_content?.map((item, index) => {
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
        {/* ========================================== */}

        {/* 6. CALL TO ACTION SECTION */}
        <section className="compliance-cta-section">
          <div className="custom-container">
            <div className="compliance-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>GET STARTED
              </span>
              <h2 className="cta-banner-title">
                Map your compliance program in a 45-minute working session.
              </h2>
              <p className="cta-banner-desc">
                A Senior Advisor will scope your starting position and the
                fastest route to audit readiness.
              </p>
              <div className="cta-buttons-group">
                <Link
                  to="/contact-us"
                  className="cta-btn-white"
                  style={{ textDecoration: "none" }}
                >
                  Schedule Consultation{" "}
                  <span>
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 5.5H11M11 5.5L6.5 1M11 5.5L6.5 10"
                        stroke="#111111"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
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

export default ComplianceScreen;
