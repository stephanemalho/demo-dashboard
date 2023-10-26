// import https from 'https';
// import axios from 'axios';

// // const Username = 'demo';
// const Useridkey = 'aa';

// export const getData = async () => {
//   try {
//     const response = await axios.get(`http://172.18.100.37:6756/dashboard/${Useridkey}`, {
//       httpsAgent: new https.Agent({ rejectUnauthorized: false }), // Pour ignorer la vérification du certificat ??
//     });
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// };

import { dashboard } from "@/data/dashboard";
import { Threads } from "@/components/shared/tableThreads/columns";

export async function getData(): Promise<Threads[]> {
  const data = dashboard;
  const threads = data.Threads;

  return Object.keys(threads).map((logKey) => {
    const threadsEntry = threads[logKey as unknown as keyof typeof threads];
    return {
      id: threadsEntry.ID,
      function: threadsEntry.Function,
      user: threadsEntry.Name,
      type: threadsEntry.Type,
      context: threadsEntry.Context,
      waitTime: threadsEntry.WaitTime,
      elapsedTime: threadsEntry.ElapsedTime,
      state: threadsEntry.State,
      delete: threadsEntry.ID,
      actions: [],
    };
  });
}