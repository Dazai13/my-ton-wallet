import Image from "next/image";
import Transactions from "./pages/transactions";
import WalletComponent from "./pages/wallet";

export default function Home() {
  return (
    <div>
        <WalletComponent />
        <Transactions />
    </div>
  );
}
