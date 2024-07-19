import React from "react";

const DoctorDS = () => {
    
  return (
    <div>
      <div className="page-wrapper toggled">
            {/* <!-- sidebar-wrapper --> */}
            <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
                <div className="sidebar-content">
                    <div className="sidebar-brand">
                        <a href="/"><img src="assets/images/logo.png" className="h-12" alt=""></img></a>
                    </div>
        
                    <ul className="sidebar-menu border-t border-white/10" data-simplebar >
                        <li>
                            <a href="/"><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>Dashboard</a>
                        </li>

                        <li>
                            <a href="explore-property.html"><i className="mdi mdi-home-city me-2"></i>Explore Properties</a>
                        </li>

                        <li>
                            <a href="favorite-property.html"><i className="mdi mdi-home-heart me-2"></i>Favorite Properties</a>
                        </li>

                        <li>
                            <a href="add-property.html"><i className="mdi mdi-home-plus me-2"></i>Add Properties</a>
                        </li>

                        <li>
                            <a href="chat.html"><i className="mdi mdi-chat-outline me-2"></i>Chat</a>
                        </li>

                        <li className="sidebar-dropdown">
                            <a href="javascript:void(0)"><i className="mdi mdi-account-edit me-2"></i>User Profile</a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li><a href="profile.html">Profile</a></li>
                                    <li><a href="profile-setting.html">Profile Settings</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown">
                            <a href="javascript:void(0)"><i className="mdi mdi-post-outline me-2"></i>Blog</a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li><a href="blog.html">Blogs</a></li>
                                    <li><a href="blog-detail.html">Blog Detail</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown">
                            <a href="javascript:void(0)"><i className="mdi mdi-file-document-outline me-2"></i>Pages</a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li><a href="starter.html">Starter</a></li>
                                    <li><a href="faqs.html">FAQs</a></li>
                                    <li><a href="pricing.html">Pricing</a></li>
                                    <li><a href="review.html">Review</a></li>
                                    <li><a href="privacy.html">Privacy Policy</a></li>
                                    <li><a href="terms.html">Term & Condition</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown">
                            <a href="javascript:void(0)"><i className="mdi mdi-login me-2"></i>Authentication</a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li><a href="login.html">Login</a></li>
                                    <li><a href="signup.html">Signup</a></li>
                                    <li><a href="signup-success.html">Signup Success</a></li>
                                    <li><a href="reset-password.html">Reset Password</a></li>
                                    <li><a href="lock-screen.html">Lockscreen</a></li>
                                </ul>
                            </div>
                        </li>

                        <li className="sidebar-dropdown">
                            <a href="javascript:void(0)"><i className="mdi mdi-layers me-2"></i>Miscellaneous</a>
                            <div className="sidebar-submenu">
                                <ul>
                                    <li><a href="comingsoon.html">Comingsoon</a></li>
                                    <li><a href="maintenance.html">Maintenance</a></li>
                                    <li><a href="error.html">Error</a></li>
                                    <li><a href="thankyou.html">Thank You</a></li>
                                </ul>
                            </div>
                        </li>


                        <li className="relative lg:m-8 m-6 px-8 py-10 rounded-lg bg-gradient-to-b to-transparent from-slate-800 text-center">
                        <div className="sidebar-brand">
                            <a href="/"><img src="assets/images/logo.png" className="h-12" alt=""></img></a>
                        </div>
                            <span className="relative z-10">
                                <span className="text-xl font-medium h5 text-white">Rudra Clinic</span>
                                <span className="text-slate-400 mt-3 mb-5 block">Clinic Owner</span>
                            </span>
                
                            <span className="mdi mdi-home-city-outline text-[160px] absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto text-center opacity-[0.02] text-white z-0"></span>
                        </li>
                    </ul>
                    {/* <!-- sidebar-menu  --> */}
                </div>
            </nav>
            {/* <!-- sidebar-wrapper  --> */}


            <main className="page-content bg-gray-50 dark:bg-slate-800">
                {/* <!-- Top Header --> */}
                <div className="top-header">
                    <div className="header-bar flex justify-between">
                        <div className="flex items-center space-x-1">
                            {/* <!-- Logo --> */}
                            <a href="#" className="xl:hidden block me-2">
                                <img src="assets/images/logo-icon-32.png" className="md:hidden block" alt=""></img>
                                <span className="md:block hidden">
                                    <img src="assets/images/logo-dark.png" className="inline-block dark:hidden" alt=""></img>
                                    <img src="assets/images/logo-light.png" className="hidden dark:inline-block" alt=""></img>
                                </span>
                            </a>
                            {/* <!-- Logo --> */}

                            {/* <!-- show or close sidebar --> */}
                            <a id="close-sidebar" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" href="javascript:void(0)">
                                <i data-feather="menu" className="h-4 w-4"></i>
                            </a>
                            {/* <!-- show or close sidebar --> */}
            
                            {/* <!-- Searchbar --> */}
                            <div className="ps-1.5">
                                <div className="form-icon relative sm:block hidden">
                                    <i className="mdi mdi-magnify absolute top-1/2 -translate-y-1/2 mt-[1px] start-3"></i>
                                    <input type="text" className="form-input w-56 ps-9 py-2 px-3 h-8 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded-md outline-none border border-gray-100 dark:border-gray-800 focus:ring-0 bg-white" name="s" id="searchItem" placeholder="Search..."></input>
                                </div>
                            </div>
                            {/* <!-- Searchbar --> */}
                        </div>

                        <ul className="list-none mb-0 space-x-1">
                            <li className="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                                    <img src="assets/images/flags/usa.png" className="h-6 w-6 rounded-md" alt=""></img>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-36 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden">
                                    <ul className="list-none py-2 text-start">
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><img src="assets/images/flags/germany.png" className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""></img> German</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><img src="assets/images/flags/italy.png" className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""></img> Italian</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><img src="assets/images/flags/russia.png" className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""></img> Russian</a>
                                        </li>
                                        <li className="my-1">
                                            <a href="#" className="flex items-center text-[15px] font-medium py-1.5 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><img src="assets/images/flags/spain.png" className="h-6 w-6 rounded-md me-2 shadow dark:shadow-gray-700" alt=""></img> Spanish</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- Country Dropdown --> */}

                            {/* <!-- Notification Dropdown --> */}
                            <li className="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" className="dropdown-toggle h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md" type="button">
                                    <i data-feather="bell" className="h-4 w-4"></i>
                                    <span className="absolute top-0 end-0 flex items-center justify-center bg-red-600 text-white text-[10px] font-bold rounded-md w-2 h-2 after:content-[''] after:absolute after:h-2 after:w-2 after:bg-red-600 after:top-0 after:end-0 after:rounded-md after:animate-ping"></span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-64 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden">
                                    <span className="px-4 py-4 flex justify-between">
                                        <span className="font-semibold">Notifications</span>
                                        <span className="flex items-center justify-center bg-red-600/20 text-red-600 text-[10px] font-bold rounded-md w-5 max-h-5 ms-1">3</span>
                                    </span>
                                    <ul className="py-2 text-start h-64 border-t border-gray-100 dark:border-gray-800" data-simplebar>
                                        <li>
                                            <a href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                        <i data-feather="shopping-cart" className="h-4 w-4"></i>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-medium block">Order Complete</span>
                                                        <small className="text-slate-400">15 min ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <img src="assets/images/client/04.jpg" className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""></img>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-medium block"><span className="font-semibold">Message</span> from Luis</span>
                                                        <small className="text-slate-400">1 hour ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                        <i data-feather="dollar-sign" className="h-4 w-4"></i>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-medium block"><span className="font-semibold">One Refund Request</span></span>
                                                        <small className="text-slate-400">2 hour ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <div className="h-10 w-10 rounded-md shadow shadow-green-600/10 dark:shadow-gray-700 bg-green-600/10 dark:bg-slate-800 text-green-600 dark:text-white flex items-center justify-center">
                                                        <i data-feather="truck" className="h-4 w-4"></i>
                                                    </div>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-medium block">Deliverd your Order</span>
                                                        <small className="text-slate-400">Yesterday</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#!" className="block font-medium py-1.5 px-4">
                                                <div className="flex items-center">
                                                    <img src="assets/images/client/05.jpg" className="h-10 w-10 rounded-md shadow dark:shadow-gray-700" alt=""></img>
                                                    <div className="ms-2">
                                                        <span className="text-[15px] font-medium block"><span className="font-semibold">Cally</span> started following you</span>
                                                        <small className="text-slate-400">2 days ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!-- Notification Dropdown --> */}
            
                            {/* <!-- User/Profile Dropdown --> */}
                            <li className="dropdown inline-block relative">
                                <button data-dropdown-toggle="dropdown" className="dropdown-toggle items-center" type="button">
                                    <span className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[20px] text-center bg-gray-50 dark:bg-slate-800 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-100 dark:border-gray-800 text-slate-900 dark:text-white rounded-md">
                                        <img src="assets/images/client/07.jpg" className="rounded-md" alt=""></img>
                                        </span>
                                </button>
                                {/* <!-- Dropdown menu --> */}
                                <div className="dropdown-menu absolute end-0 m-0 mt-4 z-10 w-44 rounded-md overflow-hidden bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 hidden">
                                    <ul className="py-2 text-start">
                                        <li>
                                            <a href="profile.html" className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-account-outline me-2"></i>Profile</a>
                                        </li>
                                        <li>
                                            <a href="chat.html" className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-chat-outline me-2"></i>Chat</a>
                                        </li>
                                        <li>
                                            <a href="profile-setting.html" className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-cog-outline me-2"></i>Settings</a>
                                        </li>
                                        <li className="border-t border-gray-100 dark:border-gray-800 my-2"></li>
                                        <li>
                                            <a href="lock-screen.html" className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-lock-outline me-2"></i>Lockscreen</a>
                                        </li>
                                        <li>
                                            <a href="login.html" className="block py-1 px-4 dark:text-white/70 hover:text-green-600 dark:hover:text-white"><i className="mdi mdi-logout me-2"></i>Logout</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            {/* <!--end dropdown--> */}
                            {/* <!-- User/Profile Dropdown --> */}

                        </ul>
                    
                    </div>
                </div>
                {/* <!-- Top Header --> */}

                <div className="container-fluid relative px-3">
                    <div className="layout-specing">
                        {/* <!-- Start Content --> */}
                        <div className="md:flex justify-between items-center">
                            <h5 className="text-lg font-semibold">Dashboard</h5>

                            <ul className="tracking-[0.5px] inline-block sm:mt-0 mt-3">
                                <li className="inline-block capitalize text-[16px] font-medium duration-500 dark:text-black/70 hover:text-green-600 dark:hover:text-white"><a href="/">Date</a></li>
                                <li className="inline-block text-base text-slate-950 dark:text-white/70 mx-0.5 ltr:rotate-0 rtl:rotate-180"><i className="mdi mdi-chevron-right"></i></li>
                                <li className="inline-block capitalize text-[16px] font-medium text-green-600 dark:text-white" aria-current="page">18-Jul-2024 | 06:25PM </li>
                            </ul>
                        </div>
                        <p>Welcome Rudra Clinic!</p>
                        <p>Your clinic dashboard awaits. Seamlessly manage, monitor, and maximize the potential of every clinic under your purview.</p>
                        
                        <div id="grid" className="md:flex justify-center mx-auto mt-5">
                            <div className="xl:w-1/3 lg:w-1/3 md:w-1/2 p-3 picture-item">    
                                <div className="bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800 p-6">
                                    <div className="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
                                        <img src="assets/images/client/05.jpg" className="h-16 w-16 rounded-full shadow dark:shadow-gray-800" alt=""></img>
        
                                        <div className="ps-4">
                                            <div className="text-center">
                                                <a href="#" className="text-lg hover:text-green-600 font-semibold duration-500 ease-in-out">Rudra Clinic</a>
                                            </div>
                                            <p className="text-slate-400 text-1xl">PALASUNI, BHUBANESWAR, KHURDA, ODISHA, INDIA-754001</p>
                                        </div>
                                    </div>
        
                                    <div className="md:flex">
                                        <div className="md:flex justify-center mx-auto">
                                            <div className="xl:w-1/1 lg:w-1/1 md:w-1/1 p-3 picture-item">    
                                                <div className="bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                                    <div className="flex items-center border-b p-3 border-gray-100 dark:border-gray-800">
                                                        <img src="assets/images/client/05.jpg" className="h-8 w-8 rounded-full shadow dark:shadow-gray-800" alt=""></img>
                                                        <div className="ps-4">
                                                            {/* <a href="#" className="text-lg hover:text-green-600 duration-500 ease-in-out">Rudra Clinic</a> */}
                                                            <p className="text-slate-400 text-1xl">No. Of Doctors 03</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:flex justify-center mx-auto">
                                            <div className="xl:w-1/1 lg:w-1/1 md:w-1/1 p-3 picture-item">    
                                                <div className="bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                                    <div className="flex items-center border-b p-3 border-gray-100 dark:border-gray-800">
                                                        <img src="assets/images/client/05.jpg" className="h-8 w-8 rounded-full shadow dark:shadow-gray-800" alt=""></img>
                                                        <div className="ps-4">
                                                            {/* <a href="#" className="text-lg hover:text-green-600 duration-500 ease-in-out">Rudra Clinic</a> */}
                                                            <p className="text-slate-400 text-1xl">No. Of Patients 90</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="md:flex">
                                        <div className="md:flex justify-center mx-auto">
                                            <div className="xl:w-1/1 lg:w-1/1 md:w-1/1 p-3 picture-item">    
                                                <div className="bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                                    <div className="flex items-center border-b p-3 border-gray-100 dark:border-gray-800">
                                                        <img src="assets/images/client/05.jpg" className="h-8 w-8 rounded-full shadow dark:shadow-gray-800" alt=""></img>
                                                        <div className="ps-4">
                                                            {/* <a href="#" className="text-lg hover:text-green-600 duration-500 ease-in-out">Rudra Clinic</a> */}
                                                            <p className="text-slate-400 text-1xl">No. Of Doctors 03</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="md:flex justify-center mx-auto">
                                            <div className="xl:w-1/1 lg:w-1/1 md:w-1/1 p-3 picture-item">    
                                                <div className="bg-white dark:bg-slate-900 rounded-lg shadow dark:shadow-gray-800">
                                                    <div className="flex items-center border-b p-3 border-gray-100 dark:border-gray-800">
                                                        <img src="assets/images/client/05.jpg" className="h-8 w-8 rounded-full shadow dark:shadow-gray-800" alt=""></img>
                                                        <div className="ps-4">
                                                            {/* <a href="#" className="text-lg hover:text-green-600 duration-500 ease-in-out">Rudra Clinic</a> */}
                                                            <p className="text-slate-400 text-1xl">No. Of Patients 90</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <h1> CLICK HERE TO ENTER </h1>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        {/* <!-- End Content --> */}
                    </div>
                </div>

                {/* <!-- Footer Start --> */}
                <footer className="shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 px-6 py-4">
                    <div className="container-fluid">
                        <div className="grid grid-cols-1">
                            <div className="sm:text-start text-center mx-md-2">
                                <p className="mb-0 text-slate-400">© <script>document.write(new Date().getFullYear())</script> Hously. Design with <i className="mdi mdi-heart text-red-600"></i> by <a href="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</a>.</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
            {/* <!--End page-content" --> */}
        </div>
    </div>
  )
}

export default DoctorDS
