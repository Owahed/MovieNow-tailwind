import React from 'react';
import bg from '../../Img/5415687 (1).jpg'

const Header = () => {
    return (
        <div class="flex justify-center items-center" style={{ backgroundImage: `url("${bg}")`,backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
        height:'600px'}}>
            <div style={{width: '40rem'}} class="box-border h-80p-4 ">
            <h1 className="font-semibold text-4xl text-blueGray-600">Notus React - A beautiful extension for Tailwind CSS.</h1>
            <p>Notus React is Free and Open Source. It does not change any of the CSS from Tailwind CSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.</p>
            <button className="get-started  font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150">Go noW</button>
            </div>
          
            
            
        </div>
    );
};

export default Header;