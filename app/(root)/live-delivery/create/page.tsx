import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import { menuItems } from "@/data/dashboard";
import RenderMenu from "./RenderMenu";
import DiffViewer from "./CompareFile";
import { newFile, oldFile } from "@/data/compareFile";

export default function page() {
  return (
    <div className=" flex w-[90vw] flex-row justify-between">
      <div className=" flex w-[15vw] flex-col text-[10px]">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-[15vw] pt-1"
          title="Create"
          label="Create"
        >
                    {menuItems.map((item) => (
            <RenderMenu key={item.title} item={item} level={0} />
          ))}
        </LiveContainer>
      </div>
      <div className="ml-1 flex w-[80vw] flex-col text-[10px]">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-[80vw] "
          title="Compare"
          label="Compare"
        >
          <div className="m-4 whitespace-nowrap bg-[#0d1117] p-1 text-[#dde1e6]">
            <DiffViewer oldText={newFile} newText={oldFile} />
          </div>
        </LiveContainer>
      </div>
    </div>
  );
}
