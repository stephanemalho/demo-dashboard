import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { menuItems } from "@/data/dashboard";
import RenderMenu from "./RenderMenu";

export default function page() {
  return (
    <div className=" flex w-[90vw] flex-row">
      <div className="ml-[300px] flex w-[30vw] flex-col">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-[30vw]"
          title="Create"
          label="Create"
        >
          {menuItems.map((item) => (
            <RenderMenu key={item.title} item={item} level={0} />
          ))}
        </LiveContainer>
      </div>
    </div>
  );
}
