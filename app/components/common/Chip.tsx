import { ReactNode } from "react";

interface ChipProps {
  children: ReactNode;
}

export default function Chip({ children }: ChipProps) {
  return (
    <span className="px-3 py-1.5 bg-(--color-chip) rounded-full">
      {children}
    </span>
  );
}
