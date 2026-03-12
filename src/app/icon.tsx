import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// Kai favicon: robot head silhouette + online dot.
export default function Icon() {
  const bg = "#050714";
  const fg = "#ffffff";
  const dot = "#34d399"; // emerald-400

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
          borderRadius: 8,
        }}
      >
        <div
          style={{
            position: "relative",
            width: 24,
            height: 24,
            display: "flex",
          }}
        >
          {/* Antenna */}
          <div
            style={{
              position: "absolute",
              left: 11,
              top: 1,
              width: 2,
              height: 4,
              background: fg,
              borderRadius: 2,
              opacity: 0.95,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 9,
              top: 0,
              width: 6,
              height: 3,
              background: fg,
              borderRadius: 999,
              opacity: 0.95,
            }}
          />

          {/* Head */}
          <div
            style={{
              position: "absolute",
              left: 3,
              top: 4,
              width: 18,
              height: 16,
              background: fg,
              borderRadius: 6,
            }}
          />

          {/* Eyes */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 10,
              width: 10,
              height: 5,
              borderRadius: 999,
              background: bg,
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 9,
              top: 11,
              width: 2,
              height: 2,
              borderRadius: 999,
              background: fg,
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 13,
              top: 11,
              width: 2,
              height: 2,
              borderRadius: 999,
              background: fg,
              opacity: 0.9,
            }}
          />

          {/* Jaw / base */}
          <div
            style={{
              position: "absolute",
              left: 7,
              top: 19,
              width: 10,
              height: 3,
              background: fg,
              borderRadius: 999,
              opacity: 0.95,
            }}
          />

          {/* Online dot */}
          <div
            style={{
              position: "absolute",
              right: -1,
              bottom: -1,
              width: 7,
              height: 7,
              borderRadius: 999,
              background: dot,
              boxShadow: `0 0 0 2px ${bg}`,
            }}
          />
        </div>
      </div>
    ),
    { width: size.width, height: size.height }
  );
}
