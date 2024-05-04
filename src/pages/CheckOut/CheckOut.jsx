import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const CheckOut = () => {
    const service = useLoaderData();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { title, _id, service_id, price } = service;
    const { user } = useContext(AuthContext);

    const handleCheckOut = (data) => {
        const serviceData = { ...data, service: _id }
        console.log(serviceData);
    }

    return (
        <div>
            <h3>{title}</h3>
            <form onSubmit={handleSubmit(handleCheckOut)} className="flex flex-col gap-6 mx-auto px-4 lg:px-20 py-6 lg:py-10 bg-[#F3F3F3] shadow-lg shadow-[#3c3939] text-[#150936] rounded-lg my-8">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="name">Your Name</label>
                        <input
                            defaultValue={user?.displayName}
                            {...register("name", {
                                required:
                                    { value: true, message: "You must provide Your Name." }
                            })}
                            className="p-2 rounded-lg bg-white" type="text" name="name" id="name" placeholder="Your Name" />
                        {
                            errors.name && <p className="text-red-700">{errors.name.message}</p>
                        }
                    </div>
                    {/* Price */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="price">Due</label>
                        <input
                            value={price} readOnly
                            {...register("price", {
                                required:
                                    { value: true, message: "You must provide Price." }
                            })}
                            className="p-2 rounded-lg bg-white" type="number" name="price" id="price" placeholder="Your Price" />
                        {
                            errors.price && <p className="text-red-700">{errors.price.message}</p>
                        }
                    </div>
                    {/* Phone Number */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="phone">Phone Number</label>
                        <input
                            // defaultValue={}
                            {...register("phone", {
                                required:
                                    { value: true, message: "You must provide Your Phone Number." }
                            })}
                            className="p-2 rounded-lg bg-white" type="tel" name="phone" id="phone" placeholder="Your Phone Number" />
                        {
                            errors.phone && <p className="text-red-700">{errors.phone.message}</p>
                        }
                    </div>
                    {/* Email */}
                    <div className="w-full flex flex-col gap-3">
                        <label className="font-medium" htmlFor="email">Your Email</label>
                        <input
                            defaultValue={user?.email}
                            {...register("email", {
                                required:
                                    { value: true, message: "You must provide Your Email Address." }
                            })}
                            className="p-2 rounded-lg bg-white" type="email" name="email" id="email" placeholder="Your Email Address" />
                        {
                            errors.email && <p className="text-red-700">{errors.email.message}</p>
                        }
                    </div>
                </div>
                <div className="lg:col-span-2 w-full flex flex-col gap-3">
                    <label className="font-medium" htmlFor="message">Your Message</label>
                    <textarea
                        {...register("message", {
                            required:
                                { value: true, message: "You must write something." }
                        })}
                        className="p-2 rounded-lg bg-white" type="text" name="message" id="message" placeholder="Write Your Message" />
                    {
                        errors.message && <p className="text-red-700">{errors.message.message}</p>
                    }
                </div>
                <button type="submit" className="px-3 py-2 font-bold rounded-lg bg-[#FF3811] text-white border border-[#FF3811] hover:text-[#FF3811] hover:bg-transparent transition duration-500">Confirm Order</button>
            </form>
        </div>
    );
};

export default CheckOut;