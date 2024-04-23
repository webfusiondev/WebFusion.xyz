import localFont from "next/font/local"

export const ki = localFont({
  src: [
    {
      path: "../public/fonts/ki/Ki-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/ki/Ki-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/ki/Ki-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});
