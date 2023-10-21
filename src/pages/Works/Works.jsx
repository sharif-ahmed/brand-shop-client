/* eslint-disable no-unused-vars */
import about from "../../assets/img/about.jpg"
import work1 from "../../assets/img/event-work-1.jpg"
import work2 from "../../assets/img/event-work-2.jpg"
import work3 from "../../assets/img/event-work-4.jpg"
import Footer from "../../components/Footer/Footer";

const Works = () => {
    return (
        <div className="container mx-auto py-8 px-4 lg:px-0">
            <div className="flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row items-center justify-between">
                <div className="flex-1">
                    <div className="lg:w-[75%] flex flex-col justify-between">
                        <h4 className="text-[#e2564d] tracking-widest text-[14px] uppercase font-semibold">Full-service Production</h4>
                        <h2 className="text-[#1b1b1b] font-bold text-4xl leading-[44px] my-4">Hexatron Factory Opening Ceremony</h2>
                        <p className="text-[#7A7A7A] text-[15px] leading-8 tracking-wider mb-8">Crafting exceptional corporate events tailored to your vision. Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
                        <div className="flex items-center gap-10 justify-center bg-[#ddd] py-8">
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">2015</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Year</p>
                            </div>
                            <div className="w-[2px] bg-[#ccc] h-[50px] block"></div>
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">290</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Arrangement</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full" src={work1} alt="" />
                </div>
            </div>
            <div className="flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row-reverse items-center justify-between mt-[60px]">
                <div className="flex-1 flex justify-end">
                    <div className="lg:w-[75%] flex flex-col justify-between">
                        <h4 className="text-[#e2564d] tracking-widest text-[14px] uppercase font-semibold">Food & Beverages</h4>
                        <h2 className="text-[#1b1b1b] font-bold text-4xl leading-[44px] my-4">APA Classic Company Picnic</h2>
                        <p className="text-[#7A7A7A] text-[15px] leading-8 tracking-wider mb-8">Crafting exceptional corporate events tailored to your vision. Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
                        <div className="flex items-center gap-10 justify-center bg-[#ddd] py-8">
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">2016</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Year</p>
                            </div>
                            <div className="w-[2px] bg-[#ccc] h-[50px] block"></div>
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">490</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Arrangement</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full" src={work2} alt="" />
                </div>
            </div>
            <div className="flex gap-4 lg:gap-0 flex-col-reverse lg:flex-row items-center justify-between mt-[60px]">
                <div className="flex-1">
                    <div className="lg:w-[75%] flex flex-col justify-between">
                        <h4 className="text-[#e2564d] tracking-widest text-[14px] uppercase font-semibold">Event Management</h4>
                        <h2 className="text-[#1b1b1b] font-bold text-4xl leading-[44px] my-4">Delican Energy Press Event</h2>
                        <p className="text-[#7A7A7A] text-[15px] leading-8 tracking-wider mb-8">Crafting exceptional corporate events tailored to your vision. Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
                        <div className="flex items-center gap-10 justify-center bg-[#ddd] py-8">
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">2017</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Year</p>
                            </div>
                            <div className="w-[2px] bg-[#ccc] h-[50px] block"></div>
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">650</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Arrangement</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img className="w-full" src={work3} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Works;