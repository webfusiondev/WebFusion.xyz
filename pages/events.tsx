import { ki } from "@/app/fonts";
import Nav from "@/app/nav";
import "../app/globals.css";

export default function Courses() {
  return (
    <>
      <Nav route="events" />
      <div
        style={{
          background:
            "linear-gradient(rgba(8, 8, 8, 0.67), rgba(8, 8, 8, 0.67)) left top, url(/eventsbg.jpeg)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
          WebkitFilter: "grayscale(100%)"
        }}
        className={
          ki.className +
          " h-96 flex flex-col md:flex-row items-center justify-center font-medium text-4xl xl:text-6xl mb-16"
        }
      >
        <span>Events</span>
      </div>
      <div className="py-20"></div>
    </>
  );
}
