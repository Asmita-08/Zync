import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { authCheck } from "@/lib/auth-utils";


export default async function Page() {
  await authCheck();
  
  const { data } = authClient.useSession()
  
  return (
    <div className="min-h-screen min-w-screen flex flex-colgap-6 items-center justify-center">
      {JSON.stringify(data)}
      {data && 
        <Button onClick={() => authClient.signOut()}>Log Out</Button>
      }
    </div>
  );
}