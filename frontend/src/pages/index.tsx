import Footer from "@/components/Footer";
import Search from "@/components/search";
import History from "@/components/history";
import Header from "@/components/Header";
import Bodytypesearch from "@/components/Bodytypesearch";
import Maker from "@/components/Maker";
import Specialconditionsearch from "@/components/Specialconditionsearch";
import Popularkeywordsearch from "@/components/Popularkeywordsearch";
import Recommendedcars from "@/components/recommendedcars";

export default function Home() {
  return (
    <>
    <Header/>
    <Search/>
    <History/>
    <div className="bg-white">
      <Maker/>
      <Bodytypesearch/>

      <Specialconditionsearch/>
      <Popularkeywordsearch/>
      <Recommendedcars/>
    </div>
    <Footer/>
    </>
  
  );
}