import {ISchool} from '../lib/education';
import {ClassworkPill} from './ClassworkPill';

interface Props extends ISchool {}

export const EducationItem: React.FC<Props> = ({name, years, description, classwork}: Props) => {
  return (
    <>
      <div className="font-mono text-center">
        <div className="font-bold text-2xl">{name}</div>
        <div className="text-lg">{description}</div>
      </div>
      <div className="font-mono text-xl align-middle flex items-center justify-center">
        <div className="">
          {years}
        </div>
      </div>
      <div className="md:col-span-2 font-mono gap-x-8 gap-y-2 flex items-center justify-center flex-wrap">
        {classwork.map((c) => <ClassworkPill key={c} name={c} />)}
      </div>
    </>
  );
};
