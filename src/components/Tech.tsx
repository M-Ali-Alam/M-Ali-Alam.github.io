import { FC } from "react";
import { BallCanvas } from "./canvas";
import { technologies } from "../constants";

interface TechDataType {
  name: string;
  icon: string;
}

const Tech: FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((tech: TechDataType) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default Tech;
