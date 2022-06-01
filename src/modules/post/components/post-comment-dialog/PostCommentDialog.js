import Button from '@mui/material/Button';
import {Dialog, DialogActions, DialogContent, DialogTitle, TextField} from '@mui/material';
import {useState} from 'react';
import apiClient from '../../../../api/ApiClient';
import './PostCommentDialog.scss';

export default function PostCommentDialog() {
    const [open, setOpen] = useState(false);
    const [comment, setComment] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setComment('');
    };

    const handleAddComment = async () => {
        await apiClient.post('/post-comments', {comment});
        handleClose();
    };

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>Добавить Коментарий</Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Написать коментарий</DialogTitle>
                <DialogContent>
                    <TextField autoFocus
                               margin="dense"
                               id="comment"
                               label="Коментарий"
                               type="email"
                               fullWidth
                               variant="standard"
                               className="post-comment-dialog_text-field"
                               multiline
                               value={comment}
                               rows={4}
                               onChange={(e) => setComment(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Отмена</Button>
                    <Button onClick={handleAddComment}>Добавить</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}