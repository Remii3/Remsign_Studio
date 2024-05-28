"use client";
import { generateThree } from "@/lib/utils";
import React from "react";
import { useEffect } from "react";

const Primary = () => {
  return (
    <>
      <div className="w-1/2">
        <h1 className="text-6xl mb-4 font-semibold">
          Witaj w
          <br />
          Remsign Studio
        </h1>
        <p className="text-xl">
          Jesteśmy zespołem pasjonatów, którzy tworzą wizualne i techniczne
          rozwiązania dla Twojego biznesu.
        </p>
      </div>
      <div></div>
    </>
  );
};

export default Primary;
