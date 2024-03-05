"use client";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function Loading() {
  return (
    <div>
      {/* <p className="text-green-400">Loading your slow page...</p> */}
      {/* Using Spinner instead */}
      <div className="flex h-screen w-full justify-center pt-20">
        <PacmanLoader loading={true} color="black" />
      </div>
    </div>
  );
}
