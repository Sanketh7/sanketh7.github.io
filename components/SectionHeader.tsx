interface Props {
  title: string;
}
export const SectionHeader: React.FC<Props> = ({title}: Props) => {
  return (
    <div className="text-gray-100 text-5xl text-center font-mono font-bold mb-16">{title}</div>
  );
};
