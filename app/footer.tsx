import { ki } from "./fonts";
import Link from "next/link";
import Logo from "./logo";

type Route = "home" | "courses" | "events";
type Props = {
  route: Route;
};

const Footer = ({ route: navRoute }: Props) => {
  const getClassName = (route: Route) =>
    route === navRoute ? "hidden" : "border-b border-b-brand-green";
  return (
    <footer className="border-t border-t-[rgba(255,255,255,0.3)] font-light mt-auto">
      <div className="grid gap-6 md:gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-9 px-12 lg:px-16 xl:px-24">
        <div className="lg:col-span-2">
          <div className=" max-h-20 flex">
            <Logo style={{height: "60px", marginLeft: "-20px", marginBottom: "12px"}} />
          </div>
          <p className="max-w-96 text-xs">
            Empowering developers and advancing technology through
            community-driven initiatives, educational programs, and
            collaborative partnerships
          </p>
        </div>
        <span className="hidden lg:block" />
        <div className="flex flex-col justify-center">
          <div className="font-normal mb-1 text-lg">Explore</div>
          <div className={ki.className + " mb-1"}>
            <Link className={getClassName("home")} href="/">
              Home
            </Link>
          </div>
          <div className={ki.className + " mb-1"}>
            <Link
              className={getClassName("courses")}
              href="/courses-and-resources"
            >
              Courses &amp; Resources
            </Link>
          </div>
          <div className={ki.className + " mb-1"}>
            <Link className={getClassName("events")} href="/events">
              Events
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <div className="font-normal mb-1 text-lg">Contact Us</div>
          <div className={ki.className + " mb-1"}>
            <Link
              className=" border-b border-b-brand-green"
              target="_blank"
              href="https://x.com/webfusiondev"
            >
              x.com/webfusiondev
            </Link>
          </div>
          <div className={ki.className + " mb-1"}>
            <Link
              className=" border-b border-b-brand-green"
              href="mailto:webfusiondevs@gmail.com"
            >
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
