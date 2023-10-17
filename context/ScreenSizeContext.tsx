// "use client";
// import React, { createContext, useState } from "react";

// interface ScreenContextProps {
//     isFullScreen: boolean,
//     toggleFullScreen: () => void,
// };

// export const ScreenContext = createContext<ScreenContextProps | undefined>(undefined);

// export function ScreenProvider({ children }: { children: React.ReactNode }) {
    
//     const [isFullScreen, setFullScreen] = useState(false);

//   const toggleFullScreen = () => {
//       setFullScreen(!isFullScreen);
//   };

//     return (
//         <ScreenContext.Provider value={{ isFullScreen, toggleFullScreen }}>
//             {children}
//         </ScreenContext.Provider>
//     );
// }

// export const useScreen = () => {
//     const context = React.useContext(ScreenContext);

//     if (context === undefined) {
//         throw new Error("useScreen must be used within a ScreenProvider");
//     }

//     return context;
// };