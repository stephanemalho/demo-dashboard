import { dashboard } from "@/data/dashboard";
import { Threads } from "@/app/(root)/dashboard/columns";

export async function getDashboardData(): Promise<Threads[]> {
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
