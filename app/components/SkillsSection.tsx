import SkillCard from "./common/SkillCard";

const skillsData = [
  {
    title: "Languages",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Libraries & Frameworks",
    items: [
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Material UI",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Tools & Systems",
    items: ["Git", "Bitbucket", "VS Code", "Android Studio", "Xcode", "Figma"],
  },
];

export default function SkillsSection() {
  return (
    <div className="bg-(--color-bg-secondary) w-full">
      <section className="max-w-5xl mx-auto py-15">
        <h2
          className="text-4xl lg:text-5xl text-center mb-10 font-serif-custom 
          tracking-tight font-semibold text-(--color-text-secondary)"
        >
          Skills
        </h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-10 
        xl:px-0"
        >
          {skillsData.map((category) => (
            <SkillCard
              key={category.title}
              title={category.title}
              skills={category.items}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
