import React, { useState, useRef } from 'react';
import './password.css';

const numbersList = '0123456789';
const symbolsList = '~`!@#$%^&*()_-+={[}]|';
const upperCaseLettersList = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCaseLettersList = 'abcdefghijklmnopqrstuvwxyz';

function PasswordGenerator() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [showPassword, setShowPassword] = useState('');
  const inputRef = useRef(null);

  const createPassword = () => {
    let characterList = '';

    if (includeNumbers) {
      characterList += numbersList;
    }
    if (includeSymbols) {
      characterList += symbolsList;
    }
    if (includeUppercase) {
      characterList += upperCaseLettersList;
    }
    if (includeLowercase) {
      characterList += lowerCaseLettersList;
    }

    let tempPass = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * characterList.length);
      tempPass += characterList.charAt(randomIndex);
    }

    setShowPassword(tempPass);
  };

  const handleRangeChange = (event) => {
    setPasswordLength(event.target.value);
  };

  const copyPassword = () => {
    if (inputRef.current && showPassword) {
      inputRef.current.select();
      document.execCommand('copy');
    }
  };

  return (
    <div className="main">
      <h1 className="title">Password Generator</h1>
      <div className="password-box">
        <div className="pass-box-copy">
          <input
            type="text"
            placeholder="Click Generate to get a password."
            value={showPassword}
            ref={inputRef}
            readOnly
          />
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAACUCAMAAAD/A6aTAAAAbFBMVEX//////f4AAADLycp/fX43NTYaGBmhnp/u7e6UkpMkHR8hGx38/PwcFhjGxMUXFRZGREUfHR729fVvbW7X1tdmZWbk4+MqKCkTEBGopqciISHc3NxaWFlUVFROTE2+vb20tLR2dXWJiIkLAAZuNBMJAAAC/UlEQVR4nO3bDW+yMBSG4bZgKXIUWxVQX6dz//8/vlR07sPYurBwdM+VLNmWmXCvKCUehQAAAAAAAAAAAACAGHLoA+gBSUlCuEUyTaYhycIIIv+goY/6O5+xyf/NYmzThHwEseuQUorN3DZlWfqv25ryZUcsF6P9x5q01LZREbRW/xYMI46rMZ01Vm/nYctaa71yHE8qId2qtmpZOWOMu8lU2dqqg88Y+qC/ky6zVuXtshyX5gYhkpFWqRn6iK8hn6GPGWF8MyTRfqT0LuJ8Z50hpVnNM0cU7OCcQSTJmbZCBJ+5vDPa7Yg/tcJXNW4Z5HeD0RtCKd+/4ZXhX58EmSqGOe4euxJ2GUKYVbqMke6c4JtRvfqNhba61LeU1o5yJ3hm+N3gW2G1tW1ISFlnJFhmCNrX7Z7WrsOact1sF6cnObcMc1DWvu6SsN2s0fXq9FLMLINMqnQ9jfrbNrjIXPc9swzhM0ZJzBVPZKrQrDPiViNvTz/WGUnETTU9REbEbRzzjEmbEXMvyjiDThkxcjXuXqn8PhgZvwAZyOgdMpDRO2Qgo3fIQEbvkIGM3iEDGb1DBjJ69+cy6Akzzu/EchnqQwYyeoeMB8/w4z1PkOHnx6Tb11YdHjujyrN8q4u33HEZxP1Jhpk3foSkmU3pkVcjWevxeD1pMufnYAZejm6k6JQhw9Oel4xq5Meim/O7mYOSlwzdZvifIjNImEN6WPHYFn7OiHjAZTXo/TcM/DijvW7I7jMPv32IMX6+Gn48kVHFnRnyw+WPz+cETsOP99/E0mWOlYEvGcGT5PNNLBfya0bMBA+/jA+rUUSPhfHLOK+Gy5Ut5skiaLObNZNuZJJRxnk1aF+XhR1FqMtx85J0Dx320K+pXpW1RVEWenKT1uuizDnso65xYrNU7cZbF7dnu1tKHbhW+FPdZS8xJ9VoGXd5GVJ7WxrcqjPZDF5D93yslc8W5Kt7PtbKNuJOz9IB8OcErxmS4z7qmyfJAAAAAAAAAAAAAAAAgD/nPxQGUI6L5HvNAAAAAElFTkSuQmCC" className='copy-png' onClick={copyPassword} alt="Copy Icon" />
        </div>
      </div>
      <div className="customization">
        <div className="range-box">
          <p className="raneno">{passwordLength}</p>
          <input
            type="range"
            name="passwordLength"
            id="passwordLength"
            min={8}
            max={60}
            value={passwordLength}
            onChange={handleRangeChange}
          />
        </div>
        <div className="check-boxes">
          <div>
            <input
              type="checkbox"
              name="uppercase"
              id="uppercase"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            <label htmlFor="uppercase">Upper Case Letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="lowercase"
              id="lowercase"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            <label htmlFor="lowercase">Lower Case Letters</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="symbols"
              id="symbols"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            <label htmlFor="symbols">Symbols</label>
          </div>
          <div>
            <input
              type="checkbox"
              name="numbers"
              id="numbers"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            <label htmlFor="numbers">Numbers</label>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="copypass" onClick={copyPassword}>Copy</button>
        <button className="generate" onClick={createPassword}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default PasswordGenerator;
