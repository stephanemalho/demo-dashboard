import { JSX, SVGProps } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ContainerWrapper from "@/components/shared/sideBars/optionSideBar/optionSideBarComponent/ContainerWrapper";

const TestData = () => {
  return (
    <ContainerWrapper>
      <div className="w-full">
        <div className="bg-white p-6 shadow">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold">Time Stamp</h2>
            <Button variant="secondary">Reload</Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <IconCalendar className="text-gray-400" />
              <Input type="date" placeholder="mm / dd / yyyy" />
            </div>
            <div className="flex items-center gap-2">
              <IconClock className="text-gray-400" />
              <Input type="time" placeholder="12:00 AM" />
            </div>
            <div className="flex items-center gap-2">
              <IconCalendar className="text-gray-400" />
              <Input type="date" placeholder="mm / dd / yyyy" />
            </div>
            <div className="flex items-center gap-2">
              <IconClock className="text-gray-400" />
              <Input type="time" placeholder="12:00 AM" />
            </div>
          </div>
        </div>
      </div>
    </ContainerWrapper>
  );
};

export default TestData;

function IconCalendar(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function IconClock(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
