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
    title: "Hippo Safaris",
    description: `Fullstack project written in TypeScript. Built in React, the client 
    communciates with a local
    SQLite database using Node.js and Express. Styning features are made using Material Ui and Styled 
    Components.
    The user can view information about safari packages and buy tickets.`,
    image: "/hippo-safaris.png",
    url: "https://hippo-safaris.onrender.com/",
    repo: "https://github.com/Hannahelenas/hippo.safaris",
  },
  {
    id: "2",
    title: "Park Exporer",
    description: `Project built in React, park data is used from the National Parks 
      Service Api. Styling made with Tailwind CSS.`,
    image: "/park-explorer.png",
    url: "https://parkexplorer.netlify.app/",
    repo: "https://github.com/Hannahelenas/nps-park-explorer",
  },
];
