import Dog from "@/components/dog";
import Image from "next/image";
import { Suspense } from "react";

export default async function Home() {
  return (
    <Suspense fallback={<>loading ...</>}>
      <Dog />
    </Suspense>
  );
}
