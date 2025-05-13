"use client";
import React from "react";
import Typewriter from "typewriter-effect";

export default function TypeWriterText() {
  return (
    <div className="mb-4 text-center font-heading text-[32px] text-amber-500 lg:mb-0 lg:text-[64px]">
      <Typewriter
        options={{
          strings: [
            "Shodiq Basiru",
            "Software Engineer",
            "Backend Developer",
            "Frontend Developer",
          ],
          autoStart: true,
          loop: true,
          // wrapperClassName: "text-[78px] font-heading",
          // cursorClassName: "text-[78px]",
        }}
      />
    </div>
  );
}
