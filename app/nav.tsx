"use client";

import React from "react";
import Logo from "./logo";
import Hamburger from "./hamburger";
import Link from "next/link";
import { widolte } from "./fonts";

type Route = undefined | "home" | "courses" | "events";
type Props = {
  route: Route;
};

const NavElements = ({ navRoute }: { navRoute: Route }) => {
  const getClassName = (route: Route) =>
    route === navRoute ? "cursor-pointer text-brand-green font-bold" : "";

  return (
    <>
      <Link onClick={() => document.body.classList.remove("open-nav")} href="/">
        <div className={getClassName("home")}>Home</div>
      </Link>
      &bull;
      <Link onClick={() => document.body.classList.remove("open-nav")} href="/events">
        <div className={getClassName("events")}>Events</div>
      </Link>
      &bull;
      <Link
        onClick={() => document.body.classList.remove("open-nav")}
        href="/courses-and-resources"
      >
        <div className={getClassName("courses")}>Courses &amp; Resources</div>
      </Link>
    </>
  );
};

const Nav = (props: Props) => {
  return (
    <nav
      className={
        widolte.className +
        " px-4 md:px-8 lg:px-16 xl:px-24 py-6 flex items-center h-32 justify-between select-none text-xl border-b border-b-secondary z-10 relative font-light"
      }
    >
      <Link className="z-10" href="/">
        <Logo />
      </Link>
      <div className="items-center justify-center gap-4 z-0 hidden md:flex md:flex-row">
        <NavElements navRoute={props.route} />
      </div>
      {/* mobile nav : tricky bug */}
      <div className="items-center justify-center gap-4 z-0 nav-links md:hidden">
        <NavElements navRoute={props.route} />
      </div>
      <Hamburger />
    </nav>
  );
};

export default Nav;
