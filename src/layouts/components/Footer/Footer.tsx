const Footer = () => {
    return (
      <div className="bg-[#E2F4FF]">
        <footer className="w-[1440px] h-auto mx-auto py-8">
          <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between rounded-[20px]">
            <div className="mb-4 md:mb-0 md:flex-grow">
              <h2 className="text-2xl font-bold text-center md:text-left text-[29px] text-[#1B5A7D] ml-[90px]">
                Subscribe newsletter
              </h2>
            </div>
            {/* 
            <div className="mr-[137px] flex items-center ">
              <input
                type="email"
                placeholder="Email address"
                className="bg-[#EDA415] p-2 rounded-[20px] border border-gray-300 w-[350px] h-[50px] text-[14px] font-semibold text-white"
              />
              <button className="w-[80px] h-[49px] ml-[-30px] bg-[#EDA415] hover:bg-yellow-600 text-white text-[40px] font-semibold rounded-[20px] px-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </button>
            </div>
            */}
            <div className="flex items-center mt-4 md:mt-0 space-x-2">
              <span className="font-semibold">Call us 24/7: (+62) 0123 567 789</span>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-600">
            <div>
              <h3 className="text-lg font-semibold">Electon</h3>
              <address className="not-italic mt-2">64 st james boulevard hoswick, ze2 7zj</address>
              <div className="flex space-x-2 mt-2">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zm-2.5 14.5V9.3H6.35v-1.6H7.5V6.11C7.5 4.768 8.354 4 9.745 4 10.396 4 11 4.051 11 4.051v1.23h-.782c-.762 0-.973.48-.973 1.078v1.34h1.7l-.272 1.6H9.245v5.2h-1.75zm6.29-3.2c-1.158 0-2.1-.942-2.1-2.1 0-1.157.942-2.1 2.1-2.1 1.157 0 2.1.943 2.1 2.1 0 1.158-.943 2.1-2.1 2.1z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.56v14.88c0 2.52-2.06 4.56-4.56 4.56H4.56C2.04 24 0 21.96 0 19.44V4.56C0 2.04 2.06 0 4.56 0h14.88C21.96 0 24 2.04 24 4.56zM8.64 18.24v-8.88H6v8.88h2.64zm-1.32-10.2a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zm14.04 10.2v-4.56c0-1.14-.42-1.92-1.5-1.92-.82 0-1.32.56-1.56 1.1-.08.2-.1.48-.1.76v4.62H16V12.1h2.48v.84c.34-.5 1.02-1.2 2.4-1.2 1.74 0 3.04 1.14 3.04 3.62v4.88H21.36zm-6.72-5.7c-1.2 0-1.74.64-1.74 1.74v3.84H11v-8.88h2.58v1.1c.22-.4.92-.9 2.02-.9 1.16 0 2.14.72 2.14 2.28v5.4H18v-3.7c0-1.32-.48-2.22-1.62-2.22z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.84 2.5H4.16C2.8 2.5 1.68 3.62 1.68 5v14c0 1.38 1.12 2.5 2.48 2.5h15.68c1.38 0 2.48-1.12 2.48-2.5V5c0-1.38-1.1-2.5-2.48-2.5zM8.44 15.12l-.02 1.52-1.5.02v-7.9h1.48v2.78l2.1-2.78h1.8l-2.2 2.84 2.26 2.94H10.3L8.44 15.12zm4.52-.8h-1.5v-7.9h1.5v7.9zm6.04-1.62c0 .32-.02.62-.06.92-.02.1-.08.2-.14.28-.1.16-.24.26-.4.3-.14.04-.3.04-.46.04H15.5v1.94h-1.48V9.12h2.58c.14 0 .3 0 .44.02.18.02.34.1.5.2.14.1.26.24.34.4.08.16.14.34.14.52.02.14.02.28.02.42v1.48zm-1.48-2.18h-1.12v1.28h1.12v-1.28z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Find product</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Brownze arnold
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Chronograph blue
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Smart phones
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Automatic watch
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Hair straighteners
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Get help</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Return policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Payment policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold">About us</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    News
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Our policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Customer care
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    FAQ's
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex gap-[100px]">
              <div>
                <div className="text-xl font-medium text-gray-800">
                  Công ty cổ phần thời trang Yody
                </div>
                <p>
                  Mã số doanh nghiệp: 0801206940. Giấy chứng nhận đăng ký doanh
                  nghiệp do Sở Kế hoạch và Đầu tư TP Hải Dương cấp lần đầu ngày
                  04/03/2017
                </p>
              </div>
            </div>
            <div className="flex gap-[20px]">
              <img
                src="https://yody.vn/images/identity-badge/bct_v1.png"
                alt=""
                className="w-[150px] h-[50px]"
              />
              <img
                src="https://yody.vn/images/identity-badge/dmca_v1.png"
                alt=""
                className="w-[150px] h-[50px]"
              />
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  