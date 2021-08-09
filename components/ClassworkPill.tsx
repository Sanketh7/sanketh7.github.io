interface Props {
  name: string;
}

export const ClassworkPill: React.FC<Props> = ({name}: Props) => {
  return (
    <div className="text-lg border-2 p-2 rounded-lg text-center shadow-md hover:shadow-2xl hover:bg-green-300 hover:text-gray-700">{name}</div>
  );
};
