import Footer from "@/components/Footer";
import Related from "@/components/Related";
import History from "@/components/history";
import Header from "@/components/Header";
import Bodytypesearch from "@/components/Bodytypesearch";
import Maker from "@/components/Maker";
import Prefectures from "@/components/prefectures";
import Specialconditionsearch from "@/components/Specialconditionsearch";
import Popularkeywordsearch from "@/components/Popularkeywordsearch";
import Recommendedcars from "@/components/recommendedcars";
import Othercontent from "@/components/Othercontent";
import Newusedcars from "@/components/newusedcars";
import Overallpopularityranking from "@/components/Overallpopularityranking";
import Popularityrankingbytype from "@/components/Popularityrankingbytype";
import Usedcardealership from "@/components/Usedcardealership";
import Usedcardealership2 from "@/components/Usedcardealership2";
import Top from "@/components/Top";

export default function Home() {
  return (
    <div className="text-black">
    <Header/>
    <Top/>
    <History/>
    <div className="bg-white">
      <Maker/>
      <Bodytypesearch/>
      <Usedcardealership/>
      <Prefectures/>
      <Specialconditionsearch/>
      <Popularkeywordsearch/>
      <Recommendedcars/>
      <Newusedcars/>
      <Overallpopularityranking/>
      <Popularityrankingbytype/>
      <Usedcardealership2/>
      <Prefectures/>
    </div>
    <Othercontent/>
    <Footer/>
    <Related/>
    
    </div>
  
  );
}