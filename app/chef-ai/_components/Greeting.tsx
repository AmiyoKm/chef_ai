"use client";
import useStore from "@/store/store";
import React from "react";
import Typewriter from "typewriter-effect";

const Greeting = () => {
  const { showText } = useStore();
  return (
    <>
      {showText && (
        <>
          <h1 className="text-4xl">Hi, I&apos;m Chef AI.</h1>
          <h1 className="text-muted-foreground">
            <Typewriter
              options={{
                loop: true,
                autoStart: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Type ingredients to generate recipes")
                  .pauseFor(5000)
                  .deleteAll()
                  .start();
              }}
            />
          </h1>
        </>
      )}
    </>
  );
};

export default Greeting;
