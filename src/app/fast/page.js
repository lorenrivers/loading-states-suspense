import { SlowComponent } from "../components/Slow";
import { Suspense } from "react";

export default function FastPage() {
  return (
    <div>
      <h2>Fast Page</h2>
      <Suspense fallback={<p>Loading the slow part</p>}>
        <SlowComponent />
      </Suspense>
    </div>
  );
}
