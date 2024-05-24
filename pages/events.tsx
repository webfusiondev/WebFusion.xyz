import { ki } from "@/app/fonts";
import Nav from "@/app/nav";
import "../app/globals.css";
import Footer from "@/app/footer";
import { Listbox, Tab, Transition } from "@headlessui/react";
import { Fragment } from "react";
import Head from "next/head";
import { useQueryParamState } from "@/hooks";
// TODO: validators
export default function Courses() {
  const allEvents: Array<{
    name: string;
    events: {
      name: string;
      region: string;
      date: string;
      tag: string;
      attendance: string;
      link: string;
    }[];
  }> = [
    {
      name: "Upcoming Events",
      events: [],
    },
    {
      name: "Past Events",
      events: [],
    },
  ];
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
        [regionFilters[0].name, event.region].includes(selectedRegionFilter.name) &&
        [attendanceFilters[0].name, event.attendance].includes(selectedAttendanceFilter.name)
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
                {events.length === 0 ? (
                  <>There&apos;re currently no {name}</>
                ) : (
                  events.map((event) => <>...</>)
                )}
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
