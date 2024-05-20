import { ki } from "./fonts";
import Link from "next/link";

type Route = "home" | "courses" | "events";
type Props = {
  route: Route;
};

const Footer = ({route: navRoute}: Props) => {
    const getClassName = (route: Route) =>
        route === navRoute ? "hidden" : "border-b border-b-brand-green";
  return (
    <footer
      className="border-t border-t-[rgba(255,255,255,0.3)] font-light mt-auto"
    >
      <div className="grid grid-cols-5 py-9 px-12 lg:px-16 xl:px-24">
        <div className="col-span-2">
          <p className="max-w-96 text-xs">
            Empowering developers and advancing technology through
            community-driven initiatives, educational programs, and
            collaborative partnerships
          </p>
        </div>
        <span />
        <div>
          <div className="font-normal mb-1 text-lg">Explore</div>
          <div className={ki.className + " mb-1"}>
            <Link className={getClassName("home")} href="/">Home</Link>
          </div>
          <div className={ki.className + " mb-1"}>
            <Link className={getClassName("courses")} href="/courses-and-resources">Courses &amp; Resources</Link>
          </div>
          <div className={ki.className + " mb-1"}>
            <Link className={getClassName("events")} href="/events">Events</Link>
          </div>
        </div>
        <div>
          <div className="font-normal mb-1 text-lg">Contact Us</div>
          <div className={ki.className + " mb-1"}>
            <Link className=" border-b border-b-brand-green" target="_blank" href="https://x.com/webfusiondev">
              x.com/webfusiondev
            </Link>
          </div>
          <div className={ki.className + " mb-1"}>
            <Link className=" border-b border-b-brand-green" href="mailto:webfusiondevs@gmail.com">
              webfusiondevs@gmail.com
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 pb-6 text-sm border-t border-t-[rgba(255,255,255,0.3)]">
        Copyright &copy; 2024 WebFusion
      </div>
    </footer>
  );
};

export default Footer;
