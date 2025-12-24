import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink, Calendar } from 'lucide-react';
import '../styles/sections.css';
import '../styles/certifications.css';



const certificationsData = [
    {
        id: 1,
        title: "Machine Learning Specialization",
        issuer: "Stanford University, DeepLearning.AI, Coursera",
        date: "Apr 2025",
        link: "https://coursera.org/verify/specialization/QGKMX2OE7QZW",
        image: process.env.PUBLIC_URL + "/assets/certifications/machine-learning.png"
    },
    {
        id: 2,
        title: "Prompt Engineering Basics",
        issuer: "IBM, Coursera",
        date: "Dec 2024",
        link: "https://www.coursera.org/account/accomplishments/verify/W2OABX8BRF4L",
        image: process.env.PUBLIC_URL + "/assets/certifications/prompt-engineering.png"
    },
    {
        id: 3,
        title: "Software Testing",
        issuer: "IIIT Bangalore, NPTEL",
        date: "Nov 2025",
        link: "https://archive.nptel.ac.in/content/noc/NOC25/SEM2/Ecertificates/106/noc25-cs113/Course/NPTEL25CS113S65820327210266831.pdf",
        image: process.env.PUBLIC_URL + "/assets/certifications/software-testing.png"
    },
    {
        id: 4,
        title: "Data Analytics Essentials",
        issuer: "Cisco",
        date: "Dec 2024",
        link: "https://www.credly.com/go/m87dBwq3",
        image: process.env.PUBLIC_URL + "/assets/certifications/data-analytics.png"
    }
];

const Certifications = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeCard, setActiveCard] = React.useState(null);

    const handleCardClick = (id) => {
        if (activeCard === id) {
            setActiveCard(null);
        } else {
            setActiveCard(id);
        }
    };

    return (
        <section className="section" id="certifications" ref={ref} style={{ minHeight: 'auto' }}>
            <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: -20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
            >
                CERTIFICATIONS
            </motion.h2>

            <div className="content-container cert-grid">
                {certificationsData.map((cert, index) => (
                    <motion.div
                        key={cert.id}
                        className={`cert-card glass-card ${activeCard === cert.id ? 'active' : ''}`}
                        initial={{ opacity: 0, y: 50 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        onClick={() => handleCardClick(cert.id)}
                    >
                        <div
                            className="cert-reveal"
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open(cert.link, '_blank');
                            }}
                            style={{ cursor: 'pointer' }}
                            title="Click to open in new tab"
                        >
                            <div className="cert-image-container">
                                <img src={cert.image} alt={cert.title} className="cert-image" />
                                <div className="cert-overlay">
                                    <button className="verify-btn">
                                        VIEW CREDENTIAL
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="cert-header">
                            <h3 className="cert-title">{cert.title}</h3>
                            <div className="cert-meta">
                                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <Calendar size={14} />
                                    {cert.date}
                                </span>
                                <span
                                    className="cert-verify-label"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(cert.link, '_blank');
                                    }}
                                    style={{ cursor: 'pointer', zIndex: 10 }}
                                    title="Click to open in new tab"
                                >
                                    VERIFY <ExternalLink size={12} style={{ display: 'inline', marginLeft: '4px' }} />
                                </span>
                            </div>
                            <div style={{ marginTop: '0.5rem', fontSize: '0.85rem', color: '#666' }}>
                                {cert.issuer}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Certifications;
