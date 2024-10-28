import { OrderCardType } from "../../types/types";
import Icon from "../common/Icon";
import Points from "./Points";
import StatusBadge from "./StatusBadge";

const OrderCard = ({ dataItem }: { dataItem: OrderCardType }) => {    
    
    return(
        <div className="w-56 lg:h-72 rounded-xl flex flex-col border border-light-purple shadow-md pt-2 mb-2 group">
            <div className="relative w-36 h-56 mx-auto">
                {dataItem.Image ?
                    <img
                        src= {`data:image/jpeg;base64,${dataItem.Image}`}
                        className="rounded-lg w-36 h-52"
                        alt="Image"
                    />
                    :
                    <img
                        src= './NullPic.jpg'
                        className="rounded-lg w-36 h-52"
                        alt="Image"
                    />
                }
            </div>
            <div className="flex max-lg:flex-wrap max-lg:p-3 lg:pl-1 w-full h-full justify-between mt-0.5">
                <div className="w-full lg:mr-2">
                        <div className="flex flex-wrap flex-col justify-around gap-1 lg:my-2 w-full max-lg:border max-lg:py-4 max-lg:rounded-lg">
                            <div className="flex flex-row justify-center gap-5 text-black">
                                <span className=" flex flex-row gap-1 font-semibold text-sm">
                                    {dataItem.nOrderID + "-" + dataItem.nRowNo}
                                    <Icon
                                        width={15}
                                        height={15}
                                        iconUrl={"icons/Order.svg"}
                                        customeClass="mb-0.5"
                                    />
                                </span>
                                <span className="flex flex-row gap-1 font-semibold text-sm">
                                    {dataItem.strOrderDate}
                                    <Icon
                                        width={15}
                                        height={15}
                                        iconUrl={"icons/Calendar.svg"}
                                        customeClass="mb-0.5"
                                    />
                                </span>
                            </div>
                            <StatusBadge status={dataItem.Status} />
                        </div>
                </div>
            </div>
        </div>
    )
}

export default OrderCard;