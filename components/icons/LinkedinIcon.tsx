interface Props {
  styles: string;
  href?: string;
}

export const LinkedinIcon: React.FC<Props> = ({styles, href}: Props) => {
  return (
    <a href={href}>
      <svg className={styles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 510 510"><defs/><path d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zM153 433.5H76.5V204H153v229.5zm-38.25-272.85c-25.5 0-45.9-20.4-45.9-45.9s20.4-45.9 45.9-45.9 45.9 20.4 45.9 45.9-20.4 45.9-45.9 45.9zM433.5 433.5H357V298.35c0-20.399-17.85-38.25-38.25-38.25s-38.25 17.851-38.25 38.25V433.5H204V204h76.5v30.6c12.75-20.4 40.8-35.7 63.75-35.7 48.45 0 89.25 40.8 89.25 89.25V433.5z"/></svg>
    </a>
  );
};
