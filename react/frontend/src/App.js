import './App.css';
import React, { useEffect, useState, setState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Widget } from "@uploadcare/react-widget";
// import Posts from './components/Posts';
import PostLoadingComponent from './components/PostLoading';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

function App() {
	const PostLoading = PostLoadingComponent();
	const [appState, setAppState] = useState({
		loading: false,
		posts: null,
	});
  const Input = styled('input')({
    display: 'none',
  });
  const [ uiimage, setImage ] = useState();
  var Image = ''

  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();

  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);


  const handleButtonClick =  async () => {
    // const res = await fetch('http://127.0.0.1:8000/api/v1/yolov5/')
    // const data = await res.json()
    const uploadData = new FormData();
    uploadData.append('author', '1');
    uploadData.append('description', 'Amro Test');
    uploadData.append('ml_models', 'yolov5');
    uploadData.append('status', 'successfull');
    uploadData.append('image_to_detect', uiimage);

    console.log(uploadData)

    const res = await fetch('http://127.0.0.1:8000/api/v1/yolov5/detectuielements/', {
      method: 'POST',
      // headers: {
      //   'Content-type': 'application/json',
      // },
      // body: JSON.stringify (transaction_data),
      body: uploadData,
    }).then(res => res.json())
    Image = 'http://127.0.0.1:8000/' + res['detected_image_path']
    console.log(Image)
    
    //const data = await res.json()

    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
    console.log(res)
  };


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
      <Typography variant="h3" component="div" gutterBottom>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Yolov5" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="YoloX" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="R-CNN" />

        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file"  type="file" onChange={(evt) => setImage(evt.target.files[0])} />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        <label htmlFor="icon-button-file">
          <Input accept="image/*" id="icon-button-file" type="file" />
          <IconButton color="primary" aria-label="upload picture" component="span">
            <PhotoCamera />
          </IconButton>
        </label>
      </Typography>

      
    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          Process
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
      <img src={Image}/>
    </Box>

    </Box>

    

    
	);

}

export default App;
