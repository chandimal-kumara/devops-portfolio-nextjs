"use client";
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie";
import Skill from "./Skill";
import { groq } from "next-sanity";
import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "sr6ptf89",
  dataset: "production",
  useCdn: true,
});

async function getData() {
  return client.fetch(groq`*[_type == "skill"]`);
}

function Skills() {
  const animationData = require("../../../public/assets/hello.json");

  const container = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getData()
      .then((data) => {
        setPosts(data);
      })
      .catch((error) => {
        console.log("error fetching posts", error);
      });
  }, []);

  return (
    <div>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Skills
      </h3>
      <div className="container mx-auto max-w-6xl flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="md:w-1/2 grid grid-cols-3 gap-5">
          {posts?.map((item, index) => (
            <Skill key={index} item={item} />
          ))}
        </div>
        <div className="md:w-1/2 z-auto pt-2 md:mt-0">
          <Lottie options={container} />
        </div>
      </div>
    </div>
  );
}

export default Skills;
