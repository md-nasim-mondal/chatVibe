import React from "react";

interface ToggleBtnProps {
  setToggle: (value: string) => void;
  toggle: string;
}

const ToggleBtn: React.FC<ToggleBtnProps> = ({ setToggle, toggle }) => {
  return (
    <label
      htmlFor='Toggle3'
      className='inline-flex w-full justify-center items-center px-2 rounded-md cursor-pointer text-gray-800'>
      <input
        id='Toggle3'
        type='checkbox'
        className='hidden peer'
        checked={toggle === 'admin'}
        readOnly
      />
      <span
        onClick={() => setToggle('user')}
        className={`px-4 py-1 rounded-l-md ${toggle === 'user' ? 'bg-main-1' : 'bg-gray-300'}`}>
        User
      </span>
      <span
        onClick={() => setToggle('admin')}
        className={`px-4 py-1 rounded-r-md ${toggle === 'admin' ? 'bg-main-1' : 'bg-gray-300'}`}>
        Admin
      </span>
    </label>
  );
};

export default ToggleBtn;
