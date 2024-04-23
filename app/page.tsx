import Logo from "./logo";

export default function Home() {
  return (
    <>
      <main className="min-h-screen flex flex-col relative">
        <nav className="px-24 py-6 flex items-center h-32 justify-between select-none text-xl border-b border-b-secondary">
          <Logo />
          <div className="flex items-center justify-center gap-4">
            <div className="cursor-pointer">Our Events</div>
            &bull;
            <div className="cursor-pointer text-brand-green font-bold">
              Home
            </div>
            &bull;
            <div className="cursor-pointer">Courses &amp; Resources</div>
          </div>
          <span className="invisible">
            <Logo />
          </span>
        </nav>
        <section className="py-44 px-24 flex flex-col justify-center grow">
          <div className="text-6xl font-medium mb-5 pl-8">
            Welcome to{" "}
            <span className="bg-brand-green text-brand-black px-4">
              Webfusion
            </span>
          </div>
          <p className="text-3xl mb-20 max-w-5xl pl-8">
            At Webfusion, we are dedicated to{" "}
            <span className="text-brand-green">empowering</span>{" "}
            <span className="text-brand-green">developers</span>
            <span className="inline">
              {" "}
              and advancing technology through community-driven initiatives,
              educational programs, and collaborative partnership{" "}
            </span>
            <span
              style={{ width: "32.36%" }}
              className="border border-brand-white inline-block align-middle"
            />
          </p>
          {/* right aligned section */}
          <div className="text-right font-bold text-2xl text-brand-green">
            Our Mission
          </div>
          <p
            style={{ alignSelf: "flex-end" }}
            className="max-w-xl text-right text-xl"
          >
            To foster innovation, inclusivity, and skill development in the
            rapidly evolving landscape of{" "}
            <span className="font-bold">Web2 and Web3 technologies</span>
          </p>
        </section>
      </main>
      <section
        className="py-24 overflow-hidden"
        style={{ backgroundColor: "rgba(150, 150, 150, 0.05)" }}
      >
        <div className="px-24 pb-16 text-2xl">
          <div className="font-medium text-6xl mb-9">Our Events</div>
          <p className="mb-4">
            Discover and participate in a diverse range of events organized or
            sponsored by Webfusion. From hackathons and bootcamps to workshops
            and webinars, we offer opportunities for developers to learn,
            connect, and showcase their talents.
          </p>
          <div>
            Join us at{" "}
            <span className="font-bold text-brand-green cursor-pointer">
              upcoming events
            </span>{" "}
            or explore highlights from past gatherings.
          </div>
        </div>
        <div
          style={{ marginLeft: "-1px", marginRight: "-1px" }}
          className="grid grid-cols-6 events-grid"
        >
          <div className="col-span-2 border border-secondary p-24">
            <div className="font-bold text-3xl mb-6">Hackathons</div>
            <p className="text-xl mb-8">
              Engage in intensive coding challenges, collaborate with peers, and
              bring your cre-ative ideas to life within a supportive
              environment.
            </p>
            <span className="text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="col-span-2 border border-secondary border-l p-24">
            <div className="font-bold text-3xl mb-6">Bootcamps</div>
            <p className="text-xl mb-8">
              Dive deep into specific topics or technologies through immersive
              learning experiences led by industry experts.
            </p>
            <span className="text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="col-span-2 border border-secondary border-l p-24">
            <div className="font-bold text-3xl mb-6">Workshops</div>
            <p className="text-xl mb-8">
              Enhance your skills and know-ledge through hands-on sessions
              covering a wide array of subjects relevant to modern development
              practices.
            </p>
            <span className="text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="col-span-3 border border-b p-24">
            <div className="font-bold text-3xl mb-6">Webinars</div>
            <p className="text-xl mb-8">
              Stay informed and inspired by attending virtual sessions featuring
              thought leaders, innovators, and pioneers in the tech industry.
            </p>
            <span className="text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
          <div className="col-span-3 border border-l border-b  p-24">
            <div className="font-bold text-3xl mb-6">
              In-Person (IRL) Events
            </div>
            <p className="text-xl mb-8">
              Connect with fellow developers face-to-face at our live events,
              where networking opportunities abound and camaraderie thrives.
            </p>
            <span className="text-xl text-secondary pb-3 border-b border-b-brand-green cursor-pointer">
              Read More
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
