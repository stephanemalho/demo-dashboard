"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();
  const firstSidebarLink = sidebarLinks.slice(0, 1);
  const secondSidebarLink = sidebarLinks.slice(1);

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[366px]">
      <nav className="flex flex-1 flex-col gap-6">
        <h2 className="h3-bold text-dark500_light700">MONITORING</h2>
        {firstSidebarLink.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          // @Todo add spécial route for profile link

          return (
            <Link
              title={item.label}
              key={item.route}
              href={item.route || "/"}
              className={`${
                isActive
                  ? "primary-gradient rounded text-light-900"
                  : "text-dark500_light700"
              } flex items-center justify-start gap-4 bg-transparent p-4 hover:bg-light-800  dark:hover:bg-dark-300`}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? " " : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"}`}>
                {item.label}
              </p>
            </Link>
          );
        })}
        <h2 className="h3-bold text-dark500_light700">TM1 ADMINISTRATION</h2>
        {secondSidebarLink.map((item) => {
          const isActive =
            (pathname.includes(item.route) &&
              (Array.isArray(item.route) ? item.route.length > 1 : false)) ||
            pathname === item.route;

          const getLastSegment = (url: string) => {
            const segments = url.split("/");
            const lastSegment = segments[segments.length - 1];

            // Capitalize the first letter
            const capitalizedLastSegment =
              lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);

            return capitalizedLastSegment;
          };

          return (
            <div key={item.label}>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-dark500_light700 p-4 hover:bg-light-800 dark:hover:bg-dark-300">
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={20}
                      height={20}
                      className={`${isActive ? " " : "invert-colors"}`}
                    />
                    <p
                      className={`${
                        isActive ? "base-bold" : "base-medium"
                      } w-full pl-[18px] text-left `}
                    >
                      {item.label}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent>
                    {Array.isArray(item.route) ? (
                      item.route.map((subRoute, subIndex) => (
                        <Link
                          title={item.label}
                          key={subIndex}
                          href={subRoute}
                          className={`${
                            isActive || pathname.includes(subRoute)
                              ? "primary-gradient rounded text-light-900"
                              : "text-dark500_light700"
                          } my-1 flex items-center justify-start gap-4 bg-transparent p-4 hover:bg-light-800  dark:hover:bg-dark-300`}
                        >
                          <p
                            className={`${
                              isActive || pathname.includes(subRoute)
                                ? "base-bold"
                                : "base-medium"
                            }`}
                          >
                            {getLastSegment(subRoute)}
                          </p>
                        </Link>
                      ))
                    ) : (
                      <Link
                        title={item.label}
                        key={item.route}
                        href={item.route || "/"}
                        className={`${
                          isActive
                            ? "primary-gradient rounded text-light-900"
                            : "text-dark500_light700"
                        } flex items-start justify-between gap-4 bg-transparent p-4   dark:hover:bg-dark-300`}
                      >
                        <p
                          className={`${
                            isActive ? "base-bold" : "base-medium"
                          }`}
                        >
                          {getLastSegment(item.route)}
                        </p>
                      </Link>
                    )}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          );
        })}
      </nav>
    </section>
  );
};

export default LeftSideBar;
