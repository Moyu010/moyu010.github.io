interface IconLinkProps {
  destUrl: string;
  iconName: string;
  altText: string;
}

export default function IconLink({ destUrl, iconName, altText}: IconLinkProps) {
  return (
    <a
      href={destUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2"
    >
      <img src={`/icon/${iconName}`} alt={altText} className="icon-link" />
    </a>
  );
}