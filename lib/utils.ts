export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function isApkDemoUrl(url: string): boolean {
  const path = url.startsWith("/")
    ? url
    : (() => {
        try {
          return new URL(url).pathname;
        } catch {
          return url;
        }
      })();
  return path.toLowerCase().endsWith(".apk");
}

export function getDemoLinkLabel(url: string): string {
  return isApkDemoUrl(url) ? "下載 App" : "打開網站";
}

export function getApkDownloadName(url: string): string {
  const path = url.startsWith("/") ? url : new URL(url).pathname;
  const name = path.split("/").pop();
  return name && name.toLowerCase().endsWith(".apk") ? name : "app.apk";
}
