import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Home = () => {

    const nav = useNavigate();

    return (
        <>
            <h2>
                Home
            </h2>

            <Button
                variant='outlined'
                onClick={() => nav("/setup")}
            >
                Start Game Log
            </Button>

            <Button
                variant='outlined'
                onClick={() => nav("/play") }
            >
                View the Stats
             </Button>

        </>
    );
};