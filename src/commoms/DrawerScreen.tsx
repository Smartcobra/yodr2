import React from 'react'

const DrawerScreen = () => {
  return (
    <div>
        <div className="page-wrapper toggled">
        <nav id="sidebar" className="sidebar-wrapper sidebar-dark">
            <div className="sidebar-content">
                <div className="sidebar-brand">
                    <a href="/"><img src="assets/images/logo.png" className="h-12" alt=""></img></a>
                </div>
    
                <ul className="sidebar-menu border-t border-white/10" data-simplebar >

                    <li>
                        <a href="explore-property.html"><i className="mdi  mdi-home-city me-2"></i>Yobytech</a>
                    </li>

                    <li>
                        <a href="/"><i className="mdi mdi-chart-bell-curve-cumulative me-2"></i>Dashboard</a>
                    </li>

                    <li className="relative lg:m-8 m-6 px-8 py-10 rounded-lg bg-gradient-to-b to-transparent from-slate-800 text-center">
                        <div className="sidebar-brand">
                            <a href="/"><img src="assets/images/logo.png" className="h-12" alt=""></img></a>
                        </div>
                        <span className="relative z-10">
                            <span className="text-xl font-medium h5 text-white">Rudra Clinic</span>
                            <span className="text-slate-400 mb-5 block">Clinic Owner</span>
                        </span>
                        <span className="mdi mdi-home-city-outline text-[160px] absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto text-center opacity-[0.02] text-white z-0"></span>
                    </li>

                </ul>
                {/* <!-- sidebar-menu  --> */}
            </div>
        </nav>
        </div>
    </div>
  )
}

export default DrawerScreen

