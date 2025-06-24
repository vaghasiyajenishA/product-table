// ProductTable (Table.js) styles

export const tablePaper = (theme) => ({
  width: '100%',
  overflow: 'hidden',
  borderRadius: 3,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  border: '1px solid rgba(255, 255, 255, 0.2)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
});

export const tableContainer = {
  maxHeight: 500,
  overflow: 'auto',
};

export const tableHeadCell = (theme) => ({
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

export const tableRow = {
  transition: 'all 0.2s ease-in-out',
  '&:nth-of-type(even)': {
    backgroundColor: 'rgba(0, 0, 0, 0.01)',
  },
  '&:hover': {
    backgroundColor: 'rgba(99, 102, 241, 0.02)',
    transform: 'translateY(-1px)',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
  },
};

export const tableCell = {
  borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  py: 2,
};

export const emptyStateAvatar = (theme) => ({
  width: 80,
  height: 80,
  mx: 'auto',
  mb: 2,
  backgroundColor: 'rgba(99, 102, 241, 0.1)',
  color: theme.palette.primary.main,
});

export const emptyStateTitle = {
  mb: 1,
  fontWeight: 500,
};

export const emptyStateSubtitle = {
  opacity: 0.7,
};

export const actionButton = (color, hoverColor) => ({
  backgroundColor: color,
  '&:hover': {
    backgroundColor: hoverColor,
  },
});

export const categoryChip = (color) => ({
  backgroundColor: `${color}15`,
  color: color,
  fontWeight: 500,
  border: `1px solid ${color}30`,
});

export const titleAvatar = (color) => ({
  width: 32,
  height: 32,
  fontSize: '0.875rem',
  backgroundColor: color,
  color: 'white',
});

export const titleText = (theme) => ({
  maxWidth: 200,
  fontWeight: 500,
  color: theme.palette.text.primary,
});

export const bodyText = (theme) => ({
  maxWidth: 200,
  color: theme.palette.text.secondary,
  lineHeight: 1.4,
});

export const priceText = (theme) => ({
  fontWeight: 600,
  color: theme.palette.success.main,
  fontSize: '1.1rem',
});

export const pagination = {
  borderTop: '1px solid rgba(0, 0, 0, 0.05)',
  backgroundColor: 'rgba(99, 102, 241, 0.02)',
}; 