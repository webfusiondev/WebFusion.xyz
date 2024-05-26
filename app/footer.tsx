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
      <div className="grid gap-6 md:gap-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-5 py-9 px-8 xl:px-16">
        <div className="lg:col-span-2">
          <div className=" max-h-20 flex">
            <Logo
              style={{
                height: "60px",
                marginLeft: "-20px",
                marginBottom: "12px",
              }}
            />
          </div>
          <p className="max-w-96 text-xs">
            Empowering developers and advancing technology through
            community-driven initiatives, educational programs, and
            collaborative partnerships
          </p>
        </div>
        <span className="hidden xl:block" />
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
          <div className={ki.className + " mb-1 flex items-center "}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mr-2 shrink-0"
              style={{ height: "24px", width: "24px" }}
            >
              <circle
                cx="16"
                cy="16"
                r="15.75"
                stroke="#FEFEFE"
                strokeWidth="0.5"
              />
              <g clipPath="url(#clip0_380_92)">
                <mask
                  id="mask0_380_92"
                  style={{ maskType: "luminance" }}
                  maskUnits="userSpaceOnUse"
                  x="8"
                  y="8"
                  width="16"
                  height="16"
                >
                  <path d="M8 8H24V24H8V8Z" fill="white" />
                </mask>
                <g mask="url(#mask0_380_92)">
                  <path
                    d="M20.6 8.74976H23.0537L17.6937 14.8915L24 23.2503H19.0629L15.1931 18.1818L10.7703 23.2503H8.31429L14.0469 16.6789L8 8.7509H13.0629L16.5554 13.3829L20.6 8.74976ZM19.7371 21.7783H21.0971L12.32 10.1452H10.8617L19.7371 21.7783Z"
                    fill="#FEFEFE"
                  />
                </g>
              </g>
              <defs>
                <clipPath id="clip0_380_92">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(8 8)"
                  />
                </clipPath>
              </defs>
            </svg>
            <Link
              className=" border-b border-b-brand-green"
              target="_blank"
              href="https://x.com/webfusiondev"
            >
              x.com/webfusiondev
            </Link>
          </div>
          <div className={ki.className + " mb-1 flex items-center "}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              className="mr-2 shrink-0"
              style={{ height: "24px", width: "24px" }}
            >
              <circle
                cx="16"
                cy="16"
                r="15.75"
                stroke="#FEFEFE"
                strokeWidth="0.5"
              />
              <path
                d="M11 13L14.75 16C15.1047 16.284 15.5456 16.4388 16 16.4388C16.4544 16.4388 16.8953 16.284 17.25 16L21 13M25 21V11C25 10.4696 24.7893 9.96086 24.4142 9.58579C24.0391 9.21071 23.5304 9 23 9H9C8.46957 9 7.96086 9.21071 7.58579 9.58579C7.21071 9.96086 7 10.4696 7 11V21C7 21.5304 7.21071 22.0391 7.58579 22.4142C7.96086 22.7893 8.46957 23 9 23H23C23.5304 23 24.0391 22.7893 24.4142 22.4142C24.7893 22.0391 25 21.5304 25 21Z"
                stroke="#FEFEFE"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
