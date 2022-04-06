import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Stats = () => {
    const nav = useNavigate();
    return(
        <div>
            <h2>
                View Stats
            </h2>

            <h3>
                Your winning game number:  
            </h3>
            
            <h3>
                You winnig rate: 
            </h3>

            <Button 
                variant="outlined"
                onClick={() => nav("/play")}
                >
                Play Game Again
            </Button>

        </div>
    )
}