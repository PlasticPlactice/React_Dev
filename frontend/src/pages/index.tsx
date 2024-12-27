import Footer from "@/components/Footer";
import Search from "@/components/search";
import History from "@/components/history";
import Header from "@/components/Header";
import Maker from "@/components/Maker";


export default function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <div className="bg-white">
      <Maker/>
      <History/>
    </div>
    <Footer/>
    </>
  
  );
}