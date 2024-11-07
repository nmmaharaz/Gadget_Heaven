import PropTypes from "prop-types";

const ShowContactDetails = ({contact}) => {
     const{contact_id, branch_name, address, off_day, laptop_number, desktop_number,contact_number} = contact
    return (
        <div className="mx-auto w-10/12 grid grid-cols-1 lg:grid-cols-2 bg-white my-5 p-5 rounded-2xl">
            <div className="flex flex-col pb-3 lg-pb-0">
                <div className="flex">
                    <p className="text-2xl font-semibold text-[#a446f1]">{branch_name}</p>
                    <p className="py-1 ml-3 max-w-[160px] bg-[#c6a7a726] text-red-800 border border-solid border-red-500 px-5 rounded-2xl">{off_day} Off</p>
                </div>
                <p className="pt-3">{address}</p>
            </div>
            <div className="flex justify-between">
                <div>
                    <p className="text-gray-600">Branch in Charge</p>
                    <p className="pt-3 font-semibold">{contact_number}</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                    <p className="text-gray-600">Desktop</p>
                    <p className="pt-3 font-semibold">{desktop_number}</p>
                </div>
                <div className="divider divider-horizontal"></div>
                <div>
                    <p className="text-gray-600">Laptop</p>
                    <p className="pt-3 font-semibold">{laptop_number}</p>
                </div>
            </div>          
        </div>
    );
};

ShowContactDetails.propTypes = {
    contact: PropTypes.array,
  };

export default ShowContactDetails;