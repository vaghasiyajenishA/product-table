import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
  Box,
  Alert,
  CircularProgress,
} from '@mui/material';
import { WarningAmber } from '@mui/icons-material';

const ConfirmDialog = ({
  open,
  title = 'Are you sure?',
  description = '',
  onConfirm,
  onCancel,
  loading = false,
  confirmText = 'Delete',
  cancelText = 'Cancel',
  confirmColor = 'error',
  alert,
}) => {
  return (
    <Dialog open={open} onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <WarningAmber color="warning" sx={{ fontSize: 28 }} />
          <Typography variant="h6" fontWeight={600}>{title}</Typography>
        </Box>
      </DialogTitle>
      <DialogContent>
        {alert && (
          <Alert severity={alert.severity} sx={{ mb: 2 }}>{alert.message}</Alert>
        )}
        <Typography variant="body1" color="text.secondary">
          {description}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onCancel} disabled={loading} variant="outlined">
          {cancelText}
        </Button>
        <Button
          onClick={onConfirm}
          color={confirmColor}
          variant="contained"
          disabled={loading}
          startIcon={loading ? <CircularProgress size={18} /> : null}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog; 