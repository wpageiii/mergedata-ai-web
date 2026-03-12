import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Simple Kai favicon (K + dot). This replaces the default Vercel icon.
export default function Icon() {
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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 26,
            height: 26,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 20,
            fontWeight: 800,
            fontFamily:
              'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"',
          }}
        >
          K
          <div
            style={{
              position: "absolute",
              right: -1,
              bottom: 1,
              width: 7,
              height: 7,
              borderRadius: 999,
              background: "#34d399" /* emerald-400 */,
              boxShadow: "0 0 0 2px rgba(5,7,20,0.9)",
            }}
          />
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
