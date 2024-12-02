import React, { useState } from "react";

const ExcelLikeSheet = () => {

  const [data, setData] = useState([
    ["", "2Dec", "3Dec", "4Dec"],
    ["Mukesh", "", "", ""],
    ["Satyam", "", "", ""],
    ["Mayank", "", "", ""],
  ]);


  const handleCellClick = (rowIdx, colIdx) => {
    const newData = [...data];
    if (rowIdx !== 0 && colIdx !== 0) {
      newData[rowIdx][colIdx] = newData[rowIdx][colIdx] === "P" ? "A" : "P";
    }
    setData(newData);
  };


  const handleCellDoubleClick = (rowIdx, colIdx) => {
    const newData = [...data];
    if (rowIdx !== 0 && colIdx !== 0) {
      newData[rowIdx][colIdx] = "L";
    }
    setData(newData);
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="text-center">
        <h1 className="font-bold text-5xl">Hello,Attendence</h1>
      </div>
      <div className="p-4">
        <div className="overflow-x-auto border border-gray-300 rounded-lg">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <tbody>
              {data.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  {row.map((cell, colIdx) => (
                    <td
                      key={`${rowIdx}-${colIdx}`}
                      className={`border border-gray-300 text-center p-4 cursor-pointer ${rowIdx === 0 || colIdx === 0 ? "font-bold bg-gray-100" : ""
                        }`}
                      onClick={() => handleCellClick(rowIdx, colIdx)}
                      onDoubleClick={() => handleCellDoubleClick(rowIdx, colIdx)}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>


  );
};

export default ExcelLikeSheet;
