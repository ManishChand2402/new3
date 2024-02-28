import React, { useState } from "react";
import { placeName } from "../../lib/lib";
import { HoneymoonPlace } from "../../lib/lib";

function Honeymoon() {
  const [Img, setImg] = useState("Agra");
  const handleClick = (e, key) => {
    const imgs = placeName[key];
    setImg(imgs);
  };

  return (
    <div className="bg-[#78787840] max-h-65">
      <div className="max-w-[90%] mx-auto py-[5rem]">
        <div className="flex">
          <div className="border-r border-black pr-[1rem] ">       
            <img src={`./${Img}.svg`} alt="" width={1000} />
          </div>
          <div className="flex flex-wrap gap-y-8 pt-[0.6rem] ">
            {HoneymoonPlace.map((e, key) => (
              <div className="pl-[1rem]">
                <div className="flex">
                  <img src={e.Image} alt="" />
                  <h1
                    onClick={(event) => handleClick(e, key)}
                    key={key}
                    className="cursor-pointer text-[1.5rem]  ml-[0.5rem] md:text-[1rem] xl:text-[1.5rem]"
                  >
                    {e.Name}
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Honeymoon;
