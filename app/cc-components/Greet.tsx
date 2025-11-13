'use client'
import { trpc } from "@/trpc-client/client"

function Greet() {
    const {data: greet} = trpc.greet.useQuery();
    const {data: user} = trpc.createUser.useQuery();
  return (
    <div>
      {greet?.message}
      {user?.message}
    </div>
  )
}

export default Greet
