import React from "react";

export const WalletDetails = ({ wallet }) => {
  return (
    <div className="items-center justify-center space-y-4">
      <td className=" px-6 pt-3">Add: {wallet.account.address}</td>
    </div>
  );
};
