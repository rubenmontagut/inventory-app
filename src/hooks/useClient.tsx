import { type Client } from "@/types/Client";
import clients from "../../data/clients.json";

export default function useClient() {
  const getClientById = (id: number) => {
    const client = clients.find((client: Client) => client.id === id);
    return client;
  };

  return { clients, getClientById };
}
