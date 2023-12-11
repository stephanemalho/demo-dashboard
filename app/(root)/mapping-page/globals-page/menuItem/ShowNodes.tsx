import React from "react";

const ShowNodes = () => {
  const data: any[] = [];

  return (
    <div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="w-1/3">ID</th>
            <th className="w-1/3">Name</th>
            <th className="w-1/3">Type</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td className="w-1/3">{item.id}</td>
                <td className="w-1/3">{item.name}</td>
                <td className="w-1/3">{item.type}</td>
              </tr>
            ))
          ) : (
            <tr className="h-[200px] w-full bg-gray-100 text-center">
              <td colSpan={3}>No data available in table</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowNodes;
