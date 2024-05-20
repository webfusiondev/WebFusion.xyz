import localFont from "next/font/local"

export const ki = localFont({
  src: [
    {
      path: "../public/fonts/ki/Ki-Light.woff2",
      weight: "300",
      style: "normal",
    },
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

export const widolte = localFont({
  src: [
    {
      path: "../public/fonts/widolte/WidolteLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/widolte/WidolteRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/widolte/WidolteBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});
