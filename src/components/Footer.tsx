import React from 'react'

const Footer = () => {
  return (
    
    <footer className=' bg-black text-gray-400 py-12 text-center'>
        <div className=' max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
            <div>
                <h2 className=' text-white text-lg font-semibold mb-4'>Home</h2>
                <p className=' mb-4'>Copy paste the most trending components and use them in your websites without having to worry about styling and animations.</p>
            </div>
            <div>
                <h2 className=' text-white text-lg font-semibold mb-4'>Contact us</h2>
                <p>Bhubaneswar</p>
                <p>Email:pitamber@gmail.com</p>
            </div>
            <div>
                <h2 className=' text-white text-lg font-semibold mb-4'>About us</h2>
                <p>Music Adda</p>
                <p>Email:pitamber@gmail.com</p>
            </div>
            <div >
                <h2 className=' text-white text-lg font-semibold mb-4'>Courses</h2>
                <p>Dhol</p>
                <p>Harmanioum</p>
                <p>Casio</p>
            </div>
        </div>
        <p className=' text-center text-xs pt-8'>© Music adda. All right reserved.</p>
    </footer>
  )
}

export default Footer