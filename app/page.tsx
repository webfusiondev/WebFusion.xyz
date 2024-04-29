import Image from "next/image";

import IconPark from "./icon-park";
import Logo from "./logo";
import Hamburger from "./hamburger";

export default function Home() {
  return (
    <>
      <main className="min-h-[80vh] md:min-h-screen flex flex-col relative overflow-x-clip">
        <nav className="px-4 md:px-8 lg:px-16 xl:px-24 py-6 flex items-center h-32 justify-between select-none text-xl border-b border-b-secondary z-10">
          <Logo />
          <div className="items-center justify-center gap-4 z-0 hidden md:flex md:flex-row">
            <div className="cursor-pointer text-brand-green font-bold">
              Home
            </div>
            &bull;
            <div className="cursor-pointer">Events</div>
            &bull;
            <div className="cursor-pointer">Courses &amp; Resources</div>
          </div>
          {/* mobile nav : tricky bug */}
          <div className="items-center justify-center gap-4 z-0 nav-links md:hidden">
            <div className="cursor-pointer text-brand-green font-bold">
              Home
            </div>
            &bull;
            <div className="cursor-pointer">Events</div>
            &bull;
            <div className="cursor-pointer">Courses &amp; Resources</div>
          </div>
          {/* <span className="invisible hidden md:block">
            <Logo />
          </span> */}
          <Hamburger />
        </nav>
        <section className="py-20 md:py-28 lg:py-32 xl:py-44 px-8 md:px-16 flex flex-col justify-center grow">
          <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium mb-5 xl:pl-8">
            Welcome to{" "}
            <span className="bg-brand-green text-brand-black px-4">
              WebFusion
            </span>
          </div>
          <p className="text-xl md:text-2xl xl:text-3xl mb-20 max-w-5xl xl:pl-8">
            At WebFusion, we are dedicated to{" "}
            <span className="text-brand-green">empowering</span>{" "}
            <span className="text-brand-green">developers</span>
            <span className="inline">
              {" "}
              and advancing technology through community-driven initiatives,
              educational programs, and collaborative partnerships{"  "}
            </span>
            <span
              style={{ width: "32.36%" }}
              className="border border-brand-white inline-block align-middle invisible md:visible"
            />
          </p>
          {/* right aligned section */}
          <div className="text-right font-bold text-lg md:text-xl xl:text-2xl text-brand-green">
            Our Mission
          </div>
          <p
            style={{ alignSelf: "flex-end" }}
            className="max-w-xl text-right md:text-lg xl:text-xl"
          >
            To foster innovation, inclusivity, and skill development in the
            rapidly evolving landscape of{" "}
            <span className="font-bold">Web2 and Web3 technologies</span>
          </p>
        </section>
        <svg
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            // height: "112px",
            width: "max(7vw, 48px)",
            maxWidth: "62px",
            transform: "translate(-50%, 50%)",
          }}
          viewBox="0 0 63.5 113.5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="0.75"
            y="0.75"
            width="62"
            height="112"
            rx="31"
            stroke="#00EC97"
            strokeWidth="1.5"
            fill="transparent"
            strokeDasharray="8"
            strokeDashoffset="0"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;16;"
              dur="1.5s"
              calcMode="linear"
              repeatCount="indefinite"
            />
          </rect>
          <path
            y="80"
            xmlns="http://www.w3.org/2000/svg"
            d="M 31.75,31.75 31.75,81.75 M 18.75,63.75 31.75,81.75 M 44.75,63.75 31.75,81.75"
            stroke="#00EC97"
            strokeWidth="1.5"
          >
            <animateMotion
              dur="1.5s"
              repeatCount="indefinite"
              path="m 0,-10 v 20"
            />
          </path>
        </svg>

        <Image
          alt="webfusion stripe"
          width={396}
          height={206}
          style={{
            left: 0,
            transform: "translate(-33%, 31.6%)",
            bottom: 0,
            position: "absolute",
            maxWidth: "25vw",
          }}
          src="/pattern-stripe.png"
        />
        <Image
          alt="webfusion stripe"
          width={396}
          height={206}
          style={{
            bottom: 0,
            right: "0",
            transform: "translate(33%, 31.6%)",
            position: "absolute",
            maxWidth: "25vw",
          }}
          src="/pattern-stripe.png"
        />
      </main>
      <section
        className="py-20 xl:py-24 overflow-hidden"
        style={{ backgroundColor: "rgba(150, 150, 150, 0.05)" }}
      >
        <div className="px-12 lg:px-16 xl:px-24 pb-16 text-lg md:text-xl xl:text-2xl">
          <div className="font-medium text-4xl xl:text-6xl mb-9">Events</div>
          <p className="mb-4">
            Discover and participate in a diverse range of events organized or
            sponsored by WebFusion&#8228; From hackathons and bootcamps to
            workshops and webinars, we offer opportunities for developers to
            learn, connect, and showcase their talents&#8228;
          </p>
          <div>
            Join us at{" "}
            <span className="font-bold text-brand-green cursor-pointer">
              upcoming events
            </span>{" "}
            or explore highlights from past gatherings&#8228;
          </div>
        </div>
        <div
          style={{ marginLeft: "-1px", marginRight: "-1px" }}
          className="grid grid-cols-6 events-grid"
        >
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 xl:col-span-2 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Hackathons
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Engage in intensive coding challenges, collaborate with peers, and
              bring your creative ideas to life within a supportive
              environment&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 xl:col-span-2 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Bootcamps
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Dive deep into specific topics or technologies through immersive
              learning experiences led by industry experts&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 xl:col-span-2 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Workshops
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Enhance your skills and knowledge through hands-on sessions
              covering a wide array of subjects relevant to modern development
              practices&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              Webinars
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Stay informed and inspired by attending virtual sessions featuring
              thought leaders, innovators, and pioneers in the tech
              industry&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="event-card md:hover:text-brand-black col-span-6 md:col-span-3 border border-secondary p-12 md:p-20 xl:p-24">
            <div className="font-bold text-xl md:text-2xl xl:text-3xl mb-6">
              In-Person (IRL) Events
            </div>
            <p className="md:text-lg xl:text-xl mb-8">
              Connect with fellow developers face-to-face at our live events,
              where networking opportunities abound and camaraderie
              thrives&#8228;
            </p>
            <span className="md:text-lg xl:text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
        </div>
      </section>
      <section>
        <div className="py-16 grid grid-cols-3 gap-2 md:gap-4 lg:gap-8 xl:gap-10 max-w-6xl mx-auto px-8 xl:px-0">
          <div className="col-span-3 md:col-span-1 text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-medium flex flex-row md:flex-col md:justify-center mb-4 md:mb-0">
            <div>
              Courses <span className="text-brand-green mr-2 md:mr-0">&</span>
            </div>
            <div>Resources</div>
          </div>
          <div className="col-span-3 md:col-span-2 md:text-lg xl:text-xl font-light">
            <p className="mb-4">
              Elevate your expertise with our comprehensive courses and curated
              resources designed to empower developers at every stage of their
              journey&#8228;
            </p>
            <p>
              Whether you&apos;re delving into blockchain technology or honing
              your skills in Web2 development, we provide the tools and guidance
              you need to succeed&#8228;
            </p>
          </div>
        </div>
        <div className="overflow-hidden mb-40">
          <div
            style={{ backgroundColor: "#0F0F0F", margin: "-1px" }}
            className="grid grid-cols-6"
          >
            <div className="border border-secondary px-14 py-16 col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-4">
                <IconPark />
              </div>
              <div className="text-xl md:text-2xl xl:text-3xl mb-4 font-bold">
                Developer Courses
              </div>
              <p className="md:text-lg xl:text-xl">
                Expand your knowledge and proficiency in Web2 development
                languages, frameworks, and best practices with our targeted
                curriculum&#8228;
              </p>
            </div>
            <div className="border border-secondary px-14 py-16 col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-4">
                <IconPark />
              </div>
              <div className="text-xl md:text-2xl xl:text-3xl mb-4 font-bold">
                Blockchain Courses
              </div>
              <p className="md:text-lg xl:text-xl">
                Gain a deep understanding of blockchain fundamentals, smart
                contract development, decentralized applications (DApps), and
                more through our specialized courses&#8228;
              </p>
            </div>
            <div className="border border-secondary px-14 py-16 col-span-6 md:col-span-3 xl:col-span-2">
              <div className="mb-4">
                <IconPark />
              </div>
              <div className="text-xl md:text-2xl xl:text-3xl mb-4 font-bold">
                Developer Resources
              </div>
              <p className="md:text-lg xl:text-xl">
                Access a wealth of tutorials, documentation, code samples, and
                tools curated to support your ongoing learning and professional
                growth&#8228;
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
