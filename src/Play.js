import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const Play = () => {
    const nav = useNavigate();
    return(
        <div>
            <h2>
                Play
            </h2>

            <Button variant="outlined">
                I Won
            </Button>

            <Button variant="outlined">
                I Lost
            </Button>            
 
        </div>
    )
}