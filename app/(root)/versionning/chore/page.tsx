import HeadVersionningChores from "./choreComponents/HeadVersionningChores";

export default function page() {

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 p-8">
        <HeadVersionningChores />
        <div className="h-full bg-white" />
      </div>
    </div>
  )
}
