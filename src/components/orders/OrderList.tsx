import { useQuery } from "react-query";
import OrderCard from "./OrderCard";
import { getOrderData } from "../../api/orderApi";
import { OrderCardType } from "../../types/types";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import { Status } from "../../enums/enums";
import Pagination from "../common/Pagination";

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("%");

  const { data } = useQuery({
    queryKey: ["orders", statusFilter, currentPage],
    queryFn: async () => {
      const res = await getOrderData(statusFilter, currentPage);
      return res;
    },
  });
console.log('data',data);

  const tabs = [
    { label: "همه سفارشاتم", status: "%", style: "bg-dark-green" },
    { label: "منتظر دریافت در استانبول", status: Status.WAIT_FOR_IST_DELIVERY, style: "bg-orange" },
    { label: "منتظر تحویل به باربری", status: Status.WAIT_FOR_CARGO, style: "bg-dirty-yellow" },
    { label: "باربری", status: Status.WAIT_TEH_DELIVERY, style: "bg-purple" },
    { label: "رسیده به ایران", status: Status.WAIT_CUSTOMER_DELIVERY, style: "bg-light-green" },
    { label: "تحویل مشتری شده", status: Status.CUSTOMER_DELIVERED, style: "bg-[#126E83]" },
    { label: "کنسل شده", status: Status.CANCELED, style: "bg-red" },
  ];

  return (
    <div className="flex lg:flex-row flex-wrap flex-col gap-2 py-1 lg:mt-2">
      <Tab.Group>
        <Tab.List className={"flex flex-wrap justify-center lg:justify-start lg:gap-0 gap-1 lg:mb-0 mb-1"}>
          {tabs.map((tab) => (
            <Tab
              key={tab.status}
              className="text-sm outline-none"
              onClick={() => setStatusFilter(tab.status)}
            >
              {({ selected }) => (
                <div
                  className={selected ? `text-white ${tab.style} lg:rounded-t-xl rounded-t-md p-2` : `text-white ${tab.style} lg:rounded-t-xl rounded-t-md p-2 border-t border-x border-white shadow-[0_-2px_15px_-5px_rgba(4,4,4,0.9)]`}
                >
                  <p className="px-2">{tab.label}</p>
                </div>
              )}
            </Tab>
          ))}
        </Tab.List>

        <Tab.Panels className="lg:w-[1300px] lg:h-[680px] bg-light-purple rounded-bl-xl rounded-tl-xl rounded-br-xl lg:rounded-tr-none rounded-tr-xl py-2">
          {tabs.map((tab) => (
            <Tab.Panel
              key={tab.status}
              className="flex lg:flex-row flex-grow lg:h-[620px] lg:justify-start lg:mr-8 justify-center flex-wrap lg:gap-7"
            >
              {data?.data?.DataRows.map((dataItem: OrderCardType) => (
                <OrderCard key={`${dataItem.nOrderID}-${dataItem.nRowNo}`} dataItem={dataItem} />
              ))}
            </Tab.Panel>
          ))}
          {data?.data?.DataRows && data?.data?.DataRows.length > 0 ? (
            <Pagination
              onClickP={() => {
                setCurrentPage((page) => page - 1);
              }}
              currentPage={currentPage}
              onClickN={() => {
                setCurrentPage((page) => page + 1);
              }}
              npage={Math.ceil(data?.data?.TotalCount / 10)}
            />
            ) : (
              ""
          )}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default OrderList;
