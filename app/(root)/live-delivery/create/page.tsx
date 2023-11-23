import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { menuItems } from "@/data/dashboard";
import RenderMenu from "./RenderMenu";
import DiffViewer from "./CompareFile";
import { newFile, oldFile } from "@/data/compareFile";

export default function page() {
  return (
    <div className=" flex w-[98vw] flex-row justify-between">
      <div className=" flex w-[10vw] flex-col text-[10px]">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-[10vw] pt-1"
          title="Create"
          label="Create"
          showIcons={false}
        >
                    {menuItems.map((item) => (
            <RenderMenu key={item.title} item={item} level={0} />
          ))}
        </LiveContainer>
      </div>
      <div className="ml-1 flex h-[90vh] w-[88vw] flex-col text-[10px] max-2xl:h-[80vh]">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-full"
          title="Compare"
          label="Compare"
        >
          <div className=" custom-scrollbar m-4 whitespace-nowrap bg-[#0d1117] p-1 text-[#dde1e6]">
            <DiffViewer oldText={newFile} newText={oldFile} />
          </div>
        </LiveContainer>
      </div>
    </div>
  );
}
