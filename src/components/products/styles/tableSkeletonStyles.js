// TableSkeleton styles

export const skeletonPaper = (theme) => ({
  width: '100%',
  overflow: 'hidden',
  borderRadius: 3,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
});

export const skeletonContainer = {
  maxHeight: 600,
  overflow: 'auto',
};

export const skeletonHeadCell = (theme) => ({
  position: 'sticky',
  top: 0,
  zIndex: 2,
  backgroundColor: theme.palette.background.paper,
  fontWeight: 600,
  fontSize: '0.875rem',
  color: theme.palette.primary.main,
  borderBottom: '2px solid rgba(99, 102, 241, 0.1)',
  '&:first-of-type': {
    borderTopLeftRadius: 12,
  },
  '&:last-of-type': {
    borderTopRightRadius: 12,
  },
});

export const skeletonRow = {
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
  },
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.02)',
  },
};

export const skeletonCell = {
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  py: 2,
};

export const skeletonPagination = {
  borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  backgroundColor: 'rgba(99, 102, 241, 0.02)',
}; 