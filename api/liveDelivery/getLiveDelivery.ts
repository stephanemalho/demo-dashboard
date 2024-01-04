import { LiveDeliveryListEntry } from "@/app/(root)/live-delivery/list/columns";
import liveList  from "@/data/liveDeliveryTable.json";

export async function getDeliveryListData(): Promise<LiveDeliveryListEntry[]> {
  return liveList;
}