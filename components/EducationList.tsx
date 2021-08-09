interface Props {
  children: React.ReactNode;
}

export const EducationList: React.FC<Props> = ({children}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 text-gray-100 gap-8">
      {children}
    </div>
  );
};
