export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  repo: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Park Exporer",
    description: `Project built in React, park data is displayed from the 
    National Parks Service Api and weather Api. Responsive styling made with 
    Tailwind CSS.`,
    image: "/park-explorer-desktop.png",
    url: "https://parkexplorer.netlify.app/",
    repo: "https://github.com/Hannahelenas/nps-park-explorer",
  },
  {
    id: "2",
    title: "Hippo Safaris",
    description: `Fullstack project written in TypeScript and built in React. 
    The client communciates with a local SQLite database using Node.js and 
    Express. 
    Styning features are made using Material Ui and Styled 
    Components. Images from Unsplash.`,
    image: "/hippo-safaris-desktop.png",
    url: "https://hippo-safaris.onrender.com/",
    repo: "https://github.com/Hannahelenas/hippo.safaris",
  },
];
