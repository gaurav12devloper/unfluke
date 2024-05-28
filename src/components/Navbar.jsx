/* import React from 'react'; */

function Navbar() {
  return (
    <div>
      {/* First Navbar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto pl-7 flex justify-between items-center py-2">
          <a className="navbar-brand" href="/LeaderBoard">
            <img src="https://unfluke.in/static/media/cropped_unfluke_full.148e5bfc.png" alt="" className="w-[140px] pt-4" />
          </a>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <a className="nav-link" id="navbarDropdownNotification" role="button" aria-expanded="false">
                <img src="https://unfluke.in/static/media/bell-icon.d99e8edc.png" alt="notifications" className="h-6" />
              </a>
              <ul className="dropdown-menu absolute left-0 mt-2 w-72 max-h-96 overflow-auto p-0"></ul>
            </div>
            <div className="nav-item">
              <button className="nav-link border-none bg-inherit p-0">
                <img src="https://unfluke.in/static/media/coin.9bfaef7e.jpeg" alt="coin" className="h-6 mt-1" />
              </button>
            </div>
            <div className="nav-item">
              <button className="nav-link px-0 me-3 mt-1 border-none bg-inherit">0</button>
            </div>
            <div className="relative">
              <button className="nav-link p-0 border-none bg-inherit" id="navbarDropdown">
                <img src="https://unfluke.in/static/media/monkey.5456259d.jpg" alt="user" className="h-7 rounded-full border border-black" />
              </button>
              <ul className="dropdown-menu shadow-sm rounded-0 mt-3 p-0 left-0 border-t-2 border-whitesmoke">
                <li className="p-2"><a className="dropdown-item" href="/profile">My Profile</a></li>
                <li className="p-2"><a className="dropdown-item" href="/leads">My Earnings</a></li>
                <li className="p-2"><a className="dropdown-item" href="/funds">Funds</a></li>
                <li className="p-2"><a className="dropdown-item" href="/change-password">Change Password</a></li>
                <li className="p-2"><a className="dropdown-item text-red-500" href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* Second Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto flex flex-wrap items-center py-2">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="" id="navbarSupportedContent">
            <ul className="navbar-nav flex flex-col lg:flex-row lg:space-x-4">
              <li className="nav-item">
                <a className="nav-link text-black text-base flex font-semibold" href="/LeaderBoard">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-microsoft mr-2 mb-0.5">
                    <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z"></path>
                  </svg>
                  LeaderBoard
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link dropdown-toggle text-black text-base font-semibold pl-5" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Historical Trading</a>
              
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/historicalchart">Historical Chart</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/scanners">Scanners</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/alerts">Alerts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/BasicBacktestHome">Basic Backtest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/AdvancedBacktestHome">Advanced Backtest</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/pricing">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black text-base font-semibold pl-5" href="/leads">My Earnings</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
