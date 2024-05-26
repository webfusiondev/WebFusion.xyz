import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { promises as fs } from "fs";
import { useState } from "react";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import Markdown from "react-markdown";
import Link from "next/link";
import Nav from "@/app/nav";
import Expand from "@/app/expand";
import { ki, widolte } from "@/app/fonts";
import "../app/globals.css";
import Footer from "@/app/footer";
import React from "react";
import Head from "next/head";
import { useQueryParamState } from "@/hooks";

type ResourceData = {
  name: string;
  description: string;
  markdown: string;
  tag: string;
};

export const getStaticProps = (async (context) => {
  const file = await fs.readFile(
    process.cwd() + "/resources/resources.json",
    "utf8"
  );

  let resources: Array<ResourceData> = JSON.parse(file);

  const markdownRequest = resources.map(async ({ markdown, ...others }) => ({
    ...others,
    markdown: await fs.readFile(
      process.cwd() + `/resources/${markdown}`,
      "utf-8"
    ),
  }));

  resources = await Promise.all(markdownRequest);

  return { props: { resources } };
}) satisfies GetStaticProps<{
  resources: Array<ResourceData>;
}>;

export default function Courses({
  resources,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const filters = [
    { name: "All" },
    { name: "Blockchain Courses" },
    { name: "Developer Courses" },
    { name: "Dev Docs" },
    { name: "Tooling" },
    { name: "Developer Communities" },
  ];
  const [selectedFilter, setSelectedFilter] = useQueryParamState({
    filters,
    queryParamArgName: "type",
  });
  const filteredResources = resources.filter(({ tag }) =>
    [filters[0].name, tag].includes(selectedFilter.name)
  );

  return (
    <>
      <Head>
        <title>Course &amp; Resources | WebFusion</title>
      </Head>
      <Nav route="courses" />
      <div
        style={{
          background:
            "linear-gradient(rgba(8, 8, 8, 0.67), rgba(8, 8, 8, 0.67)) left top, url(/coursesbg.png)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, cover",
        }}
        className={
          ki.className +
          " h-h-36 md:h-56 lg:h-72 xl:h-96 transition-all flex flex-col md:flex-row items-center justify-center font-medium text-4xl xl:text-6xl mb-12"
        }
      >
        <span>Courses &amp; </span>
        <span className="text-brand-black bg-brand-green px-2 py-1 ml-3">
          Resources
        </span>
      </div>

      <div className="w-72 ml-auto mb-16 px-4">
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
                  <path
                    d="M1 1L14.2923 12L28 1"
                    stroke="#FEFEFE"
                    strokeWidth="2"
                  />
                </svg>
              </span>
            </Listbox.Button>
            <Transition
              as={React.Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute border border-brand-white mt-1 max-h-60 w-full overflow-auto bg-brand-black py-2 text-base shadow-lg focus:outline-none sm:text-sm">
                {filters.map((filter, filterIdx) => (
                  <Listbox.Option
                    key={filterIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 hover:ring-1 ring-brand-white ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
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
      </div>

      <div
        className={
          widolte.className +
          " grid gap-4 max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 pb-40"
        }
      >
        {filteredResources.length ? (
          filteredResources.map(({ name, description, markdown, tag }, idx) => (
            <ResourceCard
              key={idx}
              title={name}
              {...{ description, markdown, tag }}
            />
          ))
        ) : (
          <div>
            There are no Courses or Resources matching this filter&#8228;
          </div>
        )}
      </div>
      <Footer route="courses" />
    </>
  );
}

type ResourceCardProps = {
  title: string;
  description: string;
  markdown: string;
  tag: string;
};

const ResourceCard = ({
  title,
  description,
  markdown,
  tag,
}: ResourceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Transition
        show={isOpen}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-200 ease-out origin-bottom-left"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-50 opacity-0"
        as={React.Fragment}
      >
        <Dialog className="fixed inset-0 z-10" onClose={() => setIsOpen(false)}>
          <div
            style={{
              backgroundColor: "rgba(217, 217, 217, 0.06)",
              backdropFilter: "blur(6px)",
              WebkitBackdropFilter: "blur(6px)",
            }}
            className="fixed inset-0 z-0"
            aria-hidden="true"
          />
          <Dialog.Panel
            style={{ width: "90vw", maxHeight: "90vh" }}
            className="z-10 relative max-w-5xl mx-auto bg-brand-black mt-12 p-8 overflow-auto"
          >
            <span
              style={{ backgroundColor: "#181818" }}
              className="absolute right-8 top-8 cursor-pointer select-none text-2xl font-medium px-3 pb-1"
              onClick={() => setIsOpen(false)}
            >
              x
            </span>
            <Markdown
              className={ki.className}
              components={{
                h1: ({ children, node, ...props }) => (
                  <h1 {...props} className="font-semibold text-[2em] mt-6 mb-1">
                    {children}
                  </h1>
                ),
                h2: ({ children, node, ...props }) => (
                  <h2 {...props} className="font-semibold text-2xl mt-6 mb-1">
                    {children}
                  </h2>
                ),
                h3: ({ children, node, ...props }) => (
                  <h3 {...props} className="font-semibold text-xl mt-6 mb-1">
                    {children}
                  </h3>
                ),
                h4: ({ children, node, ...props }) => (
                  <h4 {...props} className="font-semibold text-base mt-6 mb-1">
                    {children}
                  </h4>
                ),
                h5: ({ children, node, ...props }) => (
                  <h5 {...props} className="font-semibold text-sm mt-6 mb-1">
                    {children}
                  </h5>
                ),
                a: ({ children, node, href, ...props }) => (
                  <Link
                    className="outline-none border-b border-brand-green break-words"
                    {...props}
                    href={href ?? "#"}
                    target={
                      (href ?? "#")!.startsWith("#") ||
                      (href ?? "#")!.startsWith("/")
                        ? undefined
                        : "_blank"
                    }
                  >
                    {children}
                  </Link>
                ),
                p: ({ children, node, ...props }) => (
                  <p {...props} className="mb-4">
                    {children}
                  </p>
                ),
                li: ({ children, node, ...props }) => (
                  <li {...props} className="mb-2">
                    {children}
                  </li>
                ),
                ol: ({ children, node, ...props }) => (
                  <ol {...props} className="list-decimal list-inside">
                    {children}
                  </ol>
                ),
                ul: ({ children, node, ...props }) => (
                  <ul {...props} className="list-disc list-inside">
                    {children}
                  </ul>
                ),
                code: ({ children, node, ...props }) => (
                  <code
                    {...props}
                    style={{ backgroundColor: "#3e3e3e" }}
                    className="px-2"
                  >
                    {children}
                  </code>
                ),
                pre: ({ children, node, ...props }) => (
                  <pre
                    {...props}
                    style={{ backgroundColor: "#3e3e3e" }}
                    className="px-2 py-1"
                  >
                    {children}
                  </pre>
                ),
                hr: ({ children, node, ...props }) => (
                  <hr {...props} className="my-2" />
                ),
              }}
            >
              {markdown}
            </Markdown>
          </Dialog.Panel>
        </Dialog>
      </Transition>
      <div
        className="p-4 text-center cursor-pointer bg-[#0f0f0f]"
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <div className="flex justify-end">
          <Expand />
        </div>
        <div className="mb-4 font-bold text-3xl">
          {title.replaceAll(".", String.fromCharCode(8228))}
        </div>
        <p className="font-light">
          {description.replaceAll(".", String.fromCharCode(8228))}
        </p>
        <div>
          <span className="text-sm rounded-sm bg- border border-dashed px-1 text-left mt-4 inline-block">
            {tag}
          </span>
        </div>
      </div>
    </>
  );
};
