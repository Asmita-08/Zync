'use client';
import { Button } from "@/components/ui/button";
import { trpc } from "@/trpc-client/client";


export default function Home() {
  const { data: greet } = trpc.greet.useQuery();
  const { data: love } = trpc.love.useQuery();

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center">
      <div>{greet}</div>
      <div>{love}</div>
      <Button>Click me</Button>
    </div>
  );
}
