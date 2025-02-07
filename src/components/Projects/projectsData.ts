export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=450",
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com"
  },
  {
    title: "Netflix Clone",
    description: "A Netflix clone built with React and Redux, featuring state-managed authentication, movie browsing, and real-time data fetching for a smooth user experience",
    image: "https://files.tecnoblog.net/wp-content/uploads/2021/12/melhor-streaming-2021-netflix-1-1060x596.jpg",
    technologies: ["React.js","React.redux","Vite.js","API"],
    liveUrl: "https://vigensh-netflix-clone.vercel.app/",
    githubUrl: "https://github.com/thevignes/Netflix-clone"
  },
  {
    title: "Olx Clone",
    description: "An OLX clone built with React and Redux, enabling users to post, browse, and manage classified ads with real-time updates and secure authentication",
    image: "https://www.shutterstock.com/image-photo/kharkiv-ukraine-november-122020-shopping-600nw-2284165941.jpg",
    technologies: ["React", " React.redux", "API"],
    liveUrl: "https://olx-clone-va8w.vercel.app/",
    githubUrl: "https://github.com/thevignes/Olx-clone/tree/main/Olx-clone"
  }
];