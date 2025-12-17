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
    description: `Fullstack project built in React with a Node.js and Express 
    backend. Park data is displayed from the National Parks Service API and 
    Weather API. Responsive styling is done with Tailwind CSS. Users can create 
    an account and log in. The backend connects to a serverless PostgreSQL 
    database.`,
    image: "/park-explorer-desktop.png",
    url: "https://parkexplorer.netlify.app/",
    repo: "https://github.com/Hannahelenas/nps-park-explorer-fullstack",
  },
  {
    id: "2",
    title: "Hippo Safaris",
    description: `Fullstack project written in TypeScript and built in React. 
    The client communciates with a local SQLite database using Node.js and 
    Express. 
    Styling features are made using Material Ui and Styled 
    Components. Images from Unsplash.`,
    image: "/hippo-safaris-desktop.png",
    url: "https://hippo-safaris.onrender.com/",
    repo: "https://github.com/Hannahelenas/hippo.safaris",
  },
];
