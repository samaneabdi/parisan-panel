import axios from "axios";

export async function getOrderData(statusFilter: string, currentPage: number) {
    console.log('sss',statusFilter);
    return axios.post("api/getorderdata", 
        {
            HowManyDays: "-5000",
            StatusFilter: statusFilter,
            PageNumber : currentPage,
            RowCount: "10"
        },
        {
        headers: {
            "Content-Type": "application/json",
        },
        });    
}