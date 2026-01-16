// import HomePage from "@/components/body/HomePage";  
import Header from "@/components/Header";
import Dashboard from "@/app/dashboard/page";
import Footer from "@/components/Footer";
import Body from "@/components/body/Body";
import Link from "next/link";
export default function Homes() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Header />
          <Body />
          <Footer />
          <Link href="/dashboard">Go to Dashboard</Link>
        </main>
      </div>
    </>
  );
}
