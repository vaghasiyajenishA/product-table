import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, IconButton, Typography, Chip, Avatar, useTheme } from '@mui/material';
import { Delete, Edit, Visibility, Inventory } from '@mui/icons-material';
import { columns, formatCurrency } from '../../utiles';
import {
  tablePaper,
  tableContainer,
  tableHeadCell,
  tableRow,
  tableCell,
  emptyStateAvatar,
  emptyStateTitle,
  emptyStateSubtitle,
  actionButton,
  categoryChip,
  titleAvatar,
  titleText,
  bodyText,
  priceText,
  pagination,
} from './styles/productTableStyles';

export default function StickyHeadTable(props) {
    const { filteredProducts } = props
    const theme = useTheme();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const getCategoryColor = () => {
        return theme.palette.primary.main;
    };

    return (
        <Paper sx={tablePaper(theme)}>
            <TableContainer sx={tableContainer}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                    sx={tableHeadCell(theme)}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center" sx={{ py: 12 }}>
                                    <Box sx={{ textAlign: 'center' }}>
                                        <Avatar sx={emptyStateAvatar(theme)}>
                                            <Inventory sx={{ fontSize: 40 }} />
                                        </Avatar>
                                        <Typography variant="h5" color="text.secondary" sx={emptyStateTitle}>
                                            No Products Found
                                        </Typography>
                                        <Typography variant="body1" color="text.secondary" sx={emptyStateSubtitle}>
                                            Try adjusting your filters or add a new product to get started
                                        </Typography>
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredProducts
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow 
                                            hover 
                                            role="checkbox" 
                                            tabIndex={-1} 
                                            key={row.id}
                                            sx={tableRow}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell 
                                                        key={column.id} 
                                                        align={column.align}
                                                        sx={tableCell}
                                                    >
                                                        {column.id === 'price'
                                                            ? (
                                                                <Typography 
                                                                    variant="body1" 
                                                                    sx={priceText(theme)}
                                                                >
                                                                    {formatCurrency(value)}
                                                                </Typography>
                                                            )
                                                            : column.id === "actions" ? (
                                                                <Box sx={{ display: "flex", gap: 1 }}>
                                                                    <IconButton 
                                                                        color="primary" 
                                                                        onClick={() => props.handleView(row)} 
                                                                        size="small"
                                                                        sx={actionButton('rgba(25, 118, 210, 0.1)', 'rgba(25, 118, 210, 0.2)')}
                                                                    >
                                                                        <Visibility />
                                                                    </IconButton>
                                                                    <IconButton 
                                                                        color="secondary" 
                                                                        onClick={() => props.handleEdit(row)} 
                                                                        size="small"
                                                                        sx={actionButton('rgba(156, 39, 176, 0.1)', 'rgba(156, 39, 176, 0.2)')}
                                                                    >
                                                                        <Edit />
                                                                    </IconButton>
                                                                    <IconButton 
                                                                        color="error" 
                                                                        onClick={() => props.handleDelete(row)} 
                                                                        size="small"
                                                                        sx={actionButton('rgba(211, 47, 47, 0.1)', 'rgba(211, 47, 47, 0.2)')}
                                                                    >
                                                                            <Delete />
                                                                    </IconButton>
                                                                </Box>
                                                            ) : column.id === 'category' ? (
                                                                <Chip 
                                                                    label={value} 
                                                                    size="small"
                                                                    sx={categoryChip(getCategoryColor())}
                                                                />
                                                            ) : column.id === 'title' ? (
                                                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                                    <Avatar sx={titleAvatar(getCategoryColor())}>
                                                                        {value?.charAt(0)?.toUpperCase()}
                                                                    </Avatar>
                                                                    <Typography 
                                                                        variant="body2" 
                                                                        sx={titleText(theme)}
                                                                        noWrap
                                                                    >
                                                                        {value}
                                                                    </Typography>
                                                                </Box>
                                                            ) : (
                                                                <Typography 
                                                                    variant="body2" 
                                                                    sx={bodyText(theme)}
                                                                    noWrap
                                                                >
                                                                    {value}
                                                                </Typography>
                                                            )
                                                        }
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            {filteredProducts.length > 0 && (
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={filteredProducts.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    sx={pagination}
                />
            )}
        </Paper>
    );
}
