import { SignIn } from "../components/SignIn"
import goodFace from "../assets/images/girlImg.png"
import { ReactComponent as Star } from "../assets/icons/star.svg"
import { ReactComponent as Arrow } from "../assets/icons/arrow_circle_down_icon.svg"

export const Login = () => {
    return (
        <div className="min-h-screen w-full flex items-center max-w-[1440px] mx-auto">
            <SignIn />
            <div className="hidden min-[900px]:block w-1/2 pr-6 py-4">
                <div className="relative max-w-[696px]">
                    <img src={goodFace} alt="Good Face" />
                    <div className="w-full bg-[#0C111D4D] absolute -bottom-1 backdrop-blur-[2px] lg:backdrop-blur-sm xl:backdrop-blur-md rounded-b-[20px] p-8 flex flex-col gap-y-8">
                        <p className="text-3xl font-semibold">“Untitled has saved us thousands of hours of work. We're able to spin up projects  faster and take on more clients.”</p>
                        <div className="flex flex-col gap-y-3">
                            <div className="flex justify-between w-full">
                                <p className="text-3xl font-semibold tracking-[-2%] leading-[44px]">Lula Meyers</p>
                                <div className="flex gap-x-1">
                                    {Array(5).fill(null).map((_, index) => <Star key={index} />)}
                                </div>
                            </div>

                            <div className="flex justify-between">
                                <div>
                                    <p className="text-lg font-semibold">Product Manager, Hourglass</p>
                                    <p className="font-medium">Web Design Agency</p>
                                </div>
                                <div className="flex gap-x-8">
                                    <div className="rotate-90 cursor-pointer">
                                        <Arrow />
                                    </div>
                                    <div className="-rotate-90 cursor-pointer">
                                        <Arrow />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
