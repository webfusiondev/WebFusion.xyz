"use client";

const Hamburger = () => {
  return (
    <span
      onClick={() => {
        document.body.classList.contains("open-nav")
          ? document.body.classList.remove("open-nav")
          : document.body.classList.add("open-nav");
      }}
      className="block md:hidden relative cursor-pointer"
      id="hamburger"
    >
      <span className="mb-2 topline" />
      <span className="bottomline" />
    </span>
  );
};

export default Hamburger;
