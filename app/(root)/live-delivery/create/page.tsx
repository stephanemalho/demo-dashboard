import LiveContainer from "@/components/shared/boxContainer/LiveContainer";
import DiffViewer from "./CompareFile";
import RenderContainer from "./RenderContainer/RenderContainer";
import jsonData from "@/data/data.json"; // Assurez-vous que le chemin est correct

export default function page() {
  // Transformation des données JSON en objets DiffFile
  const oldTextFile = {
    content: jsonData.map(item => item.Text1)
  };
  const newTextFile = {
    content: jsonData.map(item => item.Text2)
  };

  return (
    <div className="flex w-[98vw] flex-row justify-between">
      <RenderContainer />
      <div className="ml-1 flex h-[90vh] w-[100vw] flex-col text-[10px] max-2xl:h-[80vh]">
        <LiveContainer
          logHeight="h-[90vh] max-2xl:h-[80vh] w-full"
          title="Compare"
          label="Compare"
        >
          <div className="custom-scrollbar m-4 whitespace-nowrap bg-[#fff] p-1 text-[#dde1e6]">
            <DiffViewer oldText={oldTextFile} newText={newTextFile} />
          </div>
        </LiveContainer>
      </div>
    </div>
  );
}
