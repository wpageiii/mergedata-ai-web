import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

// Kai Apple icon: robot head silhouette + online dot.
export default function AppleIcon() {
  const bg = "#050714";
  const fg = "#ffffff";
  const dot = "#34d399";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: bg,
          borderRadius: 36,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 132,
            height: 132,
            display: "flex",
          }}
        >
          {/* Antenna */}
          <div
            style={{
              position: "absolute",
              left: 64,
              top: 6,
              width: 6,
              height: 20,
              background: fg,
              borderRadius: 6,
              opacity: 0.95,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 52,
              top: 0,
              width: 30,
              height: 16,
              background: fg,
              borderRadius: 999,
              opacity: 0.95,
            }}
          />

          {/* Head */}
          <div
            style={{
              position: "absolute",
              left: 18,
              top: 20,
              width: 96,
              height: 86,
              background: fg,
              borderRadius: 30,
            }}
          />

          {/* Eyes */}
          <div
            style={{
              position: "absolute",
              left: 36,
              top: 56,
              width: 60,
              height: 26,
              borderRadius: 999,
              background: bg,
              opacity: 0.92,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 50,
              top: 64,
              width: 10,
              height: 10,
              borderRadius: 999,
              background: fg,
              opacity: 0.92,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 72,
              top: 64,
              width: 10,
              height: 10,
              borderRadius: 999,
              background: fg,
              opacity: 0.92,
            }}
          />

          {/* Jaw / base */}
          <div
            style={{
              position: "absolute",
              left: 42,
              top: 104,
              width: 48,
              height: 16,
              background: fg,
              borderRadius: 999,
              opacity: 0.95,
            }}
          />

          {/* Online dot */}
          <div
            style={{
              position: "absolute",
              right: 2,
              bottom: 2,
              width: 30,
              height: 30,
              borderRadius: 999,
              background: dot,
              boxShadow: `0 0 0 10px ${bg}`,
            }}
          />
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
