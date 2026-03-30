import { meta, shopify, kiet, akg } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    python,
    django,
    fastapi
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React.js",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React Native",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "Flutter",
        type: "Frontend",
    },
    {
        imageUrl: motion,
        name: "Agentic AI",
        type: "AI Developer",
    },
    {
        imageUrl: mongodb,
        name: "MERN Stack",
        type: "Database",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    }
];

export const experiences = [
    {
        title: "3rd Runner Up",
        company_name: "KIET Hackathon",
        icon: kiet,
        iconBg: "#e6f0ff",
        date: "Recent",
        points: [
            "Participated in the KIET Hackathon and secured the 3rd Runner Up position.",
            "Built AgriSense AI, an AI assistant for farmers to help with agriculture-related tasks.",
            "Integrated complex AI capabilities to provide real-world impact for the agricultural sector.",
            "Utilized React for the frontend and FastAPI for a robust backend architecture.",
        ],
    },
    {
        title: "Full Stack Developer",
        company_name: "Personal Projects & Freelance",
        icon: akg,
        iconBg: "#dee2e6",
        date: "Present",
        points: [
            "Developed Boardly, a real-time collaborative whiteboard using the MERN Stack.",
            "Created QuickCare AI, a RAG-based AI chatbot for querying and interacting with medical reports.",
            "Built Bookly, a high-performance book management system leveraging a FastAPI backend.",
            "Specialized in Agentic AI solutions and building cross-platform apps using React Native & Flutter.",
        ],
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Krishna-devk',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/krishna-agarwal-580ab425b',
    },
    {
        name: 'Phone',
        iconUrl: contact,
        link: 'tel:+919412354539',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'AgriSense AI',
        description: 'An AI assistant designed for farmers to aid in agriculture-related tasks. Built with React and FastAPI, this solution tackles real-world problems and won 3rd Runner Up at the KIET Hackathon.',
        link: '#',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Boardly',
        description: 'A real-time collaborative whiteboard application built with the MERN Stack, enabling multiple users to draw and interact simultaneously.',
        link: 'https://boardly-72mj.onrender.com',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'QuickCare AI',
        description: 'A RAG-based AI chatbot that lets users interact intelligently with their medical reports, providing instant, context-aware answers.',
        link: 'https://medical-report-analysing-agent.onrender.com',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Bookly',
        description: 'A high-performance book management platform built utilizing a FastAPI backend, ensuring swift operations and efficient data handling.',
        link: '#',
    }
];