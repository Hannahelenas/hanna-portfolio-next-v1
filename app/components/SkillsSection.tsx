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
      <section className="max-w-5xl mx-auto py-12">
        <h2
          className="font-display-custom text-4xl lg:text-5xl font-bold 
          leading-tight mb-4 
        mt-10 text-center"
        >
          Skills
        </h2>
        <p className="font-serif-custom text-lg text-center mb-12">
          Technologies and tools i work with
        </p>
        <div
          className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-10 px-10 
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
