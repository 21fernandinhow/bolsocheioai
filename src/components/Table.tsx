"use client"

import { useState } from "react";

interface TableProps<T> {
    data: T[];
    columns: { name: keyof T; label: string }[];
  }

export default function Table <T>({ data, columns }: TableProps<T>) {

    const [tableIndex, setTableIndex] = useState(0)
    const rowsPerPage = 15

    return (
        <>
            <div className="table">
                <div className="table-content">

                    {columns.map((col, i) => (
                        <div className="table-col" key={i}>

                            <div className="table-header">
                                <h2>{col.label}</h2>
                            </div>

                            <div className="table-body">
                                {data.slice(tableIndex, rowsPerPage+tableIndex).map((item: any, index) => (
                                    <div className="table-cel" key={index}>
                                        {item[col.name]}
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                    
                </div>

                <div className="table-footer">
                    <div>
                        Exibindo {tableIndex+1}-{rowsPerPage + tableIndex > data.length ? data.length : rowsPerPage + tableIndex} de {data.length}
                    </div>
                    <div className="navigation">
                        <button 
                            className="btn-sm" 
                            onClick={() => setTableIndex(tableIndex > 10 ? tableIndex - rowsPerPage : 0)}
                        > 
                            {'<'} 
                        </button>
                        <button 
                            className="btn-sm" 
                            onClick={() => setTableIndex(tableIndex + rowsPerPage <= data.length ? tableIndex + rowsPerPage : tableIndex)}
                        > 
                            {'>'} 
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}