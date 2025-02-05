import Footer from "@/components/Footer";
import Related from "@/components/Related";
import Search from "@/components/search";
import History from "@/components/history";
import Header from "@/components/Header";
import Bodytypesearch from "@/components/Bodytypesearch";
import Maker from "@/components/Maker";
import Prefectures from "@/components/prefectures";
import Specialconditionsearch from "@/components/Specialconditionsearch";
import Popularkeywordsearch from "@/components/Popularkeywordsearch";
import Recommendedcars from "@/components/recommendedcars";
import Othercontent from "@/components/Othercontent";

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
      <Recommendedcars/>
    </div>
    <Othercontent/>
    <Footer/>
    <Related/>
    
    </>
  
  );
}