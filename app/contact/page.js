import React from 'react'

const Contact = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-2xl p-8 space-y-6">
          <h2 className="text-3xl font-bold text-gray-800 text-center">Contact Us</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
            <div className="p-4 border rounded-xl shadow-md bg-gray-900">
              <h3 className="font-semibold text-lg">Phone</h3>
              <p className="text-gray-300">+91 7988722405</p>
            </div>
            <div className="p-4 border rounded-xl shadow-md bg-gray-900">
              <h3 className="font-semibold text-lg">Email</h3>
              <p className="text-gray-300">vinaysharaya1@gmail.com</p>
            </div>
            <div className="p-4 border rounded-xl shadow-md bg-gray-900">
              <h3 className="font-semibold text-lg">Address</h3>
              <p className="text-gray-300">M.D.University Rohtak, Haryana (124001)</p>
            </div>
            <div className="p-4 border rounded-xl shadow-md bg-gray-900">
              <h3 className="font-semibold text-lg">Working Hours</h3>
              <p className="text-gray-300">Mon - Fri: 9 AM - 6 PM</p>
            </div>
            <div className="p-4 border rounded-xl shadow-md bg-gray-900">
              <h3 className="font-semibold text-lg">Social Media</h3>
              <p className="text-gray-300">Follow us on Instagram, LinkedIn</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Contact
