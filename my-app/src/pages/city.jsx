import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import ApartmentOutlined from '@mui/icons-material/ApartmentOutlined';

const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'City Name', headerName: 'City Name', width: 130 },
    { field: 'City Code', headerName: 'City Code', width: 130 },
    { field: 'State Name', headerName: 'State Name', width: 130 },
    {
        field: 'Status',
        headerName: 'Status',
        type: 'number',
        width: 90,
    },
    {
        field: 'Action',
        headerName: 'Action',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
    },
];

const rows = [
    
];

export default function DataTable() {
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

                <div style={{ display: "flex", justifyContent: 'space-evenly', height: 50, alignItems: 'center' }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <ApartmentOutlined />
                        <h2 style={{ fontWeight: 600 }}>State</h2>

                    </div>
                    <input style={{ width: 300, height: 30, borderRadius: 5 }} />
                    <button style={{ width: 100, fontSize: 15, color: "white", backgroundColor: "#7d008a", border: "1px solid black", borderRadius: 10, height: 30, }}>Add</button>
                </div>
                <div style={{ height: 400, width: '100%' }}>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                        pageSizeOptions={[5, 10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </>
    );
}