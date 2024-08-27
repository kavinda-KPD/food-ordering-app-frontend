import downloadPic from "../assets/appDownload.png"
import landingPic from "../assets/landing.png"
const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into the takeway of your food.
                </h1>
                <span className="text-xl">Order food from your favorite restaurants</span>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingPic} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                        Order takeway even faster !
                    </span>
                    <span>
                        Download the app and order food from your favorite restaurants in just a few clicks
                    </span>
                    <img src={downloadPic} />
                </div>
            </div>
        </div>
    )
}

export default HomePage