import PropTypes from 'prop-types';

const Booking = ({ booking, serial, handleDelete }) => {

    const { _id, name, img, title, price } = booking;

    return (
        <tbody>
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </th>
                <th>{serial}.</th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar hidden md:inline">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} alt={title} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold"> {title}</div>
                            <div className="opacity-50">{name}</div>
                        </div>
                    </div>
                </td>
                <td>${price}</td>
                <th className="text-[10px] md:text-base">

                </th>
            </tr>
        </tbody>
    )
};

Booking.propTypes = {
    booking: PropTypes.object,
    serial: PropTypes.number,
    handleDelete: PropTypes.func,
}

export default Booking;