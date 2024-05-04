import PropTypes from 'prop-types';

const Booking = ({booking, serial}) => {

const{name, img, title, price} = booking;

    return (
        <tbody>
            <tr>
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

Booking.propTypes ={
    booking: PropTypes.object,
    serial: PropTypes.number,
}

export default Booking;