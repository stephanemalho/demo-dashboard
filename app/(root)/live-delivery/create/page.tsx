import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
// import { menuItems } from "@/data/dashboard";
// import RenderMenu from "./RenderMenu";
import DiffViewer from "./CompareFile";
import { newFile, oldFile } from "@/data/compareFile";
import RenderContainer from "./RenderContainer/RenderContainer";

export default function page() {
  return (
    <div className=" flex w-[98vw] flex-row justify-between">
      <RenderContainer />
      <div className="ml-1 flex h-[90vh] w-[100vw] flex-col text-[10px] max-2xl:h-[80vh]">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-full"
          title="Compare"
          label="Compare"
        >
          <div className=" custom-scrollbar m-4 whitespace-nowrap bg-[#fff] p-1 text-[#dde1e6]">
            <DiffViewer oldText={newFile} newText={oldFile} />
          </div>
        </LiveContainer>
      </div>
    </div>
  );
}
