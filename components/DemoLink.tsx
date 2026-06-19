import {
  getApkDownloadName,
  getDemoLinkLabel,
  isApkDemoUrl,
} from "@/lib/utils";

type DemoLinkProps = {
  href: string;
  className?: string;
};

export function DemoLink({ href, className }: DemoLinkProps) {
  const isApk = isApkDemoUrl(href);

  if (isApk) {
    return (
      <a href={href} download={getApkDownloadName(href)} className={className}>
        {getDemoLinkLabel(href)}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {getDemoLinkLabel(href)}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-3 w-3 shrink-0 transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        aria-hidden
      >
        <path d="M4.5 2.5h5v5M7 5 2.5 9.5" strokeLinecap="square" />
      </svg>
    </a>
  );
}
