import clsx from "clsx";

export default function Container({ className, children }) {
  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl px-6 sm:px-8 lg:px-12",
        "w-full",
        className
      )}
    >
      {children}
    </div>
  );
}

