interface Props {
  children: React.ReactNode;
}

export const ProjectList: React.FC<Props> = ({children}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-12 gap-y-16 text-gray-100">
      {children}
    </div>
  );
};
