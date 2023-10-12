"use client";
/* eslint-disable react-hooks/exhaustive-deps */
// import { getData } from "@/api/getData";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  // const fetchData = async () => {
  //   try {
  //     const result = await getData();
  //     return result;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const callData =  async () => {
  //   const res = await fetchData();
  //   console.log(res.data);
  //   setData(res.data);
  // }

  // useEffect(() => {
  //   callData();
  // }, []);

  return (
    <>
      <div className="text-dark500_light700 flex w-full flex-col-reverse justify-between gap-4 sm:flex-row">
        <h1 className="h1-bold">home{data}</h1>
      </div>
    </>
  );
}