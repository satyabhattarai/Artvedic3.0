import Image from "next/image";
import React from "react";
const page = () => {
  return (
    <div className="flex flex-col justify-center gap-32">
      <div className="flex gap-16  justify-between  items-center">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="font-headings text-[32px] font-semibold ">
            Beginning of my sketching journey
          </h1>
          <p className="text-justify">
            During the lockdown, when I found myself with plenty of time and
            nowhere to go, I stumbled upon sketching as a creative outlet. It
            all started when I picked up a pencil out of boredom and began
            sketching everyday objects around me. Initially, it was just a way
            to pass the time, but soon I found solace in the rhythm of pencil
            strokes. My brother Subham played a significant role during this
            phase, constantly encouraging me to channel my energy into art. His
            motivation sparked a passion within me, and I slowly immersed myself
            in the world of sketching.
          </p>
        </div>
        <div className="w-[400px] h-[500px]">
          <Image
            src="/Images/Art1.jpeg"
            className="w-full object-fit h-full"
            alt="ArtImage"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="flex gap-16  justify-between items-center">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="font-headings text-[32px] font-semibold ">
            From still life to portraits
          </h1>
          <p className="text-justify">
            As days went by, I grew more confident and curious about different
            forms of sketching. I started with simple pencil still life
            drawings, capturing the shapes and shadows of objects around me.
            Gradually, I ventured into human portraits, fascinated by the
            challenge of capturing expressions and features. It didn’t take long
            before I noticed my skills improving. I began experimenting with
            shading techniques and discovered how the proper use of values and
            shades could transform a simple drawing into a lifelike piece of
            art.
          </p>
        </div>
        <div className="w-[400px] h-[500px]">
          <Image
            src="/Images/Art1.jpeg"
            className="w-full object-fit h-full"
            alt="ArtImage"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="flex gap-16  justify-between  items-center">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="font-headings text-[32px] font-semibold">
            Receiving commisions
          </h1>
          <p className="text-justify">
            Over time, my consistent practice paid off. As my shading and
            detailing skills evolved, I started sharing my work online. To my
            surprise, people began noticing and appreciating my art. Eventually,
            I received my first commission, which not only boosted my confidence
            but also gave me a sense of purpose. One commission led to another,
            and before I knew it, I was regularly creating custom sketches for
            clients. The positive feedback kept me motivated, pushing me to
            refine my techniques even further.
          </p>
        </div>
        <div className="w-[400px] h-[500px]">
          <Image
            src="/Images/Art1.jpeg"
            className="w-full object-fit h-full"
            alt="ArtImage"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>

      <div className="flex gap-16 justify-between items-center">
        <div className="flex flex-col gap-8 w-1/2">
          <h1 className="font-headings text-[32px] font-semibold ">
            Blending art with technology
          </h1>
          <p className="text-justify">
            When I started my bachelor’s degree, I was introduced to the world
            of automation and coding. This new knowledge opened up a fascinating
            opportunity to integrate technology with my art. I began
            experimenting with adding LEDs to my framed sketches and even
            creating interactive art installations. Incorporating code into my
            art allowed me to explore a modern fusion of traditional drawing and
            digital innovation. This phase not only redefined my creative
            process but also broadened my vision of what art could be.
          </p>
        </div>
        <div className="w-[400px] h-[500px]">
          <Image
            src="/Images/Art1.jpeg"
            className="w-full object-fit h-full"
            alt="ArtImage"
            width={0}
            height={0}
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default page;
