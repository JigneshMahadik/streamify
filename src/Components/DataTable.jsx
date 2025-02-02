import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import "../CSS/DataTable.css";

const columns = [
  { field: 'id', headerName: 'ID', width: 70  },
  { field: 'songName', headerName: 'Song Name', width: 200 },
  { field: 'artist', headerName: 'Artist', width: 150 },
  { field: 'dateStreamed', headerName: 'Date Streamed', width: 180 },
  {
    field: 'streamCount',
    headerName: 'Stream Count',
    type: 'number',
    width: 150,
  },
  {
    field: 'userId',
    headerName: 'User ID',
    type: 'number',
    width: 120,
  },
];

const rows = [
  { id: 1, songName: 'Shape of You', artist: 'Ed Sheeran', dateStreamed: '2025-01-15', streamCount: 3500, userId: 101 },
  { id: 2, songName: 'Blinding Lights', artist: 'The Weeknd', dateStreamed: '2025-01-17', streamCount: 4500, userId: 102 },
  { id: 3, songName: 'Levitating', artist: 'Dua Lipa', dateStreamed: '2025-01-20', streamCount: 2900, userId: 103 },
  { id: 4, songName: 'Save Your Tears', artist: 'The Weeknd', dateStreamed: '2025-01-10', streamCount: 5100, userId: 104 },
  { id: 5, songName: 'Bad Bunny', artist: 'Kendrick Lamar', dateStreamed: '2025-01-22', streamCount: 3300, userId: 105 },
  { id: 6, songName: 'Good 4 U', artist: 'Olivia Rodrigo', dateStreamed: '2025-01-25', streamCount: 4100, userId: 106 },
  { id: 7, songName: 'Peaches', artist: 'Justin Bieber', dateStreamed: '2025-01-14', streamCount: 4700, userId: 107 },
  { id: 8, songName: 'Montero', artist: 'Lil Nas X', dateStreamed: '2025-01-18', streamCount: 5200, userId: 108 },
  { id: 9, songName: 'Industry Baby', artist: 'Lil Nas X', dateStreamed: '2025-01-21', streamCount: 4800, userId: 109 },
  { id: 10, songName: 'Watermelon Sugar', artist: 'Harry Styles', dateStreamed: '2025-01-19', streamCount: 4000, userId: 110 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTable() {
  return (
    <div style={{ backgroundColor: '#151a25', paddingBottom: '20px', margin: '0px 20px', paddingTop: '1%' }}>
      <h3 className='mb-4' style={{ color: 'white' }}>Stream Records</h3>
      <Paper sx={{ height: 400, width: '100%', backgroundColor: '#151a25' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          sx={{
            border: 0,
            width: '100%',
            '& .MuiTablePagination-root': {
              color: 'white',
              backgroundColor: '#1e2635',
            },
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: '#1e2635',
              color: 'white',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: '#1e2635',
              color: 'white',
            },
            '& .MuiDataGrid-cell': {
              color: 'white',
            },
            '& .MuiButtonBase-root.MuiIconButton-root': {
              color: 'white',
            },
            '& .MuiTablePagination-caption': {
              color: 'white',
            },
            '& .MuiTablePagination-selectIcon': {
              color: 'white',
            },
          }}
        />
      </Paper>
    </div>
  );
}
