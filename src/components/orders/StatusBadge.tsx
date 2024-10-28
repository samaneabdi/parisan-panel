import React from "react";
import { Status } from "../../enums/enums"

type StatusBadgeProps = {
    status: string;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    const getStatusInfo = (status: string) => {
        switch (status) {
            case Status.WAIT_FOR_IST_DELIVERY:
                return { title: "منتظر دریافت در استانبول", color: 'text-black' };
            case Status.WAIT_FOR_CARGO:
                return { title: "منتظر تحویل به باربری", color: 'text-black' };
            case Status.WAIT_TEH_DELIVERY:
                return { title: "باربری", color: 'text-purple' };
            case Status.WAIT_CUSTOMER_DELIVERY:
                return { title: "رسیده به ایران", color: 'text-black' };
            case Status.CUSTOMER_DELIVERED:
                return { title: "تحویل مشتری شده", color: 'text-dark-green' };////
            case Status.CANCELED:
                return { title: "کنسل شده", color: 'text-red' };
        }
      };
    
      const { title, color } = getStatusInfo(status);
    
      return (
        <span className={`text-sm text-center font-semibold ${color}`}>
          {title}
        </span>
      );
}

export default StatusBadge;