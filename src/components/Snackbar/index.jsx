import * as React from 'react';;
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars({ type, message }) {

    const [open, setOpen] = React.useState(true);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    React.useEffect(() => {
        setOpen(true);
    }, [message]);

    const anchorOrigin = { vertical: 'top', horizontal: 'center' }

    return (
        <Snackbar
            style={{ top: '50px' }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={anchorOrigin}
        >
            <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
}
