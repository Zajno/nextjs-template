import './style.sass';
import React from 'react';

type Props = {
    columns: string[],
    rows: string[][],
};

export const Table = ({ columns, rows }: Props) => {
    return (
        <table>
            <thead>
                <tr>
                    {columns.map(col => (
                        <th
                            key={`table__${col}`}
                            className='desc-2 mona-lisa'
                        >
                            {col}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={`table__row-${i}`}>
                        {row.map(cell => (
                            <td
                                className='desc-2'
                                key={`cell__${cell}`}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};
