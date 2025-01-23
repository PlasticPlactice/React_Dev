import Footer from "@/components/Footer";
import Search from "@/components/search";
import History from "@/components/history";
import Header from "@/components/Header";
import Bodytypesearch from "@/components/Bodytypesearch";
import Maker from "@/components/Maker";
import Prefectures from "@/components/prefectures";
import Specialconditionsearch from "@/components/Specialconditionsearch";
import Popularkeywordsearch from "@/components/Popularkeywordsearch";

export default function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <History/>
    <div className="bg-white">
      <Maker/>
      <Prefectures/>
      <Bodytypesearch/>
      <Specialconditionsearch/>
      <Popularkeywordsearch/>
    </div>
    <Footer/>
    </>
  
  );
}