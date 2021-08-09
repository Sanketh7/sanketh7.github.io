interface Props {
  children: React.ReactNode;
  defaultColor: string;
  hoverColor: string;
  href?: string;
}

export const ClickableIcon: React.FC<Props> = ({children, defaultColor, hoverColor, href}: Props) => {
  return (
    <a href={href} className={`${defaultColor} hover:${hoverColor} inline-block`}>{children}</a>
  );
};
