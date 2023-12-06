import React from "react";
import profile from "../../public/assets/profile.png";
import homedop from "../../public/assets/homedop.png";
import homebg from "../../public/assets/homebg.png";
import diamond from "../../public/assets/diamond.png";
import coin from "../../public/assets/coin.png";
import map from "../../public/assets/map.png";
import shop from "../../public/assets/shop.png";
import award from "../../public/assets/award.png";
import packagebox from "../../public/assets/packagebox.png";
import message from "../../public/assets/message.png";
import Link from "next/link";

import { Stats, OrbitControls, Circle } from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Lobby() {
  const gltf = useLoader(GLTFLoader, "./models/Character_Soldier.gltf");

  return (
    <>
      <div className="bg-[url('../../public/assets/homebg.png')] min-h-screen  bg-no-repeat bg-cover">
        <div className="flex items-center space-x-11 text-white text-xl mx-20 py-8">
          <div className="flex homeprofilebg px-3 py-2 items-center space-x-3">
            <img
              src="../../public/assets/profile.png"
              className="h-12 w-auto"
              alt=""
            />
            <p>Prashantexe</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="../../public/assets/coin.png"
              alt=""
              className="h-8 w-auto"
            />
            <p>415</p>
          </div>
          <div className="flex items-center space-x-2">
            <img
              src="../../public/assets/diamond.png"
              alt=""
              className="h-8 w-auto"
            />
            <p>98 +</p>
          </div>
        </div>
        <div className="flex  text-white text-2xl font-semibold  justify-between mx-20">
          <div>
            <div className="homebox mt-20 px-16 py-10">
              <div className="flex items-center space-x-5">
                <img
                  src="../../public/assets/shop.png"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/optstore">Store</Link>
                </p>
              </div>
              <div className="flex items-center my-5 space-x-5">
                <img
                  src="../../public/assets/award.png"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/optstore">Luck Royale</Link>
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <img
                  src="../../public/assets/packagebox.png"
                  alt=""
                  className="h-8 w-auto"
                />
                <p>
                  <Link href="/Guns">Vault</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="root2">
            <Canvas camera={{ fov: 75, position: [0, 1, 5] }} shadows>
              <directionalLight position={[3.3, 1.0, 4.4]} castShadow />
              <primitive object={gltf.scene} position={[0, 1, 0]} castShadow />
              <OrbitControls target={[0, 1, 0]} />
            </Canvas>
          </div>
          <div className="mt-56 ">
            <div className="flex mapbox px-6 py-3 items-center space-x-5">
              <img
                src="../../public/assets/packagebox.png"
                alt=""
                className="h-8 w-auto"
              />
              <p>Select Map</p>
            </div>
            <div className="">
              <img
                src="../../public/assets/homedop.png"
                className="h-40 w-auto"
                alt=""
              />
              <div className="absolute   top-[525px]">
                <p className="text-center  bg-black bg-opacity-40 py-2 px-[90px]">
                  Bermuda
                </p>
              </div>
            </div>
            <div className="flex justify-between mx-2 items-center mt-3">
              <p className="px-3 text-lg hover:text-black hover:bg-[#9FC610]  py-1 border border-[#9FC610] rounded-xl text-[#9FC610]">
                5 min
              </p>
              <p className="px-3 text-lg hover:text-black hover:bg-[#9FC610]  py-1 border border-[#9FC610] rounded-xl text-[#9FC610]">
                10 min
              </p>
              <p className="px-3 text-lg hover:text-black hover:bg-[#9FC610]  py-1 border border-[#9FC610] rounded-xl text-[#9FC610]">
                {" "}
                15 min
              </p>
            </div>
            <div className="flex justify-center">
              <Link href="/game">
                <button className="playbtm px-10 font-semibold  py-2 mt-5 text-xl text-black ">
                  Play!!
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Lobby;
