import {GithubIcon} from './icons/GithubIcon';
import {SkillPill} from './SkillPill';
import {IProject} from '../lib/projects';

interface Props extends IProject {}

export const ProjectItem: React.FC<Props> = ({title, description, skills, github}: Props) => {
  return (
    <>
      <div className="col-span-1 flex flex-col items-center md:items-end">
        <div className="text-3xl font-mono font-bold flex-grow mb-4 truncate">{title}</div>
        <GithubIcon styles="w-12 fill-current text-gray-100 hover:text-green-300" href={github} />
      </div>
      <div className="col-span-2 flex flex-col items-center md:items-start">
        <div className="font-mono flex-grow mb-4 text-center md:text-left">{description}</div>
        <div className="font-mono gap-x-8 gap-y-2 flex flex-wrap justify-center md:justify-start">
          {skills.map((skill) => <SkillPill key={skill} name={skill} />)}
        </div>
      </div>
    </>
  );
};
