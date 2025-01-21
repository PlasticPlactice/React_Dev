import Footer from "@/components/Footer";
import Search from "@/components/search";
import History from "@/components/history";
import Header from "@/components/Header";
import Maker from "@/components/Maker";
import Prefectures from "@/components/prefectures";


export default function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <div className="bg-white">
      <History/>
      <Maker/>
      <Prefectures/>
    </div>
    <Footer/>
    </>
  
  );
}