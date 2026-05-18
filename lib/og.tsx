import { ImageResponse } from "next/og";

const size = { width: 1200, height: 630 };

async function loadGoogleFont(family: string, weight: number) {
  const url = `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&display=swap`;
  const css = await fetch(url).then((res) => res.text());
  const match = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/);
  if (!match) throw new Error(`Failed to load font: ${family}`);
  const fontRes = await fetch(match[1]);
  return fontRes.arrayBuffer();
}

export async function createOgImage({
  title,
  subtitle,
  badge,
}: {
  title: string;
  subtitle: string;
  badge?: string;
}) {
  const [firaCode, notoSansTC] = await Promise.all([
    loadGoogleFont("Fira+Code", 500),
    loadGoogleFont("Noto+Sans+TC", 400),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#000000",
        }}
      >
        <div
          style={{
            width: 6,
            height: "100%",
            backgroundColor: "#c0ff6b",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px",
            flex: 1,
            position: "relative",
          }}
        >
          {badge ? (
            <div
              style={{
                fontSize: 22,
                color: "#c0ff6b",
                marginBottom: 16,
                fontFamily: "Fira Code",
              }}
            >
              {badge}
            </div>
          ) : null}
          <div
            style={{
              fontSize: 56,
              fontWeight: 500,
              color: "#d5d5d5",
              lineHeight: 1.2,
              fontFamily: "Fira Code",
              marginBottom: 20,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#656565",
              lineHeight: 1.4,
              maxWidth: 900,
              fontFamily: "Noto Sans TC",
            }}
          >
            {subtitle}
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 48,
              right: 0,
              fontSize: 24,
              color: "#656565",
              fontFamily: "Fira Code",
            }}
          >
            lambliver.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fira Code", data: firaCode, style: "normal", weight: 500 },
        { name: "Noto Sans TC", data: notoSansTC, style: "normal", weight: 400 },
      ],
    },
  );
}
