import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { ki } from "@/app/fonts";
import { promises as fs } from "fs";
import Nav from "@/app/nav";
import "../app/globals.css";
import Footer from "@/app/footer";
import { Listbox, Tab, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Head from "next/head";
import { useQueryParamState } from "@/hooks";
import moment from "moment";
import Link from "next/link";

type AllEvents = Array<{
  name: string;
  events: {
    name: string;
    region: string;
    date: `${number}/${number}/${number}`;
    time: string;
    tag: string;
    attendance: string;
    link: string;
  }[];
}>;

export const getStaticProps = (async (context) => {
  const file = await fs.readFile(
    process.cwd() + "/resources/events.json",
    "utf8"
  );

  let allEvents: AllEvents = JSON.parse(file);

  return { props: { allEvents } };
}) satisfies GetStaticProps<{
  allEvents: AllEvents;
}>;

// TODO: validators
export default function Events({
  allEvents,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const attendanceFilters = [
    { name: "Remote & IRL" },
    { name: "Hybrid" },
    { name: "IRL Events" },
    { name: "Online" },
  ];
  const regionFilters = [
    { name: "All Regions" },
    { name: "Nigeria" },
    { name: "Ghana" },
    { name: "Senegal" },
    { name: "Kenya" },
    { name: "South Africa" },
  ];
  const typeFilters = [
    { name: "All Types" },
    { name: "Hackathons" },
    { name: "Bootcamps" },
    { name: "Workshops" },
    { name: "Webinars" },
    { name: "Conferences" },
  ];

  const [selectedTypeFilter, setSelectedTypeFilter] = useQueryParamState({
    filters: typeFilters,
    queryParamArgName: "type",
  });
  const [selectedRegionFilter, setSelectedRegionFilter] = useQueryParamState({
    filters: regionFilters,
    queryParamArgName: "region",
  });
  const [selectedAttendanceFilter, setSelectedAttendanceFilter] =
    useQueryParamState({
      filters: attendanceFilters,
      queryParamArgName: "attendance",
    });
  const filteredEvents = allEvents.map(({ name, events }) => ({
    name,
    events: events.filter(
      (event) =>
        [typeFilters[0].name, event.tag].includes(selectedTypeFilter.name) &&
        [regionFilters[0].name, event.region].includes(
          selectedRegionFilter.name
        ) &&
        [attendanceFilters[0].name, event.attendance].includes(
          selectedAttendanceFilter.name
        )
    ),
  }));
  return (
    <>
      <Head>
        <title>Events | WebFusion</title>
      </Head>
      <Nav route="events" />
      <div
        style={{
          background:
            "linear-gradient(rgba(8, 8, 8, 0.67), rgba(8, 8, 8, 0.67)) left top, url(/eventsbg.jpeg)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
          WebkitFilter: "grayscale(100%)",
        }}
        className={
          ki.className +
          " h-36 md:h-56 lg:h-72 xl:h-96 flex flex-col md:flex-row items-center justify-center font-medium text-4xl xl:text-6xl mb-8 lg:mb-12 xl:mb-16 transition-all"
        }
      >
        <span>Events</span>
      </div>
      <section className="pb-6 px-4 md:px-6 lg:px-9 xl:px-12 font-light">
        <div className="grid gap-2 md:grid-cols-2 lg:grid-cols-3 mb-8 z-10">
          <SelectListBox
            selectedFilter={selectedTypeFilter}
            setSelectedFilter={setSelectedTypeFilter}
            filters={typeFilters}
          />
          <SelectListBox
            selectedFilter={selectedRegionFilter}
            setSelectedFilter={setSelectedRegionFilter}
            filters={regionFilters}
          />
          <SelectListBox
            selectedFilter={selectedAttendanceFilter}
            setSelectedFilter={setSelectedAttendanceFilter}
            filters={attendanceFilters}
          />
        </div>
        <Tab.Group>
          <Tab.List className="flex mb-8">
            {allEvents.map(({ name }) => (
              <Tab as={Fragment} key={name}>
                {({ selected }) => (
                  /* Use the `selected` state to conditionally style the selected tab. */
                  <button
                    className={`px-3 md:px-5 lg:px-7 border-b pb-4 outline-none md:text-lg xl:text-xl${
                      selected
                        ? " border-brand-green text-[rgba(254,254,254,1)] font-normal"
                        : " border-secondary text-[rgba(254,254,254,0.67)]"
                    }`}
                  >
                    {name}
                  </button>
                )}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels>
            {filteredEvents.map(({ name, events }) => (
              <Tab.Panel key={name}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                  {events.length === 0 ? (
                    <div className="col-span-3">
                      There&apos;re currently no {name}
                    </div>
                  ) : (
                    events.map((event) => (
                      <div
                        key={event.name + event.date + event.tag + event.time}
                        className="px-6 py-5 bg-[rgba(150,_150,_150,_0.05)]"
                      >
                        <div className="font-bold text-lg md:text-xl xl:text-2xl mb-2">
                          {event.name}
                        </div>
                        <div className="flex mb-2">
                          <svg
                            className="mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="24"
                            viewBox="0 0 22 24"
                            fill="none"
                          >
                            <path
                              d="M1.00129 9.36741L1 23.1323L14.6314 23.1297L21.559 17.9424C21.5556 17.9213 21.668 16.2434 21.668 16.2434L21.6667 9.35449L1.00129 9.36741Z"
                              fill="white"
                            />
                            <path
                              d="M1.08499 9.44055L21.6668 9.35443L21.6681 2.26318H17.5606L17.583 4.5335C18.3266 4.72984 18.5087 5.86263 18.5087 5.86263C18.4992 6.80641 17.3557 6.95193 17.3505 6.95064C16.5549 6.78789 16.2789 6.39867 16.2879 5.74423C16.2939 5.28439 16.3077 5.17159 16.6358 4.84953C16.8567 4.63339 16.9088 4.58775 17.2003 4.5137L17.1882 2.26361H5.45513L5.48527 4.5137C6.22927 4.71003 6.47253 4.88096 6.46522 5.68438C6.4566 6.62859 5.30013 7.0966 5.29453 7.0966C4.34516 7.08799 4.00631 6.65012 4.01535 5.70074C4.01966 5.24091 4.39295 4.89818 4.72146 4.57613C4.94148 4.35999 5.02199 4.22221 5.31348 4.14816L5.21015 2.26361H1.00146L1.08499 9.44055Z"
                              fill="#EA5A47"
                            />
                            <path
                              d="M21.6669 17.9424H14.4081C14.4081 17.9424 14.0215 20.5705 13.9905 20.3634V22.6992L14.6311 23.1297L21.6669 17.9424Z"
                              fill="#D0CFCE"
                            />
                            <path
                              d="M5.30778 7.09701C6.02115 7.09701 6.59945 6.51871 6.59945 5.80534C6.59945 5.09197 6.02115 4.51367 5.30778 4.51367C4.59441 4.51367 4.01611 5.09197 4.01611 5.80534C4.01611 6.51871 4.59441 7.09701 5.30778 7.09701Z"
                              stroke="black"
                              strokeWidth="0.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.03109 2.47853H15.6637M19.091 2.47853H21.6674V9.36742H1.00073V2.47853H3.59784M5.31275 1V5.43903"
                              stroke="black"
                              strokeWidth="0.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.3637 7.09627C18.0771 7.09627 18.6554 6.51797 18.6554 5.80461C18.6554 5.09124 18.0771 4.51294 17.3637 4.51294C16.6503 4.51294 16.072 5.09124 16.072 5.80461C16.072 6.51797 16.6503 7.09627 17.3637 7.09627Z"
                              stroke="black"
                              strokeWidth="0.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M17.3693 1V5.43903M10.6181 13.6601C10.7307 13.1136 11.0283 12.6228 11.4607 12.2703C11.8931 11.9178 12.4339 11.7253 12.9918 11.7251C13.6609 11.7251 14.2662 11.9964 14.7054 12.4351C15.3874 13.1171 15.3241 14.2508 14.6839 14.9724L10.5686 19.6138H12.6181M5.8562 13.3612L8.04041 11.7251V19.6133"
                              stroke="black"
                              strokeWidth="0.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M1 9.35449V23.1323L14.631 23.1297L21.6667 17.9424V9.35449"
                              stroke="black"
                              strokeWidth="0.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M21.5586 17.9424H14.408V20.3014"
                              stroke="black"
                              strokeWidth="0.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span>
                            {moment(event.date, "DD/MM/YYYY").format("LL")}
                          </span>
                        </div>
                        <div className="flex mb-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            id="clock"
                            height="22px"
                            width="22px"
                            className="mr-3"
                          >
                            <circle
                              cx="16"
                              cy="16"
                              r="13.5"
                              fill="#fff"
                            ></circle>
                            <circle
                              cx="16"
                              cy="16"
                              r="1.5"
                              fill="#e5303e"
                            ></circle>
                            <path
                              fill="#e5303e"
                              d="M16,.5A15.5,15.5,0,1,0,31.5,16,15.5,15.5,0,0,0,16,.5Zm0,28A12.5,12.5,0,1,1,28.5,16,12.5,12.5,0,0,1,16,28.5Z"
                            ></path>
                            <path d="M21.5,15.5H17.4079a1.49809,1.49809,0,0,0-.9079-.9079V8.5a.5.5,0,0,0-1,0v6.0921A1.4963,1.4963,0,1,0,17.4079,16.5H21.5a.5.5,0,0,0,0-1Zm-5.5,1a.5.5,0,1,1,.5-.5A.50034.50034,0,0,1,16,16.5Zm9.21417-9.65955c-.00873-.01025-.01208-.02313-.02179-.03284s-.02258-.01306-.03284-.02179a12.97336,12.97336,0,0,0-18.31909,0c-.01025.00873-.02313.01208-.03284.02179s-.01306.02258-.02179.03284a12.97336,12.97336,0,0,0,0,18.31909c.00873.01025.01208.02313.02179.03284s.02258.01306.03284.02179a12.97336,12.97336,0,0,0,18.31909,0c.01025-.00873.02313-.01208.03284-.02179s.01306-.02258.02179-.03284a12.97336,12.97336,0,0,0,0-18.31909ZM24.81793,24.1109l-1.03961-1.03961a.49995.49995,0,0,0-.707.707l1.03961,1.03961A11.93609,11.93609,0,0,1,16.5,27.97467V26.5a.5.5,0,0,0-1,0v1.47467a11.93609,11.93609,0,0,1-7.6109-3.15674l1.03961-1.03961a.49995.49995,0,0,0-.707-.707L7.18207,24.1109A11.93609,11.93609,0,0,1,4.02533,16.5H5.5a.5.5,0,0,0,0-1H4.02533A11.93609,11.93609,0,0,1,7.18207,7.8891L8.22168,8.92871a.49995.49995,0,0,0,.707-.707L7.8891,7.18207A11.93609,11.93609,0,0,1,15.5,4.02533V5.5a.5.5,0,0,0,1,0V4.02533a11.93609,11.93609,0,0,1,7.6109,3.15674L23.07129,8.22168a.49995.49995,0,1,0,.707.707L24.81793,7.8891A11.93609,11.93609,0,0,1,27.97467,15.5H26.5a.5.5,0,0,0,0,1h1.47467A11.93609,11.93609,0,0,1,24.81793,24.1109ZM16,0A16,16,0,1,0,32,16,16.01833,16.01833,0,0,0,16,0Zm0,31A15,15,0,1,1,31,16,15.017,15.017,0,0,1,16,31Z"></path>
                          </svg>
                          <span>{event.time}</span>
                        </div>
                        <div className="flex mb-2">
                          <svg
                            className="mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            version="1.0"
                            id="Layer_1"
                            width="800px"
                            height="800px"
                            viewBox="0 0 64 64"
                            enableBackground="new 0 0 64 64"
                            xmlSpace="preserve"
                            style={{ height: "20px", width: "20px" }}
                          >
                            <g>
                              <g>
                                <path
                                  fill="#394240"
                                  d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64    s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39    h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                                />
                                <path
                                  fill="#394240"
                                  d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32    c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                                />
                                <path
                                  fill="#394240"
                                  d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36    c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                                />
                              </g>
                              <g>
                                <path
                                  fill="#F76D57"
                                  d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34    c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"
                                />
                                <path
                                  fill="#F76D57"
                                  d="M32,2c-12.15,0-22,9.85-22,22c0,5.799,3.469,11.469,5.913,15h0.01L32,61l16.077-22h0.01    C50.281,35.781,54,29.799,54,24C54,11.85,44.15,2,32,2z M32,38c-7.732,0-14-6.268-14-14s6.268-14,14-14s14,6.268,14,14    S39.732,38,32,38z"
                                />
                              </g>
                              <path
                                opacity="0.2"
                                fill="#231F20"
                                d="M32,12c-6.627,0-12,5.373-12,12s5.373,12,12,12s12-5.373,12-12S38.627,12,32,12z M32,34   c-5.522,0-10-4.477-10-10s4.478-10,10-10s10,4.477,10,10S37.522,34,32,34z"
                              />
                            </g>
                          </svg>
                          <span>
                            {event.region} ({event.attendance})
                          </span>
                        </div>
                        <div className="flex items-end">
                          <span className="text-sm rounded-sm bg- border border-dashed px-1 text-left inline-block">
                            {event.tag}
                          </span>
                          <Link
                            className="inline-block ml-auto"
                            target="_blank"
                            href={event.link}
                          >
                            <button className=" bg-brand-green text-brand-black px-3 py-2 lg:text-lg">
                              View More
                            </button>
                          </Link>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </section>
      <Footer route="events" />
    </>
  );
}

type SelectListBoxProps = {
  selectedFilter: { name: string };
  setSelectedFilter: (args: { name: string }) => void;
  filters: { name: string }[];
};

const SelectListBox = ({
  selectedFilter,
  setSelectedFilter,
  filters,
}: SelectListBoxProps) => (
  <Listbox value={selectedFilter} onChange={setSelectedFilter}>
    <div className="relative mt-1">
      <Listbox.Button className="relative w-full cursor-default bg-white py-2 pl-3 pr-10 text-left outline-none sm:text-sm border border-brand-white">
        <span className="block truncate">{selectedFilter.name}</span>
        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
          <svg
            className="h-5 w-5 text-gray-400"
            aria-hidden="true"
            width="29"
            height="14"
            viewBox="0 0 29 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1 1L14.2923 12L28 1" stroke="#FEFEFE" strokeWidth="2" />
          </svg>
        </span>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="absolute border border-brand-white mt-1 max-h-60 w-full overflow-auto bg-brand-black py-2 text-base shadow-lg focus:outline-none sm:text-sm z-10">
          {filters.map((filter, filterIdx) => (
            <Listbox.Option
              key={filterIdx}
              className={({ active }) =>
                `relative cursor-default select-none py-2 pl-10 pr-4 hover:ring-1 ring-brand-white ${
                  active ? "bg-brand-black text-amber-900" : "text-gray-900"
                }`
              }
              value={filter}
            >
              {({ selected }) => (
                <span
                  className={`block truncate ${
                    selected ? "font-medium" : "font-normal"
                  }`}
                >
                  {filter.name}
                </span>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </div>
  </Listbox>
);
