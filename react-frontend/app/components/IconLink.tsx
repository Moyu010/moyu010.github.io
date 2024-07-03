interface IconLinkProps {
  link: string;
  icon: string;
  text: string;
}

export default function IconLink({ link, icon, text }: IconLinkProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <img src={icon} alt={text} className="icon-link" />
    </a>
  );
}