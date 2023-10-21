/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductDetails = () => {

    const { id } = useParams();

    const [product, setProduct] = useState();

    const navigate = useNavigate()

    const {
        productName,
        brandName,
        productImage,
        productType,
        productPrice,
        productRating,
        productDescription
    } = product || {};


    useEffect(() => {
        fetch(`https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/products/product/${id}`)
            .then((res) => res.json())
            .then((data) => setProduct(data))
    }, [id])


    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    const handleAddToCart = () => {

        const cart = {
            productName,
            brandName,
            productImage,
            productType,
            productPrice,
            productRating,
            productDescription
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cart)
        };

        fetch('https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/cart', requestOptions)
            .then((res) => res.json())
            .then((data) => {
                if (data.acknowledged) {
                    swalWithBootstrapButtons.fire(
                        'Added!',
                        'Your product has been added to cart.',
                        'success'
                    )
                }
            })
            .catch((error) => console.error(error));
    }


    const handleDeleteProduct = () => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You want to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/products/${product._id}`, requestOptions)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your product has been deleted.',
                                'success'
                            )
                            navigate("/shop");
                        }
                    })
                    .catch((error) => console.error(error));

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary product is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <div className="container max-w-4xl mx-auto py-12">
            <div className="group mb-5 border shadow-sm py-4 px-5 pb-8 rounded-md">
                <div className="mb-2 ">
                    <img className="w-full h-[80vh] object-center rounded-md" src={productImage} alt="Shoes" />
                </div>
                <div className="">
                    <div className="flex items-center justify-between">
                        <p className="text-[10px] mt-6 mb-4 font-thin uppercase">{brandName}</p>
                        <p className="text-[10px] mt-6 mb-4 font-thin uppercase">Type: {productType}</p>
                    </div>

                    <h2 className="text-[#1b1b1b] font-medium
                     mt-3 mb-3 text-base relative before:absolute before:top-0
                     before:left-0 before:bottom-0 before:bg-[#d22e2e] before:w-[3px] 
                     before:mr-[10px] before:inline-block pl-2 uppercase">{productName}</h2>

                    {/* <p className="text-[#7A7A7A] text-[14px] leading-7 font-thin
                         border-t-[1px] border-[#ccc] pt-1 mb-4 relative after:absolute after:bg-chevronDown
                          after:left-12 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat"></p> */}

                    <div className="flex justify-between items-center mt-3">
                        <p className="text-[#3b3b3b] py-1 text-lg tracking-wide
                     font-medium inline-block rounded-full ">${productPrice} <span className="text-[12px]">USD</span> </p>
                        <div className="rating rating-xs">
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked={productRating == 1} />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked={productRating == 2} />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked={productRating == 3} />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked={productRating == 4} />
                            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked={productRating == 5} />
                        </div>
                    </div>
                    <div className="flex items-center justify-between py-6">
                        <a onClick={handleAddToCart} className="hover:bg-[#d22e2e] hover:border-[#d22e2e] 
                        py-2 px-3 text-sm uppercase border-[#1b1b1b] text-[#1b1b1b] 
                     font-medium inline-block hover:text-white 
                     rounded-full border" href="#">Add To Cart</a>
                        <a onClick={handleDeleteProduct} className="hover:bg-[#d22e2e] hover:border-[#d22e2e] 
                        py-2 px-3 text-sm uppercase border-[#1b1b1b] text-[#1b1b1b] 
                     font-medium inline-block hover:text-white 
                     rounded-full border" href="#">Delete</a>
                    </div>
                    <div>
                        <p className="text-[#7A7A7A] text-[14px] leading-7 font-thin
                         border-t-[1px] border-[#ccc] pt-8 relative after:absolute after:bg-chevronDown
                          after:left-12 after:top-[-1px] after:bottom-0 after:w-[15px] after:h-[7px] after:bg-no-repeat"></p>
                        <p>{productDescription}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;