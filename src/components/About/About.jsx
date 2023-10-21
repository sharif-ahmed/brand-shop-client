import about from "../../assets/img/about.jpg"
const About = () => {
    return (
        <div  className="container mx-auto py-8 px-4 lg:px-0">
            <div  className="flex flex-col-reverse gap-4 lg:gap-0 lg:flex-row items-center justify-between">
                <div  className="flex-1">
                    <div className="lg:w-[75%] flex flex-col justify-between">
                        <h4 className="text-[#e2564d] uppercase font-semibold">About Us</h4>
                        <h2 className="text-[#1b1b1b] font-bold text-4xl leading-[44px] my-4">We Help Corporate to Manage Event</h2>
                        <p className="text-[#7A7A7A] text-[15px] leading-8 tracking-wider mb-8">Crafting exceptional corporate events tailored to your vision. Our seasoned team of professionals ensures precision and creativity in every detail. Elevate your brand and create unforgettable gatherings with our expertise.</p>
                        <div className="flex items-center gap-10 justify-center bg-[#ddd] py-8">
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">2015</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">Established</p>
                            </div>
                            <div className="w-[2px] bg-[#ccc] h-[50px] block"></div>
                            <div className="text-center">
                                <h2 className="font-bold text-4xl text-[#666666]">90</h2>
                                <p className="uppercase text-[#4d4d4d] text-[12px] tracking-wider">EMPLOYEE</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="zoom-in" className="flex-1">
                    <img className="w-full" src={about} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;