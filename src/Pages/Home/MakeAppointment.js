import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';


const MakeAppointment = () => {
    return (
        
        <section style={{
            background: `url(${appointment})`
        }}
        
        className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt=""/>
            </div>
            <div className='flex-1'>
                <h3 className='texl-xl text-primary font-bold'>Appointment</h3>
                <h3 className='text-white'>Make an Appointment</h3>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quam illum, itaque corrupti iure, optio dolore quo quod ullam ipsum ut omnis molestiae repudiandae, laboriosam odio dolorem culpa enim. Dignissimos.</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;