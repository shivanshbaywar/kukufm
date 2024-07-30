import React, { useState, useRef } from 'react';
import './Header.css';
export default function Header() {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const dropdownRef = useRef(null);
  const options = ['English', 'हिंदी', 'ಕನ್ನಡ', 'বাংলা', 'മലയാളം', 'தமிழ்', 'తెలుగు', 'मराठी'];
  const handleOptionChange = (option) => {
    const updatedSelectedOptions = [...selectedOptions];

    if (selectedOptions.includes(option)) {
      updatedSelectedOptions.splice(updatedSelectedOptions.indexOf(option), 1);
    } else {
      updatedSelectedOptions.push(option);
    }
    setSelectedOptions(updatedSelectedOptions);
  };
  const handleMouseEnterDropdown = () => {
    setShowOptions(true);
  };

  const handleMouseLeaveDropdown = () => {
    setShowOptions(false);
  };

  return (
    <header className="h-22 navbar">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center px-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-6 sm:h-7 text-white ml-4"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path></svg>
           <svg className='logo1 mr-6 ml-7' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 32" width="90px" height="100%"><path fill="currentColor" d="M6.08 24.096V7.904c0-.288.16-.48.448-.48h2.064c.304 0 .48.16.48.48v16.16c0 .352-.144.496-.48.496H6.528c-.304.016-.448-.16-.448-.464"></path><path fill="currentColor" d="m12.192 16.016 6.768-7.872a.46.46 0 0 0 .144-.336c0-.24-.144-.384-.4-.384h-1.808c-.496 0-.912.16-1.312.544L9.456 15.12c-.272.288-.368.512-.384.88.016.368.112.592.384.88l6.128 7.136c.4.384.816.544 1.312.544h1.808c.256 0 .4-.144.4-.384a.5.5 0 0 0-.144-.336zM21.008 18.16V7.776c0-.256.112-.48.448-.48h2.096c.304 0 .448.208.448.48V18.16c0 2.976 1.264 3.888 3.76 3.888 2.432 0 3.744-.864 3.744-3.904V7.776c0-.256.144-.48.448-.48h2.096c.304 0 .48.208.48.48v10.48c0 2.976-.928 6.448-6.784 6.448-4.992 0-6.736-2.528-6.736-6.544M51.728 18.16V7.776c0-.256.112-.48.448-.48h2.096c.304 0 .448.208.448.48V18.16c0 2.976 1.264 3.888 3.76 3.888 2.432 0 3.744-.864 3.744-3.904V7.776c0-.256.144-.48.448-.48h2.096c.304 0 .48.208.48.48v10.48c0 2.976-.928 6.448-6.784 6.448-4.992 0-6.736-2.528-6.736-6.544M103.648 1.904H71.552a2.29 2.29 0 0 0-2.288 2.288v23.616a2.29 2.29 0 0 0 2.288 2.288h32.096a2.29 2.29 0 0 0 2.288-2.288V4.192c-.016-1.264-1.04-2.288-2.288-2.288M82.464 9.552c0 .256-.112.48-.48.48h-6.528v4.688h6.192c.384 0 .48.208.48.48v1.568c0 .256-.064.496-.48.496h-6.192v6.784c0 .304-.112.528-.48.528h-2.048c-.336 0-.48-.192-.48-.48V9.568c0-1.808 1.136-2.144 2.064-2.144h7.456c.336 0 .48.192.48.448v1.68zm20.256 14.592c-.016.304-.16.432-.432.432h-2.096c-.304 0-.432-.16-.448-.448v-12.56l-3.792 10.208c-.144.384-.688 1.472-2.048 1.472h-.48c-1.28 0-1.84-1.088-1.984-1.52L87.696 11.52v12.592c-.016.288-.144.448-.48.448H85.12c-.256 0-.4-.112-.4-.432V9.312c0-.976.592-1.888 2.288-1.888h.496c.496 0 1.648.16 2.096 1.408l4.112 11.312 4.112-11.312c.624-1.28 1.424-1.408 2.16-1.408h.448c1.648 0 2.256.928 2.256 1.888v14.832zM36.8 24.096V7.904c0-.288.16-.48.448-.48h2.064c.304 0 .48.16.48.48v16.16c0 .352-.144.496-.48.496h-2.064c-.304.016-.448-.16-.448-.464M42.912 16.016l6.768-7.872a.46.46 0 0 0 .144-.336c0-.24-.144-.384-.4-.384h-1.808c-.496 0-.912.16-1.312.544l-6.128 7.152c-.272.288-.368.512-.384.88.016.368.112.592.384.88l6.128 7.136c.4.384.816.544 1.312.544h1.808c.256 0 .4-.144.4-.384a.5.5 0 0 0-.144-.336z"></path></svg>
          <input type="text" className="searchbar p-4 py-2 rounded-lg border-2 bg-transparent" placeholder="Search audiobook stories" />          {/* <input placeholder="Search audiobook &amp; stories" className="w-full px-40 bg-transparent border-2 rounded-lg focus:outline-none md:text-white md:placeholder-white md:placeholder-opacity-60 placeholder-current text-muted text-opacity-70 p-2" value="" spellcheck="false" data-ms-editor="true"></input> */}
          <div className="relative select-container ml-4 flex-row">
            <button
              ref={dropdownRef}
              className={`select-button mb--2 relative w-full px-4 py-2 flex rounded-lg bg-transparent text-white focus:outline-none hover:h-20 ${showOptions ? 'height-button' : ''}`}
              onMouseEnter={handleMouseEnterDropdown}
              onMouseLeave={handleMouseLeaveDropdown}
            >
              Languages
              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="7" className="ml-1 mt-1 w-3 h-3 mt-2"><g fill="none" fillRule="evenodd"><path d="M0 0h8v7H0z"></path><path fill="currentColor" fillRule="nonzero" d="m1 2 3 3 3-3z"></path></g></svg>
            </button>
            {showOptions && (
              <div
                ref={dropdownRef}
                className=" select-container-inner absolute top-full left-0 right-0 z-50 border-none shadow-md bg-white"
                onMouseEnter={handleMouseEnterDropdown}
                onMouseLeave={handleMouseLeaveDropdown}
              >

                <p className='text-brand-500 font-bold text-sm px-5 flex'>Select the Languages</p>
                <br/>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-3 px-5 pb-5' >
                  {options.map((option) => (
                    <div
                      key={option}
                      className={`h-10 px-2 rounded-lg border border-[#DC503C4D] flex justify-center items-center gap-3 w-20`}
                      onClick={() => handleOptionChange(option)} 
                    >
                      <p className={`text-brand-500 font-bold text-sm cursor-pointer ${selectedOptions.includes(option) ? 'text-red-700' : ''}`} >{option}</p>
                      <input
                        type="checkbox"
                        className='hidden'
                        checked={selectedOptions.includes(option)}
                        onChange={() => handleOptionChange(option)} 
                      />
                    </div>
                  ))}
                </div>

              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between  mr-20">
          <button className="text-white font-bold text-l px-4 py-2">Get Free Trial</button>
          <button className="text-white font-bold text-l px-4 py-2">Buy Coins</button>
          <button className="text-white font-bold text-l px-4 py-2">Login/Signup</button>
          <img src="https://d1l07mcd18xic4.cloudfront.net/static/donwloadapp.png" alt="Download Kuku FM"></img>
        </div>
      </div>
    </header>
  );
};
