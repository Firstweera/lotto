import { FC, ReactNode, useState } from "react";
import clsx from "clsx";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export const ContentContainer: FC<ContentContainerProps> = ({
  children,
  className,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={clsx(
        "sm:tw-px-12 tw-px-4 tw-py-6 tw-mb-10 tw-h-screen tw-w-screen",
        isDarkMode ? "tw-bg-gray-900 tw-text-white" : "tw-bg-gray-100",
        className
      )}
    >
      <button
        onClick={toggleDarkMode}
        className="tw-absolute tw-top-4 tw-right-4 tw-p-2 tw-bg-gray-300 tw-rounded-full"
      >
        {isDarkMode ? "Light" : "Dark"} Mode
      </button>
      {children}
    </div>
  );
};


