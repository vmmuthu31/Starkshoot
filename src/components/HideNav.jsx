import React from "react";
import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { connect, disconnect } from "@argent/get-starknet";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";
import { WalletDetails } from "./WalletDetails";
import { useNavigate } from "react-router-dom";
import { Contract, RpcProvider } from "starknet";
import { feltToString, stringToFelt } from "../../config/util";
// import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setConnectionDetails } from "../../slices/connectionReducer";

function HideNav() {
  const WW_URL = "https://web.argent.xyz";
  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function toBN(value) {
    try {
      return BigInt(value);
    } catch (e) {
      console.error("Invalid input for toBN:", value);
      throw e;
    }
  }

  const [connection, setConnection] = useState();
  // const navigate = useNavigate();
  const registerusr = async () => {
    console.log(">> interactWithContract started");
    try {
      const provider = new RpcProvider({
        nodeUrl:
          "https://starknet-goerli.g.alchemy.com/v2/z_ZWlsOXWnNNXqo9hveLbeX4QDNycdA9",
      });
      const contAddress =
        "0x0137309735dc51785ec0e0be1553448a44111b4c0e98ab48148c8b2635323f72";
      const ContAbi = await provider.getClassAt(contAddress);
      const newContract = new Contract(
        ContAbi.abi,
        contAddress,
        connection.account
      );

      const address = connection.account.address;

      const value = {
        level: 200,
        playerSkin: stringToFelt("blue"),
        gun: stringToFelt("Military"),
        car: stringToFelt("Lamboguni"),
        skin: stringToFelt("white"),
      };

      console.log("contract details", newContract);

      const response = await newContract.register_user(address, value);

      console.log(">> firstresponse", response);
      if (response) {
        navigateTo("/lobby");
      }
      return true;
    } catch (error) {
      console.log("error", error);
      return false;
    }
  };

  const navigation = [
    { name: "How it works", href: "/" },
    { name: "Marketplace", href: "/" },
  ];
  useEffect(() => {
    const connectToStarknet = async () => {
      const connection = await connect({
        modalMode: "neverAsk",
        webWalletUrl: WW_URL,
      });

      if (connection && connection.isConnected && connection.account) {
        // setConnection(connection);

        dispatch(
          setConnectionDetails({
            provider: connection.account,
            address: connection.account.address,
          })
        );
      }
    };
    connectToStarknet();
  }, []);

  // }, []);

  // useEffect(() => {
  //   if (connection) {
  //     navigate("/lobby");
  //   }
  // }, [connection]);
  return <div className="bg-[#1F1D29] text-white"></div>;
}

export default HideNav;
