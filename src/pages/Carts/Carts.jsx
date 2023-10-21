/* eslint-disable no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2'

const Carts = () => {

    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    useEffect(() => {
        fetch("https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/carts")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data);
            })
            .catch((error) => console.log(error))
    }, [])

    const handleDeleteCart = (_id) => {
        const requestOptions = {
            method: "DELETE",
            headers: {
                'content-type': 'application/json'
            }
        }

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

                fetch(`https://brand-shop-server-dw8vl5gg3-sharif-ahmeds-projects.vercel.app/carts/product/${_id}`, requestOptions)
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your cart has been deleted.',
                                'success'
                            )
                            const filterProducts = products.filter((product) => product._id !== _id);
                            setProducts(filterProducts);
                        } else {
                            alert(data.message);
                        }
                    })

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
        <div className='container max-w-7xl mx-auto py-8'>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Product Image</th>
                            <th>Product </th>
                            <th>Item Price</th>
                            <th>Product Type</th>
                            {/* <th>Total Price</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */

                            user && products.length > 0 ?
                                products?.map((product, idx) => {
                                    return (
                                        <tr key={idx}>

                                            <td>
                                                <div className="avatar">
                                                    <div className="mask  w-40 h-20 rounded-none">
                                                        <img src={product.productImage} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                            </td>

                                            <td>
                                                <div className="flex items-center">
                                                    <div className=''>
                                                        <div className="font-bold">{product.productName}</div>
                                                        <div className="text-sm opacity-50 mt-2 uppercase">{product.brandName}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className=''>
                                                        <div className="font-bold">${product.productPrice}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className='uppercase'>
                                                {product.productType}
                                                <br />
                                                {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
                                            </td>
                                            {/* <td>Purple</td> */}
                                            <th>
                                                <button onClick={() => handleDeleteCart(product._id)} className="btn btn-ghost btn-xs
                                                 hover:bg-[#d22e2e] hover:text-[#fff]">Delete</button>
                                            </th>
                                        </tr>
                                    )
                                }) : ''
                        }
                    </tbody>

                </table>
                {
                    products?.length <= 0 ? (
                        <div className='flex items-center justify-center h-[50vh]'>
                            <h2 className='text-center font-medium text-lg'>There is no items in your cart</h2>
                        </div>
                    ) : ""
                }
            </div>
        </div>
    );
};

export default Carts;