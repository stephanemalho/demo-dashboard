"use client";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebarLinks } from "@/constants";
import { SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LeftSideBar = () => {
  const pathname = usePathname();
  const firstSidebarLink = sidebarLinks.slice(0, 1);
  const secondSidebarLink = sidebarLinks.slice(1);
  console.log(secondSidebarLink);

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <nav className="flex flex-1 flex-col gap-6">
        <h2 className="h3-bold text-dark100_light900">MONITORING</h2>
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
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4 hover:bg-primary-100`}
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
        <h2 className="h3-bold text-dark100_light900">TM1 ADMINISTRATION</h2>
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
                  <AccordionTrigger className="p-4">
                    <Image
                      src={item.imgURL}
                      alt={item.label}
                      width={20}
                      height={20}
                      className={`${isActive ? " " : "invert-colors"}`}
                    />
                    <p className={`${isActive ? "base-bold" : "base-medium"} w-full pl-[18px] text-left `}>
                      {item.label}
                    </p>
                  </AccordionTrigger>
                  <AccordionContent >
                    {Array.isArray(item.route) ? (
                      item.route.map((subRoute, subIndex) => (
                        <Link
                          title={item.label}
                          key={subIndex}
                          href={subRoute}
                          className={`${
                            (isActive || pathname.includes(subRoute))
                              ? "primary-gradient rounded text-light-900"
                              : "text-dark300_light900"
                          } my-1 flex items-center justify-start gap-4 bg-transparent p-4 hover:bg-primary-100`}
                        >
                          <p
                            className={`${
                              (isActive || pathname.includes(subRoute))
                               ? "base-bold" : "base-medium"
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
                            : "text-dark300_light900"
                        } flex items-start justify-between gap-4 bg-transparent p-4 hover:bg-primary-100`}
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
      <SignedOut>
        <div className="flex flex-col gap-3">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="primary-text-gradient ">Log In</span>
            </Button>
          </Link>
          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <Image
                src="assets/icons/sign-up.svg"
                alt="Sign-up"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="">Sign-up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSideBar;
