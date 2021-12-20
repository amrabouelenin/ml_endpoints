import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ProcessImage from './components/ProcessImage';
import { Route, Routes } from 'react-router-dom'
import About from './components/About';
import Team from './components/Team';
// import "prismjs/themes/prism-twilight.css";
import "prismjs/themes/prism-coy.css";




function App() {
	return (
    <Box sx={{ width: '100%', textAlign: 'center' }}>
      <Typography variant="h3" component="div" gutterBottom>
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        Ui Element Detector
      </Typography>
      <Routes>
          <Route
            path="/"
            element={
              <>
                <Typography variant="h6" display="block" gutterBottom>
                Please upload your image/screenshot and we will process it for you...
                </Typography>
                <ProcessImage/>
              </>
            }
          />
          <Route path='/about' element={<About />} />
          <Route path='/team' element={<Team />} />
        </Routes>




    </Box>
	);

}

export default App;
