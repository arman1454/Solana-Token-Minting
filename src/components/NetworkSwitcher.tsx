//"use client"; // Required for Next.js 13+ with the App Router

import { FC } from "react";
import { useNetworkConfiguration } from "@/contexts/NetworkConfigurationProvider";
import { Select, SelectItem } from "@heroui/react";
import dynamic from "next/dynamic";

const NetworkSwitcher: FC = () => {
  const { networkConfiguration, setNetworkConfiguration } = useNetworkConfiguration();

  // Define the network options
  const networks = [
    { value: "mainnet-beta", label: "Mainnet" },
    { value: "devnet", label: "Devnet" },
    { value: "testnet", label: "Testnet" },
  ];

  return (
    <Select
      aria-label="Select a Network"
      placeholder="Select a Network"
      selectedKeys={[networkConfiguration]} // Set the selected value
      onChange={(e) => setNetworkConfiguration(e.target.value || "devnet")} // Update state on change
      radius="full"
      className="max-w-xs purple-dark text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text"
    >
      {networks.map((network) => (
        <SelectItem key={network.value} value={network.value} className="purple-dark text-transparent bg-gradient-to-r from-[#C4A44D] via-[#f7f595] to-[#C4A44D] bg-clip-text">
          {network.label}
        </SelectItem>
      ))}
    </Select>
  );
};

export default dynamic(() => Promise.resolve(
  NetworkSwitcher), {
  ssr: false,
}
)