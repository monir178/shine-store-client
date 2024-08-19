import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/authOptions";

export const useUser = async () => {
  const session = await getServerSession(authOptions);
  return session?.user || null;
};
