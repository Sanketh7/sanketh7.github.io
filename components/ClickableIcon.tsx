interface Props {
  children: React.ReactNode;
  defaultColor: string;
  hoverColor: string;
  href?: string;
}

export const ClickableIcon: React.FC<Props> = ({children, defaultColor, hoverColor, href}: Props) => {
  return (
    <a href={href}>
      <div className={`${defaultColor} hover:${hoverColor} inline-block`}>
        {children}
      </div>
    </a>
  );
};
