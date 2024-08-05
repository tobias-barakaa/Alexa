import React, { useState, useRef, useEffect } from 'react';

document.addEventListener('DOMContentLoaded', function() {
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
  
    dropdownToggle.addEventListener('click', function(e) {
      e.preventDefault();
      this.classList.toggle('active');
      dropdownMenu.classList.toggle('show');
    });
  
    // Close the dropdown if clicked outside
    document.addEventListener('click', function(e) {
      if (!dropdownToggle.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownToggle.classList.remove('active');
        dropdownMenu.classList.remove('show');
      }
    });
  });

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <button className={`dropdown-toggle ${isOpen ? 'active' : ''}`} onClick={toggleDropdown}>
        <i className="fas fa-shopping-cart"></i>
        <span>Orders</span>
        <i className="fas fa-chevron-down"></i>
      </button>
      {isOpen && (
        <div className="dropdown-menu show">
          <a className="dropdown-item" href="#blog-writing">Blog Writing</a>
          <a className="dropdown-item" href="#article-creation">Article Creation</a>
          <a className="dropdown-item" href="#resume">Resume</a>
          <a className="dropdown-item" href="#email-copywriting">Email Copywriting</a>
        </div>
      )}
    </div>
  );
};

export default Dropdown;