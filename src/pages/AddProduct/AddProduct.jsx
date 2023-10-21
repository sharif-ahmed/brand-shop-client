/* eslint-disable no-unused-vars */

import Swal from 'sweetalert2'

const AddProduct = () => {


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    const handleAddProduct = (event) => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const brandName = form.brandName.value;
        const productImage = form.productImage.value;
        const productType = form.productType.value;
        const productPrice = form.productPrice.value;
        const productRating = form.productRating.value;
        const productDescription = form.productDescription.value;


        const product = {
            productName,
            brandName,
            productImage,
            productType,
            productPrice,
            productRating,
            productDescription
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        };

        fetch('https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/product', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    swalWithBootstrapButtons.fire(
                        'Added!',
                        'Your product has been addeded.',
                        'success'
                    )
                    form.productRating.value = "";
                    form.productType.value = "";
                    form.reset();
                }
            })
            .catch((error) => console.error(error));

    }

    return (
        <div className="container max-w-5xl mx-auto py-12 px-2 lg:px-0">
            <div className="border rounded-md p-4 lg:p-8">
                <div className='mx-auto'>
                    <h3 className="text-center uppercase text-[#1b1b1b] tracking-wide
                            lg:text-2xl font-medium relative pl-1 lg:pl-4 lg:pr-4 inline-block before:absolute before:w-[4px]
                            before:bg-[#d22e2e] before:left-0 before:top-0 before:bottom-0
                            after:absolute after:w-[4px] mb-4">Add Product Information</h3>
                    <p className="text-[#7A7A7A] text-[14px] leading-7 font-thin
                         border-t-[1px] border-[#ccc] pt-8 relative after:absolute after:bg-chevronDown
                          after:left-12 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat"></p>

                    <div>
                        <form onSubmit={handleAddProduct}>
                            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-5">
                                <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Product Name</span>
                                    </label>
                                    <input name='productName' type="text" placeholder="Product Name" className="input input-bordered outline-none" required />
                                </div>
                                {/* <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Brand Name</span>
                                    </label>
                                    <input name='brandName' type="text" placeholder="Brand Name" className="input input-bordered" required />
                                </div> */}
                                <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Brand Name</span>
                                    </label>
                                    {/* <input name='productType' type="text" placeholder="Product Type" className="input input-bordered" required /> */}
                                    <select name='brandName' className="input input-bordered pr-11">
                                        <option value="" disabled
                                            selected hidden className="py-1">Select Brand</option>
                                        <option value="bmw" className="py-2">BMW</option>
                                        <option value="ferrari" className="py-2">FERRARI</option>
                                        <option value="volvo" className="py-2">VOLVO</option>
                                        <option value="mercedes-benz" className="py-2">MERCEDES-BENZ</option>
                                        <option value="audi" className="py-2">AUDI</option>
                                        <option value="honda" className="py-2">HONDA</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-5">
                                <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Product Image</span>
                                    </label>
                                    <input name='productImage' type="text" placeholder="Product Image Url" className="input input-bordered outline-none" required />
                                </div>
                                <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Product Type</span>
                                    </label>
                                    {/* <input name='productType' type="text" placeholder="Product Type" className="input input-bordered" required /> */}
                                    <select name='productType' className="input input-bordered pr-11">
                                        <option value="" disabled
                                            selected hidden className="py-1">Select Type</option>
                                        <option value="convertible" className="py-2">Convertible</option>
                                        <option value="sedan" className="py-2">Sedan</option>
                                        <option value="coupe" className="py-2">Coupe</option>
                                        <option value="crossover" className="py-2">Crossover</option>
                                        <option value="hatchback" className="py-2">Hatchback</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-5">
                                <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Product Price</span>
                                    </label>
                                    <input name='productPrice' type="text" placeholder="Product Price" className="input input-bordered outline-none" required />
                                </div>
                                <div className="form-control lg:flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Rating</span>
                                    </label>
                                    {/* <input name='productRating' type="text" placeholder="Brand Name" className="input input-bordered" required /> */}
                                    <select name='productRating' className="input input-bordered">
                                        <option value="" disabled
                                            selected hidden className="py-1">Select Rating</option>
                                        <option value="5" className="py-2">5</option>
                                        <option value="4" className="py-2">4</option>
                                        <option value="3" className="py-2">3</option>
                                        <option value="2" className="py-2">2</option>
                                        <option value="1" className="py-2">1</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex gap-4 items-center justify-between mb-5">
                                <div className="form-control flex-1 w-full">
                                    <label className="label">
                                        <span className="label-text tracking-widest ">Product Description</span>
                                    </label>
                                    <textarea name="productDescription" placeholder="Description" className="input input-bordered outline-none h-[30vh] pt-4" required />
                                </div>

                            </div>
                            <div className="form-control mt-12">
                                <button type="submit" className="uppercase tracking-widest
                                        text-[14px]  font-bold py-3 px-10 
                                        hover:text-white bg-white
                                        border rounded-lg
                                        border-[#1b1b1b] text-[#1b1b1b]  hover:bg-[#d22e2e]
                                         hover:border-[#d22e2e]
                                        hover:transition ease-in-out">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProduct;