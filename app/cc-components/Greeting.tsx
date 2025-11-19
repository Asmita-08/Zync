'use client';

import { trpc } from "../api/trpc/client";
import { LogoutButton } from "./LogOut";

export function Greeting() {
  
  const data = trpc.fetchUsers.useQuery();

  return(
    <div className="min-w-screen min-h-screen flex flex-col font-semibold items-center justify-center gap-y-6">
       <div> {JSON.stringify(data, null, 2)} </div>
      <LogoutButton />
    </div>
  )
}