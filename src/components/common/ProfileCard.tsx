import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const ProfileCard = () =>{
    const profile = useSelector((state: RootState) => state.login.profile);

    return(
        <div className="lg:w-3/5 w-full lg:mx-auto flex lg:flex-row flex-col gap-3 justify-start items-center">
            <div className="flex flex-col justify-between w-72 h-20 rounded p-4 pb-2 lg:shadow-none shadow-md">
                    <div className="flex flex-row text-parisan-color-1 justify-center">
                        <img className="ml-2 w-6 h-6" src="/icons/CustomerClab.png" alt="" />
                        <h3 className="text-parisan-color-1">امتیاز باشگاه مشتریانم</h3>
                    </div>
                <p className="text-parisan-color-1 font-bold text-center">{profile.CustomerClubPoints}</p>
            </div>

            <div className="flex flex-col justify-between w-72 h-20 rounded p-4 pb-2 lg:shadow-none shadow-md">
                    <div className="flex flex-row text-parisan-color-1 justify-center">
                        <img className="ml-2 w-6 h-6" src="/icons/Discount.png" alt="" />
                        <h3 className="text-parisan-color-1">تخفیف معرفی دوستانم</h3>
                    </div>
                    <p className="text-parisan-color-1 font-bold text-center"> {Number(profile.ReferalPoints) > 0 && Number(profile.ReferalPoints).toLocaleString()}  تومان</p>
            </div>

            <div className="flex flex-col justify-between w-72 h-20 rounded p-4 pb-2 lg:shadow-none shadow-md">
                    <div className="flex flex-row text-parisan-color-1 justify-center">
                        <img className="ml-2 w-6 h-6" src="/icons/Average.png" alt="" />
                        <h3 className="text-parisan-color-1">میانگین ده فاکتور آخرم</h3>
                    </div>
                    <p className="text-parisan-color-1 font-bold text-center">{profile.Last10OrderAvg} لیر</p>
            </div>
        </div>
    )
}

export default ProfileCard;