import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../assets/css/securityScreen.css";
import SEO from "../component/SEO";
import { useSelector, useDispatch } from "react-redux";

// Global / Common Elements
import checkBulletRed from "../assets/images/approachScreen/startBullet.png";

// Section 2: Tenant In Scope Icons
import cloudIcon from "../assets/images/securityScreen/cloud-icon.png";
import purse from "../assets/images/securityScreen/purse.png";
import purse1 from "../assets/images/securityScreen/purse1.png";
import mail from "../assets/images/securityScreen/mail.png";
import email from "../assets/images/securityScreen/email.png";
import key from "../assets/images/securityScreen/key.png";
import key1 from "../assets/images/securityScreen/key1.png";
import security1 from "../assets/images/securityScreen/security1.png";
import pulse from "../assets/images/securityScreen/pulse.png";
import pc from "../assets/images/securityScreen/pc.png";
import shield from "../assets/images/securityScreen/shield.png";
import people from "../assets/images/securityScreen/people.png";
import warning from "../assets/images/securityScreen/warning.png";
import security from "../assets/images/complianceScreen/icon1.png";
import envIcon3 from "../assets/images/industryScreen/env-icon3.png";
import { Link } from "react-router-dom";
import { securityScreenData } from "../redux/slices/secondSlice";

const SecurityScreen = () => {
  const dispatch = useDispatch();
  const { securityScreenFaqData } = useSelector((state) => state.second);

  // console.log("securityScreenFaqData", securityScreenFaqData);
  const [activeFaqId, setActiveFaqId] = useState();

  const toggleFaq = (id) => {
    setActiveFaqId(activeFaqId === id ? null : id);
  };

  useEffect(() => {
    dispatch(securityScreenData());
  }, [dispatch]);

  const microsoft365SecuritySchema = {
    "@type": "Service",
    "@id": "https://spartan-cs.com/microsoft-365-security#service",
    name: "Microsoft 365 Security Consulting",
    serviceType: "Microsoft 365 Security Hardening & Compliance",
    provider: {
      "@id": "https://spartan-cs.com/#organization",
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Federal Contractors / Defense Industrial Base",
    },
    description:
      "GCC High migration, CUI enclave design, Microsoft 365 hardening, identity protection, Defender, Purview DLP, Azure security, and incident response for federal contractors.",
    url: "https://spartan-cs.com/microsoft-365-security",
    mainEntityOfPage: "https://spartan-cs.com/microsoft-365-security",
  };

  // const faqSchema = {
  //   "@type": "FAQPage",
  //   "@id": "https://spartan-cs.com/microsoft-365-security#faq",
  //   "mainEntity": securityScreenFaqData?.microsoft_faq_content?.map((faq) => ({
  //     "@type": "Question",
  //     "name": faq?.question,
  //     "acceptedAnswer": {
  //       "@type": "Answer",
  //       "text": faq?.answer
  //     }
  //   }))
  // };

  const securityFaqSchema = {
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I use Microsoft 365 Commercial and still be CMMC compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It's possible for CMMC Level 1 (FCI only), but any organization handling CUI at Level 2 will struggle to meet the required access, logging, and data residency controls in commercial Microsoft 365. Most Level 2 contractors need to migrate to GCC or GCC High to close those gaps.",
        },
      },
      {
        "@type": "Question",
        name: "How much does Microsoft 365 GCC High cost for defense contractors?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Microsoft 365 GCC High typically costs more per user than commercial licensing, and organizations also need to budget for migration, configuration, and ongoing compliance management. Total cost depends heavily on user count and how much legacy data needs to migrate into the new environment.",
        },
      },
      {
        "@type": "Question",
        name: "Do subcontractors need GCC High for CMMC compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Subcontractors need GCC High only if they process, store, or transmit Controlled Unclassified Information (CUI) or export-controlled data covered under ITAR. Subcontractors handling only Federal Contract Information (FCI) at CMMC Level 1 typically don't require GCC High.",
        },
      },
      {
        "@type": "Question",
        name: "What is the difference between Microsoft 365 GCC and GCC High?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "GCC meets FedRAMP High and DFARS requirements but does not support ITAR-controlled data, while GCC High adds screened U.S.-person-only access and is built specifically to meet CMMC, ITAR, and export control requirements. Most defense contractors handling CUI or ITAR data need GCC High, not standard GCC.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need Microsoft 365 to use Defender?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Windows Defender (Microsoft Defender Antivirus) comes built into Windows and doesn't require a Microsoft 365 subscription to function. However, the advanced enterprise features defense contractors rely on for CMMC — like extended detection and response (EDR) and centralized logging — require Microsoft 365 or a standalone Defender for Endpoint license.",
        },
      },
      {
        "@type": "Question",
        name: "What replaced Microsoft Defender?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Microsoft Defender hasn't been replaced — it's been consolidated and rebranded into Microsoft Defender for Endpoint and Microsoft 365 Defender as part of Microsoft's broader security suite. For defense contractors, the relevant question is whether it's properly configured within a compliant tenant, not which product name is current.",
        },
      },
      {
        "@type": "Question",
        name: "Does DoD use Microsoft Copilot?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Department of Defense has been evaluating and piloting Microsoft Copilot within secured, government-authorized cloud environments rather than standard commercial Copilot. Any AI tool used with CUI must run within an accredited environment like GCC High to meet DoD data handling requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Is Microsoft Defender CMMC compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Microsoft Defender can support several CMMC control families, such as system monitoring and malicious code protection, but it doesn't make an environment CMMC compliant on its own. Compliance depends on how Defender is configured alongside the broader Microsoft 365 tenant, access controls, and logging setup.",
        },
      },
      {
        "@type": "Question",
        name: "Is Office 365 CMMC compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard commercial Office 365 does not meet CMMC Level 2 requirements on its own, since it lacks the access controls and data residency guarantees the framework requires. Contractors handling CUI typically need GCC or GCC High, configured and hardened to the specific NIST 800-171 controls CMMC assesses.",
        },
      },
      {
        "@type": "Question",
        name: "Is Microsoft 365 ITAR compliant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Standard Microsoft 365 and GCC are not ITAR compliant — only GCC High meets ITAR requirements, since it restricts data storage and support access to screened U.S. persons. Defense contractors handling export-controlled technical data need GCC High specifically, not standard commercial or GCC licensing.",
        },
      },
    ],
  };


const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "@id": "https://spartan-cs.com/microsoft-365-security#breadcrumb",
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
      "name": "Microsoft 365 Security",
      "item": "https://spartan-cs.com/microsoft-365-security"
    }
  ]
};


  return (
    <>
      <SEO
        title="Microsoft 365 CMMC Implementation | Spartan Cyber Security"
        description="Implement Microsoft 365 security controls mapped to NIST SP 800-171 and CMMC 2.0, including cybersecurity risk assessment,identity protection, access control, logging and audit-ready evidence."
        url="https://spartan-cs.com/microsoft-365-security"
        schema={[microsoft365SecuritySchema, securityFaqSchema, breadcrumbSchema]}
      />
      <Header />
      <main className="security-main">
        {/* 1. HERO SECTION */}
        <div className="blog-hero-fullwidth">
          <div className="custom-container">
            <div className="blog-hero-content">
              <div className="blog-breadcrumb">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <span style={{ color: "white" }}>Home</span>
                </Link>
                <span className="separator">|</span>{" "}
                <span>MICROSOFT 365 SECURITY</span>
              </div>
              <h1 className="blog-hero-title">
                Hardened Microsoft 365 Security <br />
                for Federal Contractors.
              </h1>
              <p className="blog-hero-subtitle">
                GCC High migration, CUI enclaves and audit-ready Microsoft 365
                hardening - engineered to meet CMMC 2.0, NIST 800-171 and DFARS
                7012.
              </p>
            </div>
          </div>
        </div>

        {/* 2. TENANT IN SCOPE SECTION */}
        <section className="sec-light-section text-center">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>WHY MICROSOFT 365
                SECURITY MATTERS
              </span>
            </div>
            <h2 className="section-main-heading mb-3">
              Your Tenant is in scope. Your Assessor will look here first.
            </h2>
            <p className="section-sub-heading2 mb-5">
              Email, SharePoint, OneDrive, Teams - all touch CUI. Without proper
              data residency and configuration, the entire CMMC scope expands.
              Spartan delivers a hardened, audit-ready Microsoft 365 Security
              environment engineered for the regulated workloads of federal
              contractors.
            </p>

            <div className="row g-4 text-start">
              <div className="col-lg-4">
                <div className="security-panel-card">
                  <div className="panel-icon-box">
                    <img
                      src={cloudIcon}
                      alt="Configuration Control"
                      className="panel-icon"
                    />
                  </div>
                  <h3>GCC High Migration</h3>
                  <p>
                    Move regulated workloads into a sovereign US tenant with
                    proper data residency.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="security-panel-card">
                  <div className="panel-icon-box">
                    <img
                      src={purse1}
                      alt="Boundary Isolation"
                      className="panel-icon"
                    />
                  </div>
                  <h3>CUI Enclave Design</h3>
                  <p>
                    Reduce assessment scope with a purpose-built enclave for
                    controlled data.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="security-panel-card">
                  <div className="panel-icon-box">
                    <img
                      src={email}
                      alt="Shared Matrix"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Email & Collaboration</h3>
                  <p>
                    DLP, encryption, conditional access, and retention aligned
                    to federal rules.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. ENTRA ID ASYMMETRIC GRID FEATURE */}
        <section className="sec-light-section1 border-top-gray">
          <div className="custom-container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 content-column">
                <div className="section-tag-wrapper justify-content-start">
                  <span className="section-mini-tag">
                    <span className="fallback-red-dot"></span>IDENTITY & ACCESS
                    MANAGEMENT
                  </span>
                </div>
                <h2 className="section-main-heading1 mt-3">
                  Entra ID hardened to federal access standards.
                </h2>
                <p className="sec-body-text mt-3">
                  Privileged access, conditional access, and role- based
                  controls tied directly to NIST 800-171 access-control
                  families. Every identity is mapped, monitored, and enforced.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img src={key1} alt="MFA" className="panel-icon" />
                      </div>
                      <h3>Privileged Access</h3>
                      <p>
                        PIM, just-in-time elevation and admin tier separation.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={security1}
                          alt="Privileged"
                          className="panel-icon"
                        />
                      </div>
                      <h3>Conditional Access</h3>
                      <p>Device, location and risk-based policy enforcement.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={people}
                          alt="Device Auth"
                          className="panel-icon"
                        />
                      </div>
                      <h3>Role-Based Access</h3>
                      <p>Least-privilege RBAC mapped to CMMC AC controls.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={purse1}
                          alt="B2B Trust"
                          className="panel-icon"
                        />
                      </div>
                      <h3>MFA & FIDO2</h3>
                      <p>Phishing-resistant authentication for all users.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. DEFENDER TUNED GRID */}
        <section className="sec-light-section text-center border-top-gray">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>MICROSOFT DEFENDER
              </span>
            </div>
            <h2 className="section-main-heading mb-3 block-size">
              Microsoft Defender deployed and tuned <br /> for CUI environments.
            </h2>
            <p className="section-sub-heading mb-5">
              Defender for Endpoint, Defender for Cloud Apps, and Intune work
              together to enforce device compliance, isolate threats, and
              produce assessor-ready evidence.
            </p>

            <div className="row g-4 text-start">
              <div className="col-lg-4">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={pc}
                      alt="Device Compliance"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Device Compliance</h3>
                  <p>
                    Intune baselines aligned to CIS and DoD STIG references.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={shield}
                      alt="EDR Monitoring"
                      className="panel-icon"
                    />
                  </div>
                  <h3>EDR & Threat Hunting</h3>
                  <p>
                    Defender for Endpoint with custom detections and response
                    runbooks.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={pulse}
                      alt="Risk Governance"
                      className="panel-icon"
                    />
                  </div>
                  <h3>App Governance</h3>
                  <p>
                    Defender for Cloud Apps controlling shadow IT and OAuth
                    risk.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. EXCHANGE ONLINE ASYMMETRIC GRID FEATURE */}
        <section className="sec-light-section1 border-top-gray">
          <div className="custom-container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 content-column">
                <div className="section-tag-wrapper justify-content-start">
                  <span className="section-mini-tag">
                    <span className="fallback-red-dot"></span>EMAIL SECURTIY
                  </span>
                </div>
                <h2 className="section-main-heading mt-3">
                  Exchange Online locked down for regulated communication.
                </h2>
                <p className="sec-body-text mt-3">
                  Email is the most-targeted channel in the DIB. Spartan deploys
                  layered defenses - authentication, content inspection and
                  impersonation protection - that hold up under assessor
                  scrutiny.
                </p>
              </div>
              <div className="col-lg-6">
                <div className="row g-4">
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={mail}
                          alt="Anti Phishing"
                          className="panel-icon"
                        />
                      </div>
                      <h3>Defender for Office 365</h3>
                      <p>
                        Anti-phishing, Safe Links and Safe Attachments tuned to
                        your tenant.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={purse1}
                          alt="DKIM DMARC"
                          className="panel-icon"
                        />
                      </div>
                      <h3>Encryption</h3>
                      <p>
                        Message encryption and S/MIME for sensitive
                        communications.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={security1}
                          alt="Crypto Mail Paths"
                          className="panel-icon"
                        />
                      </div>
                      <h3>DMARC / SPF / DKIM</h3>
                      <p>Domain authentication enforced and monitored.</p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="security-panel-card micro-feature">
                      <div className="micro-box">
                        <img
                          src={warning}
                          alt="Data Outflow"
                          className="panel-icon"
                        />
                      </div>
                      <h3>Impersonation Defense</h3>
                      <p>
                        Executive and brand impersonation policies hardened.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. PURVIEW DLP & SENSITIVITY LABELS */}
        <section className="sec-dark-section separation-top-glow">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag dark-theme-tag">
                <span className="fallback-red-dot"></span>DATA PROTECTION (DLP)
              </span>
            </div>
            <h2 className="dark-section-title text-center">
              Purview DLP and sensitivity labels protecting CUI
              <br /> everywhere.
            </h2>
            <p className="dark-section-subtitle text-center mb-5">
              Classify, label, and protect controlled data across Exchange,
              SharePoint, OneDrive, Teams, and endpoints. Built to satisfy DFARS
              7012 marking and handling requirements.
            </p>

            <div className="row g-4 mb-5 pb-4">
              <div className="col-lg-4">
                <div className="dark-panel-card">
                  <div className="panel-icon-box dark-box">
                    <img
                      src={envIcon3}
                      alt="Sensitivity Labels"
                      className="panel-icon"
                    />
                  </div>
                  <h3 style={{ color: "#FFFFFF" }}>Sensitivity Labels</h3>
                  <p>Automatic and manual labeling tied to CUI categories.</p>
                  <ul className="dark-card-list">
                    <li>
                      <img src={checkBulletRed} alt="bullet" /> Mapped to NIST
                      800-171
                    </li>
                    <li>
                      <img src={checkBulletRed} alt="bullet" /> Documented in
                      your SSP
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dark-panel-card">
                  <div className="panel-icon-box dark-box">
                    <img
                      src={security}
                      alt="DLP Policies"
                      className="panel-icon"
                    />
                  </div>
                  <h3 style={{ color: "#FFFFFF" }}>DLP Policies</h3>
                  <p>
                    Block, warn and audit policies across all M365 workloads.
                  </p>
                  <ul className="dark-card-list">
                    <li>
                      <img src={checkBulletRed} alt="bullet" /> Mapped to NIST
                      800-171
                    </li>
                    <li>
                      <img src={checkBulletRed} alt="bullet" /> Documented in
                      your SSP
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="dark-panel-card">
                  <div className="panel-icon-box dark-box">
                    <img
                      src={purse}
                      alt="Information Barriers"
                      className="panel-icon"
                    />
                  </div>
                  <h3 style={{ color: "#FFFFFF" }}>Information Barriers</h3>
                  <p>
                    Segmentation between programs, contracts and customer data.
                  </p>
                  <ul className="dark-card-list">
                    <li>
                      <img src={checkBulletRed} alt="bullet" /> Mapped to NIST
                      800-171
                    </li>
                    <li>
                      <img src={checkBulletRed} alt="bullet" /> Documented in
                      your SSP
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 7. CONTINUOUS VISIBILITY (INTEGRATED SUB-SECTION WIHOUT BREAKING THE BACKGROUND) */}
            <div className="pt-5">
              <div className="section-tag-wrapper">
                <span className="section-mini-tag dark-theme-tag">
                  <span className="fallback-red-dot"></span>LOGGING & MONITORING
                </span>
              </div>
              <h2 className="dark-section-title text-center">
                Continuous visibility across the Microsoft 365 <br /> Security
                estate.
              </h2>
              <p className="dark-section-subtitle text-center mb-5">
                Unified audit logs, Sentinel integration and retention aligned
                to federal requirements - so you can prove what happened, when
                and to which data.
              </p>

              {/* Figma Layout: 2x2 Clean Row with Bottom-Border Line Dividers */}
              <div className="row g-0 figma-monitoring-grid">
                <div className="col-md-6 grid-item border-bottom">
                  <div className="dark-list-item-with-icon">
                    <div className="dark-list-icon-wrapper">
                      <img src={pulse} alt="Unified Audit Log" />
                    </div>
                    <div>
                      <h3 style={{ color: "#FFFFFF" }}>Unified Audit Log</h3>
                      <p>
                        Tenant-wide audit enabled, exported and retained per
                        policy.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-item border-bottom">
                  <div className="dark-list-item-with-icon">
                    <div className="dark-list-icon-wrapper">
                      <img src={pulse} alt="Microsoft Sentinel" />
                    </div>
                    <div>
                      <h3 style={{ color: "#FFFFFF" }}>Microsoft Sentinel</h3>
                      <p>
                        SIEM integration with custom analytics and workbooks.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-item">
                  <div className="dark-list-item-with-icon">
                    <div className="dark-list-icon-wrapper">
                      <img src={pulse} alt="Defender XDR" />
                    </div>
                    <div>
                      <h3 style={{ color: "#FFFFFF" }}>Defender XDR</h3>
                      <p>
                        Cross-product correlation across identity, endpoint and
                        email.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 grid-item">
                  <div className="dark-list-item-with-icon">
                    <div className="dark-list-icon-wrapper">
                      <img src={pulse} alt="Long-Term Retention" />
                    </div>
                    <div>
                      <h3 style={{ color: "#FFFFFF" }}>Long-Term Retention</h3>
                      <p>
                        Log retention windows aligned to DFARS and contract
                        terms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. AZURE WORKLOADS HARDENED SECTION */}
        <section className="sec-light-section">
          <div className="custom-container">
            <div className="section-tag-wrapper1 mb-3">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>AZURE SECURITY
              </span>
            </div>
            <h2 className="section-main-heading mb-3">
              Azure Workloads Hardened for Sovereign, <br />
              Regulated Environments.
            </h2>
            {/* <p className="section-sub-heading mb-5">
                            Extending security protections to application infrastructures, databases, and microservice arrays across federal spaces.
                        </p> */}

            <p className="sec-body-text2 mt-3 mb-5">
              Spartan extends the same federal-grade discipline into Azure -
              Azure Government and Azure Commercial — covering identity,
              network, workload and data-plane security. Every control is mapped
              to NIST 800-171, FedRAMP Moderate/High baselines and CMMC 2.0
              evidence requirements.
            </p>

            <div className="row g-4">
              <div className="col-xl-4 col-md-6">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={cloudIcon}
                      alt="Sovereign Landings"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Azure Government Landing Zones</h3>
                  <p>
                    Sovereign-cloud landing zones architected to FedRAMP High
                    and DoD IL4/IL5 reference patterns.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={security}
                      alt="Zero Trust"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Defender for Cloud</h3>
                  <p>
                    CSPM and CWPP across subscriptions with regulatory
                    compliance dashboards for NIST 800-171 and CMMC.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={key}
                      alt="Key Vault Isolation"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Key Vault & HSM</h3>
                  <p>
                    Customer-managed keys, Managed HSM and BYOK for CUI
                    encryption at rest and in transit.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={purse}
                      alt="Vulnerability Scans"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Network Isolation</h3>
                  <p>
                    Hub-and-spoke topology, Private Endpoints, Azure Firewall
                    and NSG baselines enforcing zero-trust segmentation.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={envIcon3}
                      alt="Telemetry"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Storage & Database Hardening</h3>
                  <p>
                    Encryption, private access, immutable storage and SQL/Cosmos
                    auditing aligned to DFARS 7012.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-md-6">
                <div className="security-panel-card1">
                  <div className="panel-icon-box">
                    <img
                      src={pulse}
                      alt="Backup Resiliency"
                      className="panel-icon"
                    />
                  </div>
                  <h3>Sentinel & Monitor</h3>
                  <p>
                    Centralized SIEM, Azure Monitor, Log Analytics and
                    diagnostic settings producing assessor-ready evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. DOD REPORTABLE CARD SECTION */}
        <section className="sec-light-section bg-light-gray-panel border-top-gray">
          <div className="custom-container">
            <div className="section-tag-wrapper">
              <span className="section-mini-tag">
                <span className="fallback-red-dot"></span>INCIDENT RESPONSE
              </span>
            </div>
            <h2 className="section-main-heading text-center mb-3">
              Prepared, rehearsed & DoD-reportable.
            </h2>
            <p className="section-sub-heading text-center mb-5 section-sub-heading1">
              When an incident occurs, Spartan provides the playbooks, the
              technical response and the regulatory reporting required under
              DFARS 252.204-7012 — including 72-hour DoD Cyber Crime Center
              notification.
            </p>

            <div className="row g-4 text-start">
              <div className="col-lg-4">
                <div className="security-panel-card white-bg-card">
                  <div className="panel-icon-box">
                    <img
                      src={cloudIcon}
                      alt="72-Hour Timelines"
                      className="panel-icon"
                    />
                  </div>
                  <h3>IR Playbooks</h3>
                  <p>
                    Tenant-specific runbooks for the most common attack
                    patterns.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="security-panel-card white-bg-card">
                  <div className="panel-icon-box">
                    <img
                      src={purse}
                      alt="Forensic Integrity"
                      className="panel-icon"
                    />
                  </div>
                  <h3>24/7 Response</h3>
                  <p>
                    Senior responders engaged from triage through containment.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="security-panel-card white-bg-card">
                  <div className="panel-icon-box">
                    <img
                      src={email}
                      alt="Response Readiness"
                      className="panel-icon"
                    />
                  </div>
                  <h3>DoD Reporting</h3>
                  <p>
                    DIBNet submission, evidence packaging and post-incident
                    review.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =================faq================ */}

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
              {securityScreenFaqData?.microsoft_faq_content?.map(
                (item, index) => {
                  const isOpen = activeFaqId === item.id;
                  return (
                    <div
                      key={item?.id}
                      className={`faq-accordion-row ${
                        isOpen ? "is-expanded" : ""
                      }`}
                      onClick={() => toggleFaq(item?.id)}
                    >
                      <div className="faq-row-trigger-line">
                        <h3 className="faq-question-text">{item?.question}</h3>
                        <div
                          className={`faq-toggle-circle-indicator ${
                            isOpen ? "active-minus" : "inactive-plus"
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
                }
              )}
            </div>
          </div>
        </section>

        {/* 10. BOTTOM BANNER METRIC */}
        <section className="security-cta-section2">
          <div className="custom-container">
            <div className="security-cta-banner">
              <span className="section-mini-tag dark-theme-tag mb-3">
                <span className="fallback-red-dot"></span>GET STARTED
              </span>
              <h2 className="cta-banner-title">
                Audit your Microsoft 365 security <br /> tenant in 2 weeks.
              </h2>
              <p className="cta-banner-desc">
                A focused tenant review with a senior architect - gap report and
                remediation plan delivered.{" "}
              </p>
              <div className="cta-buttons-group">
                <Link
                  to="/contact-us"
                  className="cta-btn-white"
                  style={{ textDecoration: "none" }}
                >
                  Schedule M365 Security Review{" "}
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

export default SecurityScreen;
