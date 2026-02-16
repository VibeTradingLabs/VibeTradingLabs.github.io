interface ExternalLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  newTab?: boolean;
}

export default function ExternalLink({
  href,
  children,
  className = "",
  newTab = true,
}: ExternalLinkProps) {
  return (
    <a
      href={href}
      className={className}
      {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}
