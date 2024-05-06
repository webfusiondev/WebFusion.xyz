import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { promises as fs } from "fs";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Markdown from "react-markdown";
import Link from "next/link";
import Nav from "@/app/nav";
import Expand from "@/app/expand";
import { ki, widolte } from "@/app/fonts";
import "../app/globals.css";

type ResourceData = {
  name: string;
  description: string;
  markdown: string;
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
  return (
    <>
      <Nav route="courses" />
      <div
        style={{
          background:
            "linear-gradient(rgba(8, 8, 8, 0.67), rgba(8, 8, 8, 0.67)) left top, url(/coursesbg.png)",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "cover, cover",
        }}
        className={
          widolte.className +
          " h-96 flex flex-col md:flex-row items-center justify-center font-medium text-4xl xl:text-6xl mb-16"
        }
      >
        <span>Courses &amp;{" "}</span>
        <span className="text-brand-black bg-brand-green px-2 py-1 ml-3">
          Resources
        </span>
      </div>
      <div
        className={
          widolte.className + " grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 pb-40"
        }
      >
        {resources.map(({ name, description, markdown }, idx) => (
          <ResourceCard
            key={idx}
            title={name}
            description={description}
            markdown={markdown}
          />
        ))}
      </div>
    </>
  );
}

type ResourceCardProps = {
  title: string;
  description: string;
  markdown: string;
};

const ResourceCard = ({ title, description, markdown }: ResourceCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Dialog
        className="fixed inset-0 z-10"
        open={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div
          style={{
            backgroundColor: "rgba(217, 217, 217, 0.06)",
            backdropFilter: "blur(6px)",
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
      <div
        style={{ backgroundColor: "#0F0F0F" }}
        className="p-4 text-center cursor-pointer"
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
      </div>
    </>
  );
};
