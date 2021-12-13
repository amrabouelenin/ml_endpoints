import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProcessImage from './components/ProcessImage';

function App() {
	return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h3" component="div" gutterBottom>
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        Ui Element Detector
      </Typography>
      <Typography variant="h6" display="block" gutterBottom>
      Please upload your image/screenshot and we will process it for you...
      </Typography>
      <ProcessImage/>
    </Box>
	);

}

export default App;
