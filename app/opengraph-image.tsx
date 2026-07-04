import { ImageResponse } from "next/og";

export const alt = "MenuGallery — Photograph a menu, see the dishes.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#F4F4F2",
          padding: "0 100px",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 64 64">
          <rect width="64" height="64" rx="14" fill="#F09A4B" />
          <g
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 17L9 9L17 9" />
            <path d="M55 17L55 9L47 9" />
            <path d="M9 47L9 55L17 55" />
            <path d="M55 47L55 55L47 55" />
          </g>
          <g fill="#FFFFFF">
            <rect x="20.2" y="17" width="1.8" height="14" rx="0.9" />
            <rect x="23" y="17" width="1.8" height="14" rx="0.9" />
            <rect x="25.8" y="17" width="1.8" height="14" rx="0.9" />
            <rect x="22.6" y="29" width="2.8" height="18" rx="1.4" />
            <ellipse cx="40" cy="24" rx="5.5" ry="7" />
            <rect x="38.6" y="29" width="2.8" height="18" rx="1.4" />
          </g>
        </svg>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: -4,
            lineHeight: 1,
          }}
        >
          <span style={{ color: "#2E2E2E" }}>Menu</span>
          <span style={{ color: "#F09A4B" }}>Gallery</span>
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 42,
            color: "#2E2E2E",
          }}
        >
          Photograph a menu, see the dishes.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 26,
            letterSpacing: 1,
            color: "#8A8A8A",
          }}
        >
          {"Coming soon to iOS & Android"}
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
