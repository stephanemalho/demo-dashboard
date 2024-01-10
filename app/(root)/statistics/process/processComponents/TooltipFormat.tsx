
// Fonction pour le contenu personnalisé de l'infobulle
export const CustomTooltip = ({ active, payload } : any ) => {
  if (active) {
    const { name, size } = payload[0].payload;
    return (
      <div className="bg-slate-50 p-2">
        <p>{name}</p>
        <p>Size: {size}</p>
        <p>Count: {payload[0].payload.Count}</p>
        <p>Average: {payload[0].payload.Average}</p>
        <p>Sum: {payload[0].payload.Sum}</p>
        <p>Min: {payload[0].payload.Min}</p>
        <p>Max: {payload[0].payload.Max}</p>
        <p>Top: {payload[0].payload.Top}</p>  
        <p>LastExec: {payload[0].payload.LastExec}</p>
      </div>
    );
  }
  return null;
};