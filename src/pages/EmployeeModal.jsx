import React from 'react';
import Modal from 'react-modal';


const EmployeeModal = ({ isOpen, onClose, onSubmit, onClear }) => {
  const [name, setName] = React.useState('');
  const [num, setNum] = React.useState('');
  const [schoolLevel, setSchoolLevel] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [address, setAddress] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8080/api/benef', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, num, schoolLevel, mobile, address })
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleClear = () => {
    setName('');
    setNum('');
    setSchoolLevel('');
    setMobile('');
    setAddress('');
    onClear();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
        <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" value={name} onChange={(event) => setName(event.target.value)} className="bg-white p-2 rounded" />
          <label htmlFor="num">Num</label>
          <input type="text" id="num" name="num" value={num} onChange={(event) => setNum(event.target.value)} className="bg-white p-2 rounded" />
          <label htmlFor="schoolLevel">School Level</label>
          <input type="text" id="schoolLevel" name="schoolLevel" value={schoolLevel} onChange={(event) => setSchoolLevel(event.target.value)} className="bg-white p-2 rounded" />
          <label htmlFor="mobile">Mobile</label>
          <input type="text" id="mobile" name="mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} className="bg-white p-2 rounded" />
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" value={address} onChange={(event) => setAddress(event.target.value)} className="bg-white p-2 rounded" />
        </div>
        <div className="flex gap-2 mt-4">
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Add
          </button>
          <button type="button" onClick={handleClear} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Clear
          </button>
        </div>
      </form>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default EmployeeModal;