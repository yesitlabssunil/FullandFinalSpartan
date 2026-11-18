import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/approachScreen.css";
import { useDispatch, useSelector } from "react-redux";

// Assuming you have a small red page icon exported for the 3 methodology cards
import docIcon from "../assets/images/approachScreen/doc-icon.png";
import startBullet from "../assets/images/approachScreen/startBullet.png";
import { Link } from "react-router-dom";
import { approachScreenData } from "../redux/slices/secondSlice";
import SEO from "../component/SEO";

const ApproachScreen = () => {
  const dispatch = useDispatch();
  const { approachData, loading } = useSelector((state) => state.second);

  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  useEffect(() => {
    dispatch(approachScreenData());
  }, [dispatch]);

  const disciplines = [
    {
      title: "Execution – Driven Security",
      desc: "Controls are built into how your business operates – not bolted on for an audit.",
      points: [
        "Network segmentation & identity-first access",
        "Endpoint hardening on day-one rollouts",
        "Change control wired into ticketing",
        "Operational runbooks owned by your team",
      ],
    },
    {
      title: "Evidence – Based Validation",
      desc: "Every control produces traceable evidence as a byproduct of execution - not a separate workstream.",
      points: [
        "Continuous control validation",
        "Endpoint hardening on day-one rollouts",
        "Auto-captured artifacts mapped to NIST 800-171",
        "Executive reporting from live evidence",
      ],
    },
    {
      title: "Audit – Ready Framework",
      desc: "A standing posture that withstands C3PAO scrutiny any week of the year - not just at assessment time.",
      points: [
        "SSP structured to assessor sampling logic",
        "SPRS scoring tied to operational reality",
        "Mock-assessment defense rehearsals",
        "On-site assessor support & finding response",
      ],
    },
  ];

  const weeks = [
    {
      num: "01",
      label: "Week",
      title: "Strategic Assessment",
      desc: "Scope, gap analysis and contract risk profile.",
    },
    {
      num: "02",
      label: "Week",
      title: "Architecture & Plan",
      desc: "SSP, POA&M and remediation roadmap signed off.",
    },
    {
      num: "03",
      label: "Week",
      title: "Implementation",
      desc: "Controls deployed, evidence captured, operations stood up.",
    },
    {
      num: "04",
      label: "Week",
      title: "Audit Readiness",
      desc: "Mock assessment, evidence package, executive sign-off.",
    },
  ];

  const principles = [
    {
      title: "Senior-led",
      desc: "No junior handoffs. Senior advisors from kickoff to handoff.",
    },
    {
      title: "Audit-first",
      desc: "Every control built to withstand assessor scrutiny on day one.",
    },
    {
      title: "Evidence-based",
      desc: "Documentation is generated as a byproduct of execution.",
    },
    {
      title: "Knowledge transfer",
      desc: "Your team owns the system after we leave - no lock-in.",
    },
  ];

  // const faqSchema = {
  //   "@type": "FAQPage",
  //   "@id": "https://spartan-cs.com/approach#faq",
  //   "mainEntity": approachData?.approach_faq_content?.map((faq) => ({
  //     "@type": "Question",
  //     "name": faq?.question,
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": faq?.answer
  //     }
  //   }))
  // };
  const approachFaqSchema = {
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes a governance-first approach to compliance different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A governance-first approach starts with executive accountability and decision-making structure, then builds technical controls to support it, rather than treating compliance as a purely IT-driven checklist. This tends to produce documentation and evidence that hold up better under formal audit scrutiny, since leadership ownership is baked in from the start."
        }
      },
      {
        "@type": "Question",
        "name": "Do you need ongoing support after achieving compliance certification?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes — most frameworks require annual affirmations, periodic reassessments, and updated documentation as systems and vendors change, so certification isn't a one-time finish line. Organizations that treat compliance as ongoing governance tend to pass reassessments faster and with fewer findings than those that revisit it only when required."
        }
      },
      {
        "@type": "Question",
        "name": "What is continuous compliance versus point-in-time compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Point-in-time compliance means passing an audit on a single date, while continuous compliance means maintaining evidence and control effectiveness year-round. Frameworks like CMMC increasingly require continuous compliance through annual affirmations, not just a one-time certification."
        }
      },
      {
        "@type": "Question",
        "name": "Why do compliance programs fail formal audits?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Compliance programs most often fail audits when documentation doesn't match actual practice — for example, a written policy exists but isn't being followed day-to-day. Continuous evidence collection, rather than assembling proof right before an audit, is what prevents this gap from surfacing during assessment."
        }
      },
      {
        "@type": "Question",
        "name": "What does a cybersecurity compliance gap assessment involve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A gap assessment evaluates your current security controls against a required framework, like NIST 800-171, to identify exactly what's missing before you can pass a formal audit. The output is typically a prioritized roadmap showing which gaps to close first based on risk and audit timeline."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a cybersecurity compliance engagement typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most compliance engagements run 6 to 12 months, starting with a gap assessment and ending with audit-ready documentation and implemented controls. Timeline depends heavily on your starting security maturity and how many controls still need to be built out."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between cybersecurity and cybersecurity compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Cybersecurity is the practice of actively defending systems and data from threats, while compliance is the process of proving those defenses meet a specific regulatory standard. An organization can be secure without being compliant, and compliant without being fully secure — a strong program needs both working together."
        }
      },
      {
        "@type": "Question",
        "name": "What is a risk-based approach to cybersecurity compliance?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A risk-based approach prioritizes security investments around your organization's actual threats and highest-impact vulnerabilities, rather than treating every control as equally urgent. This lets contractors close the gaps that matter most first, instead of spreading limited resources evenly across low- and high-risk areas."
        }
      }
    ]
  }

  return (
    <>
      <SEO
        title="Our CMMC & Compliance Approach | Spartan Cyber Security"
        description="Cybersecurity compliance approach built on governance-first principles, turning CMMC 2.0 and NIST 800-171 requirements into audit-ready operational security."
        url="https://spartan-cs.com/approach"
        schema={[
          approachFaqSchema
        ]}
      />
      <Header />
      <main className="approach-main">
        {/* 1. HERO SECTION (Matches your Blog/Contact background perfectly) */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}> <span style={{ color: "white" }}>Home</span></Link> <span className="separator">|</span>{" "}
                <span>Approach</span>
              </div>
              <h1 className="blog-hero-title">A method, not a checklist.</h1>
              <p className="blog-hero-subtitle">
                Three operating disciplines and a disciplined four-stage program
                - engineered to assessor expectations and operated by your team
                after handoff.
              </p>
            </div>
          </div>
        </div>

        {/* 2. THREE DISCIPLINES SECTION */}
        <section className="disciplines-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>METHODOLOGY
              </span>
            </div>
            <h2 className="section-main-heading text-center">
              Three disciplines of operational compliance.
            </h2>
            <p className="section-sub-heading text-center">
              Execution, evidence and audit-readiness engineered into one
              performant system.
            </p>

            <div className="row g-4 mt-4">
              {disciplines.map((item, idx) => (
                <div className="col-lg-4 col-md-6" key={idx}>
                  <div className="discipline-card">
                    <div className="discipline-icon-container">
                      <img
                        src={docIcon}
                        alt="Icon"
                        className="discipline-card-icon"
                        onError={(e) => {
                          e.target.style.display = "none";
                        }}
                      />
                      {/* Fallback micro fallback marker if image isn't loaded */}
                      {/* <span className="fallback-red-dot"></span> */}
                    </div>
                    <h3 className="discipline-card-title">{item.title}</h3>
                    <p className="discipline-card-desc">{item.desc}</p>
                    <hr className="discipline-divider" />
                    <ul className="discipline-points-list">
                      {item.points.map((point, pIdx) => (
                        <li key={pIdx}>
                          <span className="red-plus">
                            <img src={startBullet} alt="" />
                          </span>{" "}
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. TIMELINE WEEKS SECTION */}
        <section className="timeline-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                {" "}
                <span className="fallback-red-dot"></span>ENGAGEMENT
              </span>
            </div>
            <h2 className="section-main-heading text-center custom-container3">
              {/* From assessment to audit readiness in <br className="d-none d-md-block" /> 8–12 weeks. */}
              {approachData?.approach_sec_heading}
            </h2>
            <p className="section-sub-heading text-center">
              {approachData?.approach_sec_paragraph}
            </p>

            <div className="row g-4 mt-4">
              {/* {weeks.map((stage, idx) => ( */}
              {approachData?.approach_sec_content?.map((stage, idx) => (
                <div className="col-xl-3 col-md-6" key={idx}>
                  <div className="timeline-week-card">
                    <div className="week-header-flex">
                      <span className="week-number">{stage.week}</span>
                      <span className="week-label">Week</span>
                    </div>
                    <h3 className="week-card-title">{stage.title}</h3>
                    <p className="week-card-desc">{stage.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. OPERATING PRINCIPLES (DARK SECTION) */}
        <section className="principles-dark-section">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag dark-theme-tag">
                <span className="fallback-red-dot"></span>OPERATING PRINCIPLES
              </span>
            </div>
            <h2 className="dark-section-heading text-center">
              How we work, every engagement.
            </h2>

            <div className="row g-4 mt-5">
              {principles.map((item, idx) => (
                <div className="col-xl-3 col-md-6" key={idx}>
                  <div className="principle-dark-card">
                    <div className="red-horizontal-bar"></div>
                    <h3 className="principle-card-title">{item.title}</h3>
                    <p className="principle-card-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==================faq================= */}

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
              {approachData?.approach_faq_content.map((item, index) => {
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


        {/* 5. CALL TO ACTION SECTION */}
        <section className="approach-cta-section">
          <div className="custom-container">
            <div className="approach-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>GET STARTED
              </span>
              <h2 className="cta-banner-title">
                See the approach applied to <br /> your contracts.
              </h2>
              <p className="cta-banner-desc">
                A 45-minute working session that maps our method to your
                starting position.
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

export default ApproachScreen;
