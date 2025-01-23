"use client";
import React, { useEffect, useState } from "react";
import { groq } from "next-sanity";
import sanityClient from "@sanity/client";
import Image from "next/image";

const client = sanityClient({
  projectId: "sr6ptf89",
  dataset: "production",
  useCdn: true,
});

async function getData() {
  return client.fetch(groq`*[_type == "experience"]`);
}

function Experience() {
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
    <>
      <h3 className="tracking-[20px] mx-auto text-center mb-10 uppercase text-gray-400 text-2xl">
        Experience
      </h3>
      <div className="max-w-6xl mx-auto px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-3 mt-8 mb-20">
        {posts?.map((item, index) => (
          <div
            className="bg-slate-400 p-6 rounded-lg shadow-md m-4"
            key={index}
          >
            <div className="flex items-center justify-center">
              <Image
                className="rounded-full w-32 h-32 mx-auto md:mx-0 object-contain"
                src={item?.image}
                alt="exp-image"
                width={128}
                height={128}
              />
            </div>
            <h4 className="text-xl text-white font-bold mb-2 mt-4">
              {item?.name}
            </h4>
            <ul className="text-xl text-white font-light text-left list-disc">
              {item?.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
