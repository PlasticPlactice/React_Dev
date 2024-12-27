import Audi from "./maker2/AUDI"
import Benz from "./maker2/BENZ"
import Bmw from "./maker2/BMW"
import Land_rover from "./maker2/LAND_ROVER"
import Mini from "./maker2/MINI"
import Peugeot from "./maker2/PEUGEOT"
import Porsche from "./maker2/PORSCHE"
import Volkswargen from "./maker2/VOLKSWARGEN"
import Volvo from "./maker2/VOLVO"
import World from "./maker2/WORLD"

const Maker_search2 = () => {
    return(
        <ul className="flex justify-start bg-slate-50">
            <li className="w-24 h-28">
                <World></World>
            </li>
            <li className="w-24 h-28">
                <Benz></Benz>
            </li>
            <li className="w-24 h-28">
                <Bmw></Bmw>
            </li>
            <li className="w-24 h-28">
                <Volkswargen></Volkswargen>
            </li>
            <li className="w-24 h-28">
                <Audi></Audi>
            </li>
            <li className="w-24 h-28">
                <Mini></Mini>
            </li>
            <li className="w-24 h-28">
                <Porsche></Porsche>
            </li>
            <li className="w-24 h-28">
                <Volvo></Volvo>
            </li>
            <li className="w-24 h-28">
                <Peugeot></Peugeot>
            </li>
            <li className="w-24 h-28">
                <Land_rover></Land_rover>
            </li>
        </ul>
    )
}

export default Maker_search2