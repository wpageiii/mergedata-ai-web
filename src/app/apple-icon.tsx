import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#050714",
          borderRadius: 36,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 120,
            height: 120,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: -2,
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          }}
        >
          K
          <div
            style={{
              position: "absolute",
              right: 6,
              bottom: 12,
              width: 28,
              height: 28,
              borderRadius: 999,
              background: "#34d399",
              boxShadow: "0 0 0 8px rgba(5,7,20,0.9)",
            }}
          />
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
