import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

const Footer = () => {
    const profile = useSelector((state: RootState) => state.login.profile);

    return(
        <div className="w-full h-20 flex flex-row bg-light-purple rounded-lg py-2 px-6">
            <div className="w-2/3 flex flex-col justify-between font-bold py-1 text-parisan-color-1">
                <div className="flex flex-row gap-2">
                    <p>شماره تماسم:</p>
                    <p>{profile.Tel}</p>
                </div>
                <div className="flex flex-row gap-2">
                    <p>آدرسم:</p>
                    <p>{profile.Address}</p>
                </div>
            </div>
            <div className="w-1/3 text-left">
                <h1 className="text-parisan-color-1 text-3xl font-extrabold mt-4">
                    آنلاین شاپ پریسان
                </h1>
            </div>
        </div>
    )
}

export default Footer;