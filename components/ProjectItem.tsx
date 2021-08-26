import {GithubIcon} from './icons/GithubIcon';
import {SkillPill} from './SkillPill';
import {IProject} from '../lib/projects';
import {LinkIcon} from './icons/LinkIcon';

interface Props {
  project: IProject;
}

export const ProjectItem: React.FC<Props> = ({project}: Props) => {
  return (
    <>
      <div className="col-span-1 flex flex-col items-center md:items-end">
        <div className="text-3xl font-mono font-bold flex-grow mb-4 truncate">{project.title}</div>
        <div className="flex space-x-4">
          {project.url && <LinkIcon styles="w-12 fill-current text-gray-100 hover:text-green-300" href={project.url} />}
          <GithubIcon styles="w-12 fill-current text-gray-100 hover:text-green-300" href={project.github} />
        </div>
      </div>
      <div className="col-span-2 flex flex-col items-center md:items-start">
        <div className="font-mono flex-grow mb-4 text-center md:text-left">{project.description}</div>
        <div className="font-mono gap-x-8 gap-y-2 flex flex-wrap justify-center md:justify-start">
          {project.skills.map((skill) => <SkillPill key={skill} name={skill} />)}
        </div>
      </div>
    </>
  );
};
