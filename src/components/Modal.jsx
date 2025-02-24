import React from 'react'

const Modal = ({ isOpen, onClose}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full flex h-full items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="modal-container">
        <div className="bg-indigo-700 text-center p-5 h-96 lg:w-[500px] rounded shadow-md">
          {/* Modal Content */}
          <h2 className="text-xl font-semibold mt-6 mb-5 uppercase">
            Please Login Here!
          </h2>
          <form className="px-4">
            {/* Email */}
            <div className='mb-5'>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@gmail.com"
                className="w-full rounded-md border
                 border-[#e0e0e0] bg-white px-6 py-3 text-base 
                 font-medium text-[#6B7280] outline-none
                  focus:border-[#6A64F1] focus:shadow-md]"
              />
            </div>

            {/* Password */}
            <div className='mb-5'>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-md border
                 border-[#e0e0e0] bg-white px-6 py-3 text-base 
                 font-medium text-[#6B7280] outline-none
                  focus:border-[#6A64F1] focus:shadow-md]"
              />
            </div>

            <div>
                <button className='hover:shadow-md rounded-md
                 bg-[#6a64f1] hover:bg-red-600 px-8 py-3 text-base
                  font-semibold text-white outline-none' type='submit'>
                    Login
                </button>
            </div>
          </form>


          {/* Modal close button */}
          <button onClick={onClose} className='bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-6 rounded inline-flex items-center mt-5'>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal