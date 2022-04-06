import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const PlayGame = () => {
    const nav = useNavigate();
    return(
        <div>
            <h2>
                Game Stats
            </h2>
            <Button
                variant='outlined'
                onClick={() => nav("/setup")}
            >
                Log Another Game
            </Button>

            <Button
                variant='outlined'
                onClick={() => nav("/") }
            >
                Home
            </Button>     
        </div>
    )
}