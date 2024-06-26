import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Booking from "./Booking";
// import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const axiosSecure = useAxiosSecure();
    // const url = `https://car-doctor-server-zeta-gules.vercel.app/bookings?email=${user?.email}`;
    const url = `/bookings?email=${user?.email}`;

    useEffect(() => {
        // axios.get(url, { withCredentials: true })
        //     .then(res => setBookings(res.data))

        // fetch(url, {credentials: 'include'}).then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //         setBookings(data)
        //     })

        axiosSecure.get(url)
            .then(res => setBookings(res.data))

    }, [axiosSecure, url])

    const handleDelete = (id) => {
        const proceed = confirm("Are You Sure? You Really Want to Delete It?");
        if (proceed) {
            fetch(`https://car-doctor-server-zeta-gules.vercel.app/bookings/${id}`, { method: "DELETE" })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Successfully Deleted!');
                        const remainingBookings = bookings.filter(booking => booking._id !== id);
                        setBookings(remainingBookings);
                    }
                })
        }
    }

    const handleConfirm = (id) => {
        fetch(`https://car-doctor-server-zeta-gules.vercel.app/bookings/${id}`, {
            method: "PATCH",
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ status: "confirm" })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Confirmed!');
                    const remainingBookings = bookings.filter(booking => booking._id !== id);
                    const updatedBooking = bookings.find(booking => booking._id === id);
                    updatedBooking.status = 'confirm';
                    const newBookings = [updatedBooking, ...remainingBookings];
                    setBookings(newBookings);
                }
            })
    }

    return (
        <div className="mx-auto">
            <h2>Your Bookings: {bookings.length}</h2>
            <div className="container overflow-x-auto">
                <table className="table text-xs md:text-sm">
                    <thead className=" text-sm md:text-base">
                        <tr>
                            { /* 
                            <th>#</th>
                            <th>#</th>
                            <th>Image, Name & Category</th>
                            <th>Price</th>
                            <th className="pl-5 md:pl-[28px]">View Details</th>
                             */}
                        </tr>
                    </thead>
                    {
                        bookings?.map((booking, index) => <Booking
                            key={booking?._id}
                            booking={booking}
                            serial={index + 1}
                            handleDelete={handleDelete}
                            handleConfirm={handleConfirm}
                        ></Booking>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;