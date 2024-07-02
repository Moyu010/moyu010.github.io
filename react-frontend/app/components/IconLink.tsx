export default function IconLink(link: string, icon: string, text: string) {
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