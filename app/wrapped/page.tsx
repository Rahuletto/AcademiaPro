import React from "react";
import Wrapped from "./Wrapped";

export default function page() {
  const date = new Date();
  if (date.getMonth() === 4 || date.getMonth() === 11) {
    return <Wrapped />;
  } else
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <h3 className="text-3xl font-semibold">Whatcha lookin&apos; at?</h3>
      </div>
    );
}
