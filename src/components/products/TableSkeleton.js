import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Skeleton,
  Box,
  useTheme,
} from '@mui/material';
import { columns } from '../../utiles';
import {
  skeletonPaper,
  skeletonContainer,
  skeletonHeadCell,
  skeletonRow,
  skeletonCell,
  skeletonPagination,
} from './styles/tableSkeletonStyles';

const TableSkeleton = ({ rowsCount = 5 }) => {
  const theme = useTheme();

  return (
    <Paper sx={skeletonPaper(theme)}>
      <TableContainer sx={skeletonContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={skeletonHeadCell(theme)}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.from({ length: rowsCount }).map((_, index) => (
              <TableRow key={index} sx={skeletonRow}>
                {columns.map((column) => (
                  <TableCell key={column.id} align={column.align} sx={skeletonCell}>
                    {column.id === 'actions' ? (
                      <Box sx={{ display: 'flex', gap: 1 }}>
                        <Skeleton 
                          variant="circular" 
                          width={32} 
                          height={32} 
                          sx={{ backgroundColor: 'rgba(25, 118, 210, 0.1)' }}
                        />
                        <Skeleton 
                          variant="circular" 
                          width={32} 
                          height={32} 
                          sx={{ backgroundColor: 'rgba(156, 39, 176, 0.1)' }}
                        />
                        <Skeleton 
                          variant="circular" 
                          width={32} 
                          height={32} 
                          sx={{ backgroundColor: 'rgba(211, 47, 47, 0.1)' }}
                        />
                      </Box>
                    ) : column.id === 'price' ? (
                      <Skeleton 
                        variant="text" 
                        width={80} 
                        height={24} 
                        sx={{ backgroundColor: 'rgba(76, 175, 80, 0.1)' }}
                      />
                    ) : column.id === 'category' ? (
                      <Skeleton 
                        variant="rectangular" 
                        width={80} 
                        height={24} 
                        sx={{ borderRadius: 12, backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                      />
                    ) : column.id === 'title' ? (
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Skeleton 
                          variant="circular" 
                          width={32} 
                          height={32} 
                          sx={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
                        />
                        <Skeleton 
                          variant="text" 
                          width={120} 
                          height={20} 
                          sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                        />
                      </Box>
                    ) : (
                      <Skeleton 
                        variant="text" 
                        width={200} 
                        height={20} 
                        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}
                      />
                    )}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center', ...skeletonPagination }}>
        <Skeleton variant="text" width={200} height={20} />
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Skeleton variant="rectangular" width={80} height={32} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" width={80} height={32} sx={{ borderRadius: 1 }} />
          <Skeleton variant="rectangular" width={80} height={32} sx={{ borderRadius: 1 }} />
        </Box>
      </Box>
    </Paper>
  );
};

export default TableSkeleton; 