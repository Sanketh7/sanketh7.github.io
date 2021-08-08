interface Props {
  name: string
}

export const SkillPill: React.FC<Props> = ({name}: Props) => {
  return (
    <div className="text-center font-mono font-bold border-2 rounded-full px-4 py-2 hover:bg-green-300 hover:text-gray-700">
      {name}
    </div>
  );
};
