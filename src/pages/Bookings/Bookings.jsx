import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Booking from "./Booking";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {
        fetch(url).then(res => res.json())
            .then(data => {
                console.log(data);
                setBookings(data)
            })
    }, [url])

    const handleDelete = (id) => {
        const proceed = confirm("Are You Sure? You Really Want to Delete It?");
        if (proceed) {
            fetch(`http://localhost:5000/bookings/${id}`, { method: "DELETE" })
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
                        ></Booking>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Bookings;