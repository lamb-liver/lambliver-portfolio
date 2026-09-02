import type { ProjectInstallGuide as Guide } from "@/lib/projects";

type ProjectInstallGuideProps = {
  guide: Guide;
};

export function ProjectInstallGuide({ guide }: ProjectInstallGuideProps) {
  return (
    <div className="space-y-5">
      <p className="type-body text-foreground/80">{guide.lead}</p>
      <ol className="list-decimal space-y-3 pl-5 leading-relaxed text-foreground/80 marker:text-accent">
        {guide.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <dl className="space-y-2 font-mono text-xs text-foreground/70">
        {guide.fileName ? (
          <div>
            <dt className="text-muted">檔名</dt>
            <dd className="mt-0.5 break-all">{guide.fileName}</dd>
          </div>
        ) : null}
        {guide.sha256 ? (
          <div>
            <dt className="text-muted">APK SHA-256</dt>
            <dd className="mt-0.5 break-all">{guide.sha256}</dd>
          </div>
        ) : null}
        {guide.certSha256 ? (
          <div>
            <dt className="text-muted">簽章憑證 SHA-256</dt>
            <dd className="mt-0.5 break-all">{guide.certSha256}</dd>
          </div>
        ) : null}
      </dl>
      {guide.playTestingNote ? (
        <p className="type-body text-foreground/60">{guide.playTestingNote}</p>
      ) : null}
    </div>
  );
}
