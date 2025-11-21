import Chip from "./Chip";

interface SkillCardProps {
  title: string;
  skills: string[];
}
export default function SkillCard({ title, skills }: SkillCardProps) {
  return (
    <div
      className="p-6 border rounded-lg border-(--color-accent-primary) 
    bg-(--color-card-bg)"
    >
      <h4 className="text-xl font-serif-custom mb-4 font-semibold">{title}</h4>
      <ul className="flex flex-wrap gap-x-2 gap-y-5 mt-5 mb-2">
        {skills.map((skill) => (
          <li className="list-none text-sm " key={skill}>
            <Chip>{skill}</Chip>
          </li>
        ))}
      </ul>
    </div>
  );
}
