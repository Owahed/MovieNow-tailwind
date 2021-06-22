import React from 'react';

const Footer = () => {
    return (
        <footer className="p-10" style={{ backgroundColor: "#121823" }}>
            <div className="">
                <div className="grid md:grid-cols-4 mb-6 ">
                    <div className="col-md-3">
                        <div className="mt-5 text-white">
                            <h5 className="text-2xl" style={{ color: "rgb(0, 122, 255)" }}>MoviesNow</h5>
                            <p>Asorem ipsum adipolor sdit amet, <br /> consectetur adipisicing elitcf sed do eiusmod tem.</p>
                        </div>
                        {/* <div className="d-flex">
                        <a href="#"><img style={{width:"30px",marginRight:"8px"}}  src={facebook} alt=""/></a>
                        <a href="#"><img style={{width:"30px",marginRight:"8px"}}  src={insta} alt=""/></a>
                        <a href="#"><img style={{width:"30px",marginRight:"8px"}}  src={linkDin} alt=""/></a>
                        <a href="#"><img style={{width:"40px",marginRight:"8px"}}  src={youTube} alt=""/></a>
                   </div> */}
                        <p className="mt-4 text-white">© 2021 Your Company</p>

                    </div>
                    <div className="col-md-3 mt-5 text-white ml-10">
                        <h5 style={{ color: "rgb(0, 122, 255)" }} className="text-lg">Product</h5>
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Pricing</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Locations</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Server</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Countries</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Blog</a>

                    </div>
                    <div className="col-md-3 mt-5 text-white ml-10">
                        <h5 style={{ color: "rgb(0, 122, 255)" }} className="text-lg">New Products</h5>
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Pricing</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Locations</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Server</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Countries</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Blog</a>

                    </div>
                    <div className="col-md-3 mt-5 text-white ml-10">
                        <h5 style={{ color: "rgb(0, 122, 255)" }} className="text-lg">Support</h5>
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Pricing</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Locations</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Server</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Countries</a>
                        <br />
                        <a style={{ textDecoration: "none", lineHeight: ' 2' }} href="#">Blog</a>

                    </div>

                </div>
                <hr></hr>
                <div className="flex text-white mt-16 items-center justify-around">
                   <p>© MoviesNow TV.template, 2021. Created by Dmitry Volkov.</p>
                   <a class="text-blue-600 visited:text-purple-600" href="#">
                   <p>Privacy policy Terms and conditions</p>
                   </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;