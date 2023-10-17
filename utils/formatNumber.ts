export const formatRamValue = (ramValue : number) => {
    // Convertir de bytes en méga-octets et formater avec deux décimales
    return (ramValue / 1000000).toFixed(2);
  };