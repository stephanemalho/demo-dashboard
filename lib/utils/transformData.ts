export const transformData = (rawData: { children: any[]; }) => {
  return rawData.children.map((item) => ({
    name: item.Name,
    size: item.Sum, 
    count: item.Count,
    lastExec: item.LastExec,
    max: item.Max,
    min: item.Min,
    top: item.Top,
    average: item.Average,
  }));
};