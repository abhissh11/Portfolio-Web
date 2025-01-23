import { Dot } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="h-fit bg-base">
      <p className="flex items-center py-2 text-gray-300 text-center justify-center">
        Developed with ♥ by Abhishek{" "}
        <span>
          <Dot size={44} />
        </span>{" "}
        Deployed on Vercel.
      </p>
    </div>
  );
}
