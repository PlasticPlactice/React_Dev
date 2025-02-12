type Props = {
    title: string,
    detail: string,
    maker_name: string,
}
const Detail_Title = ({title, detail, maker_name}: Props) => {
    return ( 
        <div className="w-max h-8 mb-30 items-end flex justify-start">
            <h2 className="text-custom3 font-bold">{maker_name}　</h2>
            <h2 className="text-custom3 font-bold">{title}</h2>
            <span className="pl-6 text-xs">{detail}</span>
        </div>
    );
}

export default Detail_Title;