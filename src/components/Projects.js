import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import '../styles/sections.css';

const projectsData = [
    {
        id: 0,
        title: "CoLearn",
        period: "Dec 2025 - Apr 2026",
        description: "CoLearn is a collaborative learning system built as a central space for students to study together more effectively. It brings real-time chat, file sharing, collaborative coding and AI study tools into one workspace so teams can focus on learning without having to jump between different apps. Built with React (Vite) and Lucide React. Backend uses Node.js, Express and Socket.IO. Supabase handles auth/storage. AI via Mistral AI & Groq. Deployed on Render & GitHub Pages.",
        skills: ["React.js", "Node.js", "Express", "Supabase", "Socket.io", "PostgreSQL", "Full Stack Development"],
        link: "https://nikhil-kthota.github.io/collaborative-learning/#/",
        repo: "https://github.com/nikhil-kthota/collaborative-learning"
    },
    {
        id: 1,
        title: "StudyBase",
        period: "Oct 2025",
        description: "A comprehensive study management platform built for school students to revise from their coursebooks using AI-powered features. Developed to help students revise aggressively using LLMs while ensuring a high-quality responsive web experience.",
        skills: ["LLMs", "AI Integration", "Supabase", "React.js", "JavaScript", "Tailwind CSS"],
        link: "https://studybase-mu.vercel.app/",
        repo: "https://github.com/nikhil-kthota/StudyBase"
    },
    {
        id: 2,
        title: "ArcRoom",
        period: "June 2025 - July 2025",
        description: "ArcRoom is a modern, secure file storage and sharing platform where users can create private rooms with custom access controls. With unique room keys, PIN protection, and built-in authentication, it ensures safe and seamless file management. Users can upload, preview, and download files through a clean, responsive interface that works across all devices. Featuring real-time updates and swift access, ArcRoom serves as a reliable file storage system and an intuitive interface for fast, efficient file transfer.",
        skills: ["HTML", "CSS", "JavaScript", "Vue.js", "TypeScript", "PLSQL", "Databases", "Postgres", "Relational Databases"],
        link: "https://nikhil-kthota.github.io/arcroom/",
        repo: "https://github.com/nikhil-kthota/arcroom"
    },
    {
        id: 3,
        title: "Real Time Phishing Detection System",
        period: "Jan 2025 - June 2025",
        description: "The Advanced Phishing URL Detector is a modern web application that leverages Machine Learning to detect phishing attacks with high accuracy. Using open-source datasets to train its model, it performs real-time URL analysis through a responsive interface and a reliable backend. The system provides detailed results, supports integration through an API endpoint, and maintains comprehensive logs for monitoring.",
        skills: ["Machine Learning", "Python", "React.js"],
        repo: "https://github.com/nikhil-kthota/phising-detection",
        link: "https://github.com/nikhil-kthota/phising-detection"
    },
    {
        id: 4,
        title: "Smart Traffic Management System",
        period: "Jan 2024 - June 2024",
        description: "A smart traffic control system that uses surveillance cameras, Computer Vision, and a trained LLM to analyze real-time traffic to optimize flow. This “Smart” Traffic Control system uses computer vision to determine traffic density and efficiently control traffic signals based on output from a Machine Learning Model (TensorFlow). By adapting signal timings dynamically, it reduces congestion, improves traffic movement, and enhances overall road efficiency.",
        skills: ["Machine Learning", "Computer Vision", "TensorFlow", "Large Language Model"],
        repo: "https://github.com/nikhil-kthota/Traffic-management",
        link: "https://github.com/nikhil-kthota/Traffic-management"
    }
];

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 900);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const activeProject = projectsData[activeIndex];

    return (
        <section className="section" id="projects" ref={ref} style={{ minHeight: 'auto' }}>
            <motion.div
                initial={{ clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
                animate={isInView ? { clipPath: 'inset(0 0 0% 0)', opacity: 1 } : { clipPath: 'inset(0 0 100% 0)', opacity: 0 }}
                transition={{ duration: 1, ease: [0.17, 0.55, 0.55, 1] }}
                style={{ width: '100%' }}
            >
                <motion.h2
                    className="section-title"
                    animate={isInView ? { scale: 1 } : { scale: 0.9 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    PROJECTS
                </motion.h2>

                {!isMobile ? (
                    <div className="content-container" style={{ display: 'grid', gridTemplateColumns: '1fr 1.8fr', gap: '4rem', alignItems: 'flex-start', minHeight: '500px' }}>

                        <div style={{ position: 'relative', paddingLeft: '2rem', borderLeft: '1px solid rgba(255,255,255,0.1)', marginLeft: '1rem', paddingBottom: '2rem' }}>
                            {projectsData.map((project, index) => (
                                <motion.div
                                    key={project.id}
                                    onMouseEnter={() => setActiveIndex(index)}
                                    initial={false}
                                    animate={{ opacity: activeIndex === index ? 1 : 0.5, x: activeIndex === index ? 15 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card"
                                    style={{
                                        marginBottom: '2rem',
                                        cursor: 'pointer',
                                        position: 'relative',
                                        marginRight: '1rem',
                                        opacity: activeIndex === index ? 1 : 0.5
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            scale: activeIndex === index ? 1.3 : 1,
                                            backgroundColor: activeIndex === index ? 'var(--color-text-main)' : '#000',
                                            borderColor: activeIndex === index ? 'var(--color-text-main)' : 'rgba(255,255,255,0.3)'
                                        }}
                                        style={{
                                            position: 'absolute',
                                            left: '-2rem',
                                            top: '50%',
                                            marginTop: '-5px',
                                            width: '11px',
                                            height: '11px',
                                            borderRadius: '50%',
                                            border: '2px solid',
                                            zIndex: 2,
                                            boxShadow: activeIndex === index ? '0 0 10px rgba(229, 226, 222, 0.5)' : 'none'
                                        }}
                                    />

                                    <span style={{
                                        display: 'block',
                                        fontSize: '0.8rem',
                                        fontFamily: 'monospace',
                                        color: activeIndex === index ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                                        marginBottom: '0.3rem',
                                        letterSpacing: '0.05em'
                                    }}>
                                        {project.period}
                                    </span>

                                    <h3 style={{
                                        margin: 0,
                                        color: activeIndex === index ? 'var(--color-text-main)' : 'var(--color-text-muted)',
                                        fontSize: '1.2rem',
                                        fontWeight: 700,
                                        transition: 'color 0.3s ease'
                                    }}>
                                        {project.title}
                                    </h3>
                                </motion.div>
                            ))}
                        </div>

                        <div style={{ height: 'fit-content', minHeight: '400px', position: 'sticky', top: '20vh' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeProject.id}
                                    initial={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                                    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, scale: 0.95, filter: 'blur(5px)' }}
                                    transition={{ duration: 0.3 }}
                                    className="glass-card"
                                    style={{
                                        minHeight: '720px',
                                        height: 'auto',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between',
                                        position: 'relative'
                                    }}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '2rem' }}>
                                        <h3 style={{ fontSize: '1.8rem', color: 'var(--color-text-main)', margin: 0, lineHeight: 1.2 }}>
                                            {activeProject.title}
                                        </h3>
                                        {activeProject.status === "working" ? (
                                            <div style={{
                                                padding: '8px 12px',
                                                background: 'rgba(255, 255, 255, 0.1)',
                                                border: '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '0',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                color: 'var(--color-text-main)',
                                                whiteSpace: 'nowrap',
                                                letterSpacing: '0.5px',
                                                textTransform: 'uppercase'
                                            }}>
                                                Currently Working
                                            </div>
                                        ) : (
                                            <div style={{ display: 'flex', gap: '10px' }}>
                                                {activeProject.repo && (
                                                    <a
                                                        href={activeProject.repo}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        title="View Code on GitHub"
                                                        style={{
                                                            color: 'var(--color-text-main)',
                                                            opacity: 0.8,
                                                            padding: '10px',
                                                            background: 'rgba(255,255,255,0.05)',
                                                            borderRadius: '50%'
                                                        }}
                                                    >
                                                        <Github size={24} />
                                                    </a>
                                                )}
                                                <a
                                                    href={activeProject.link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    title="Click to open in new tab"
                                                    style={{
                                                        color: 'var(--color-text-main)',
                                                        opacity: 0.8,
                                                        padding: '10px',
                                                        background: 'rgba(255,255,255,0.05)',
                                                        borderRadius: '50%'
                                                    }}
                                                >
                                                    <ExternalLink size={24} />
                                                </a>
                                            </div>
                                        )}
                                    </div>

                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '2rem' }}>
                                        {activeProject.description}
                                    </p>

                                    <div style={{ marginTop: 'auto' }}>
                                        <div style={{ marginBottom: '1rem', textTransform: 'uppercase', fontSize: '0.8rem', color: '#666', letterSpacing: '0.1em' }}>Technologies</div>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                            {activeProject.skills.map((skill, i) => (
                                                <span key={i} style={{
                                                    border: '1px solid rgba(255,255,255,0.15)',
                                                    borderRadius: '4px',
                                                    padding: '6px 12px',
                                                    fontSize: '0.85rem',
                                                    color: 'var(--color-text-main)',
                                                    background: 'rgba(0,0,0,0.2)'
                                                }}>
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    <div style={{
                                        position: 'absolute',
                                        bottom: '20px',
                                        right: '25px',
                                        fontSize: '2.5rem',
                                        fontWeight: 900,
                                        opacity: 0.1,
                                        pointerEvents: 'none',
                                        fontFamily: 'monospace'
                                    }}>
                                        {activeProject.period.split(' ').pop()}
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                ) : (
                    <div className="content-container" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {projectsData.map((project, index) => (
                            <motion.div
                                key={index}
                                className="glass-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{ padding: '2rem', minHeight: '300px', display: 'flex', flexDirection: 'column' }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-main)', margin: 0 }}>{project.title}</h3>
                                    {project.status === "working" ? (
                                        <div style={{
                                            padding: '6px 10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            border: '1px solid rgba(255, 255, 255, 0.2)',
                                            borderRadius: '0',
                                            fontSize: '0.65rem',
                                            fontWeight: '600',
                                            color: 'var(--color-text-main)',
                                            whiteSpace: 'nowrap',
                                            textTransform: 'uppercase'
                                        }}>
                                            Actively Working
                                        </div>
                                    ) : (
                                        <div style={{ display: 'flex', gap: '8px' }}>
                                            {project.repo && (
                                                <a href={project.repo} target="_blank" rel="noopener noreferrer" title="View Code" style={{ color: 'var(--color-text-main)', opacity: 0.7 }}>
                                                    <Github size={20} />
                                                </a>
                                            )}
                                            <a href={project.link} target="_blank" rel="noopener noreferrer" title="Click to open in new tab" style={{ color: 'var(--color-text-main)', opacity: 0.7 }}>
                                                <ExternalLink size={20} />
                                            </a>
                                        </div>
                                    )}
                                </div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', fontFamily: 'monospace', marginBottom: '1rem', display: 'block' }}>{project.period}</span>
                                <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>{project.description}</p>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {project.skills.map((skill, i) => (
                                        <span key={i} style={{ border: '1px solid rgba(255,255,255,0.1)', borderRadius: '15px', padding: '4px 10px', fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{skill}</span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                )}
            </motion.div>
        </section>
    );
};

export default Projects;
