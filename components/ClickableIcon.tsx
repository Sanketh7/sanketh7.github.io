interface Props {
  children: React.ReactNode;
  defaultColor: string;
  hoverColor: string;
}

export const ClickableIcon: React.FC<Props> = ({children, defaultColor, hoverColor}: Props) => {
  return <div className={`${defaultColor} hover:${hoverColor} inline-block`}>{children}</div>;
};
