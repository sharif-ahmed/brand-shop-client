
import author from '../../assets/img/about.jpg';

const BlogCard = () => {
    return (
        <div className="flex">
            <div>
                <div>
                    <img src={author} alt="" />
                </div>
                <p className="text-[#7A7A7A] text-[14px] leading-7 mb-10 font-thin
                         border-t-[1px] border-[#ccc] pt-8 relative after:absolute after:bg-chevronDown
                          after:left-8 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat
                        ">Share This</p>
            </div>
        </div>
    );
};

export default BlogCard;