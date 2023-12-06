import Image from "next/image";
import Navbar from "./Navbar";
import joystick from "../../assets/joystick.png";
import side2 from "../../assets/side2.png";
import star from "../../assets/star.png";
import star1 from "../../assets/star1.png";
import star2 from "../../assets/star2.png";
import star3 from "../../assets/star3.png";
import star4 from "../../assets/star4.png";
import arrow1 from "../../assets/arrow1.png";
import arrow2 from "../../assets/arrow2.png";
import arrow3 from "../../assets/arrow3.png";
import arrow4 from "../../assets/arrow4.png";
import art1 from "../../assets/art1.png";
import art2 from "../../assets/art2.png";
import art3 from "../../assets/art3.png";
import art4 from "../../assets/art4.png";
import bro from "../../assets/bro.png";
import sidebro from "../../assets/sidebro.png";
import { MdArrowOutward } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url('../../assets/BG.png')]   bg-contain bg-no-repeat text-white min-h-screen">
      <div className="bg-black min-h-screen ">
        <Navbar />
        <div className="pt-28">
          <div className="text-center font-bold pt-10 font-serif    text-9xl">
            <p>
              Un<span className="text-[#9FC610]">l</span>eash
              <span className="text-[#9FC610]"> t</span>he fut
              <span className="text-[#9FC610]">u</span>re{" "}
            </p>
            <div className="flex justify-center">
              <div className="flex mt-8 justify-center">
                <p className=" border-2 border-[#9FC610] text-black text-sm px-2  rounded-full">
                  .
                </p>
                <p className="border-t-2 mt-3  w-80   border-[#9FC610]  "></p>
              </div>
              <p className="text-4xl text-[#9FC610] pt-5 font-serif ml-12">
                join us
              </p>
            </div>
            <div className="mt-5 flex justify-center space-x-4">
              <img src="../../assets/joystick.png" alt="" />
              <div className="flex flex-col space-y-2">
                <p>
                  o<span className="text-[#9FC610]">f</span> Ga
                  <span className="text-[#9FC610]">m</span>ing
                </p>
                <div className="">
                  <Link href="/lobby">
                    <button className="border-2 w-60 rounded-full border-l-8 py-2 px-3 border-[#9FC610] text-4xl">
                      Play Now!!
                    </button>
                  </Link>
                </div>
              </div>
              <img
                src="../../assets/side2.png"
                alt=""
                className="w-auto h-32"
              />
            </div>
          </div>
          <div className="flex justify-end mx-10">
            <img src="../../assets/star1.png" className="h-24 w-auto" alt="" />
            <img
              src="../../assets/star2.png"
              alt=""
              className="h-12 mt-16 w-auto"
            />
            <img
              src="../../assets/star3.png"
              alt=""
              className="h-8 mt-8 w-auto"
            />
          </div>
        </div>
        <div className="flex space-x-16 mx-32 mt-20">
          <div className="flex space-x-8 border-2 border-r-4 border-b-8 border-[#9FC610] px-20 py-5 rounded-full">
            <div>
              <img
                className="h-10 mt-2 w-auto"
                src="../../assets/star4.png"
                alt=""
              />
            </div>
            <div>
              <p className="text-xl ">
                Game <br /> Features
              </p>
              <p className="  my-5 text-[#A2A2A2] text-md md:w-[600px]">
                Experience intense multiplayer battles, climb leaderboards for
                exclusive NFT rewards, and enjoy lifelike graphics powered by
                blockchain technology. Enter custom rooms, strategize, and
                dominate countdown-driven challenges for unparalleled gaming
                excitement.
              </p>
            </div>
            <div>
              <div className="bg-[#9FC610] rounded-full p-2 mt-12">
                <MdArrowOutward className="text-6xl rounded-full border-2 border-black text-black bg-[#9FC610]" />
              </div>
            </div>
          </div>
          <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
            <img src="../../assets/star1.png" alt="" className="h-12 w-auto" />
            <p className="text-xl text-center">
              Blockchain
              <br />
              Powered
              <br />
              Realism
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-2 space-x-20">
          <div className="mt-24">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="../../assets/star1.png"
                alt=""
                className="h-12 w-auto"
              />
              <p className="text-xl text-center">
                Blockchain
                <br />
                Powered
                <br />
                Realism
              </p>
            </div>
          </div>
          <div className="mt-16">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="../../assets/star1.png"
                alt=""
                className="h-12 w-auto"
              />
              <p className="text-xl text-center">
                Blockchain
                <br />
                Powered
                <br />
                Realism
              </p>
            </div>
          </div>
          <div>
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-16 py-10 rounded-full">
              <img
                src="../../assets/star1.png"
                alt=""
                className="h-12 w-auto"
              />
              <p className="text-xl text-center">
                Blockchain
                <br />
                Powered
                <br />
                Realism
              </p>
            </div>
          </div>
        </div>
        <div className=" flex justify-end mx-10">
          <img src="../../assets/star.png" alt="" />
        </div>
        <div className="flex mx-40 space-x-4 items-center">
          <img src="../../assets/star4.png" alt="" />
          <p className="text-4xl font-bold">How it Works?</p>
        </div>
        <div className="flex mt-10 justify-center space-x-3">
          <div className="mt-2 ">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Choose Your
                <br />
                Warrior
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="../../assets/art1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img
            src="../../assets/arrow1.png"
            className="w-auto h-32 mt-20"
            alt=""
          />
          <div className="mt-28">
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Enter the
                <br />
                Battle Arena
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="../../assets/art2.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img src="../../assets/arrow4.png" className="w-20 h-24 " alt="" />
          <div>
            <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Countdown
                <br />
                to Chaos
              </p>
              <div>
                <img
                  className="h-8 absolute mt-10   w-auto"
                  src="../../assets/art3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <img src="../../assets/arrow3.png" alt="" />
        </div>
        <div className="flex mx-52   justify-between space-x-3">
          <img className="h-60 w-auto" src="../../assets/bro.png" alt="" />

          <div className="flex space-x-2">
            <img src="../../assets/arrow2.png" className="h-60 w-auto" alt="" />
            <div>
              <div className="border-2 border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
                <p className="text-xl text-center">
                  Battle for
                  <br />
                  Supremacy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex mx-60   justify-between">
          <div className="mr-20">
            <Link href="/lobby">
              <button className="border-2 w-60 mt-5 rounded-full border-l-8 py-2 px-3 border-[#9FC610] text-3xl">
                Play Now!!
              </button>
            </Link>
          </div>
          <div>
            <div className="border- border-[#9FC610] flex flex-col space-y-3 items-center border-r-8 border-b-4 px-8 py-14 rounded-full">
              <p className="text-xl text-center">
                Claim Your
                <br />
                NFT Prize
              </p>
              <div>
                <img
                  className="h-10 absolute mt-10   w-auto"
                  src="../../assets/art4.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div>
            <img
              src="../../assets/sidebro.png"
              className="ml-20 mt-20"
              alt=""
            />
          </div>
        </div>
        <div className="bg-[#9FC610] mt-20 py-3">.</div>
      </div>
    </main>
  );
}
