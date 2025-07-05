"use client"

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { PageContainer } from "../../common/general_container";
import { menuConfig } from "../../core";
import { PrimaryButton } from "../../common/primary_button";

interface MenuItemProps {
  title: string;
  textColorClass?: string;
  paddingX?: string;
  handleClick?: () => void;
}

export const MenuItem = (props: MenuItemProps) => {
  const { title } = props;
  const paddingX = props.paddingX ?? "px-3";
  const textColorClass = props.textColorClass ?? "text-textcolor";

  const handleClick = props.handleClick;

  return (
    <li className="px-[24px] md:px-[8px] lg:px-[12px] xl:px-[24px] mx-0">
      <a
        className="cursor-pointer "
        href={`#${title.replace(" ", "-").toLowerCase()}`}
        onClick={handleClick}
      >
        <span
          className={`font-sans block font-normal text-[14px] lg:text-[18px] xl:text-[20px] leading-[24px] py-2 ${paddingX} bg-transparent ${textColorClass} md:p-0`}
          aria-current="page"
        >
          {title}
        </span>
      </a>
    </li>
  );
};

const MainMenu = () => {
  /*  const [isScrolling, setIsScrolling] = useState(false); */
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /*  setIsScrolling(window.scrollY > 0); */
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full h-[80px] md:h-[100px] left-0 top-0 flex items-center justify-center z-50 bg-white">
      <PageContainer>
        <nav className="border-gray-200 py-5 md:py-0 relative">
          <div className="flex flex-wrap items-center justify-between mx-auto">
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="assets/logo1.svg"
                alt="rose clean services"
                className="w-[160px] lg:w-[222px]"
              />
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
              aria-controls="mobile-menu"
              aria-expanded="false"
              aria-label="Open main menu"
              onClick={() => {
                setIsOpen((isOpen) => !isOpen);
              }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <div
              className="hidden w-full md:flex items-center gap-[10px] xl:gap-[16px] md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg gap-[8px] lg:gap-[16px] md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                {menuConfig.map((menuItem) => (
                  <MenuItem
                    key={menuItem.id}
                    title={menuItem.title}
                    handleClick={() => {
                      setIsOpen(false);
                      window.location.href = `#${menuItem.id}`;
                    }}
                  />
                ))}
              </ul>
              <PrimaryButton
                className="ml-[16px]"
                onClick={() => {
                  window.location.href = "#contact";
                }}
              >
                Contact Us
              </PrimaryButton>
            </div>
          </div>
          {isOpen && (
            <div
              className="w-full md:hidden absolute bg-white top-[80px] left-0"
              id="mobile-menu"
            >
              <ul className="space-y-1 pb-3 pt-2 flex flex-col justify-start items-left gap-[16px]">
                {menuConfig.map((menuItem) => (
                  <MenuItem
                    key={menuItem.id}
                    title={menuItem.title}
                    paddingX="px-0"
                    handleClick={() => {
                      setIsOpen(false);
                      window.location.href = `#${menuItem.id}`;
                    }}
                  />
                ))}
              </ul>
            </div>
          )}
        </nav>
      </PageContainer>
    </div>
  );
};

export default MainMenu;
