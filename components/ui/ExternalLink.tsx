type ExternalLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target" | "rel"
> & {
  newTab?: boolean;
};

export default function ExternalLink({
  children,
  className = "",
  newTab = true,
  ...rest
}: ExternalLinkProps) {
  return (
    <a
      className={className}
      {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}
      {...rest}
    >
      {children}
    </a>
  );
}
