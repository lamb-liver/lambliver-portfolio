import { OpenIcon } from "./OpenIcon";
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
      <OpenIcon className="transition-transform duration-200 ease-out group-hover:translate-x-[2px] group-hover:-translate-y-[2px]" />
    </a>
  );
}
