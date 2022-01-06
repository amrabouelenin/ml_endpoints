import {useState} from 'react'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';
import { styled } from '@mui/material/styles';
import MlOutput from './MlOutput';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export const ProcessImage = () => {

  // Define required constants for Ui Detector Form
  const [confidence, setConfidence] = useState('0.25')

  const [uiimage, setImage ] = useState();
  const [detectedimage, setDetectedImage ] = useState();
  const [imagetodetect, setImagetoDetect ] = useState();
  const [code_generated, setCodeGenerated] = useState('Code to be generated');
  const [codetype, setType] = React.useState('html');
  const [modeltype, setModelType] = React.useState('yolov5');

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const handleModelChange = (event) => {
    setModelType(event.target.value);
  };

  const handleConfidenceChange = (event) => {
    setConfidence(event.target.value);
  };
  // Process Button
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  // const timer = useRef();
  const buttonSx = {
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
  };
  

  const Input = styled('input')({
    display: 'none',
  });

  // Handle Process Button
  const handleProcessButtonClick =  async () => {

    if (!confidence) {
      alert('Please specify confidence')
      return
    }

    setImagetoDetect('')
    setDetectedImage('')

    // Prepare data to be send
    const uploadData = new FormData();
    uploadData.append('author', '1');
    uploadData.append('description', 'Detection of user interface screen shot');
    uploadData.append('ml_models', modeltype);
    uploadData.append('status', 'successfull');
    uploadData.append('image_to_detect', uiimage);
    uploadData.append('confidence', confidence);
    uploadData.append('type', codetype);
    

    console.log(uploadData)

    // Call Ui Element Detection service
    var apiServer = 'http://192.168.56.101:8000/'
    var apiUrl = apiServer + 'api/v1/yolov5/detectuielements/'

    if (!loading) {
      setSuccess(false);
      setLoading(true);
    }

    const res = await fetch(apiUrl, {
      method: 'POST',
      body: uploadData,
    }).then(res => res.json())

    setSuccess(true);
    setLoading(false);
    setImagetoDetect(apiServer + res['image_to_detect'])
    setDetectedImage(apiServer + res['detected_image_path']);

    fetch(apiServer + res['code_generated']).then(getTextCode => getTextCode.text()).then((data) => {
      setCodeGenerated(data)
    })


    console.log(apiServer + res['detected_image_path'])
    console.log(res)
    console.log(code_generated)

    // Set the output code 
  };

  return (
    <>
      <form className='upload-form'>
        <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Model Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={modeltype}
              onChange={handleModelChange}
              label="modelType"
            >
              <MenuItem value={'yolov5'}>Yolov5</MenuItem>
              <MenuItem value={'yolovx'}>YolovX</MenuItem>
            </Select>
          </FormControl>

          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Type</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={codetype}
              onChange={handleChange}
              label="Type"
            >
              <MenuItem value={'html'}>HTML</MenuItem>
              <MenuItem value={'pyqt'}>PyQt</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">Confidence</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={confidence}
              onChange={handleConfidenceChange}
              label="ModelConfidence"
            >
              <MenuItem value={'0.25'}>0.25</MenuItem>
              <MenuItem value={'0.3'}>0.3</MenuItem>
              <MenuItem value={'0.4'}>0.4</MenuItem>
              <MenuItem value={'0.45'}>0.45</MenuItem>
              <MenuItem value={'0.5'}>0.5</MenuItem>
              <MenuItem value={'0.65'}>0.65</MenuItem>
              <MenuItem value={'0.7'}>0.7</MenuItem>
              <MenuItem value={'0.75'}>0.75</MenuItem>
              <MenuItem value={'0.8'}>0.8</MenuItem>
              <MenuItem value={'0.85'}>0.85</MenuItem>
              <MenuItem value={'0.9'}>0.9</MenuItem>
              <MenuItem value={'0.95'}>0.95</MenuItem>

            </Select>
          </FormControl>
          <div className='form-control'>
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file"  type="file" onChange={(evt) => setImage(evt.target.files[0])} />
              <Button variant="contained" component="span" onClick={(e)=> { setSuccess(false); setCodeGenerated('Code to be generated.....')}}>
                Upload
              </Button>
            </label>
          </div>
          <div className='form-control'>
            <label htmlFor="icon-button-file">
              <Input accept="image/*" id="icon-button-file" type="file" onChange={(evt) => setImage(evt.target.files[0])} />
              <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
              </IconButton>
            </label>
          </div>
  
        </Box>

      </form>
      <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
        <Box sx={{ m: 1, position: 'relative' }}>
          <Fab
            aria-label="save"
            color="primary"
            sx={buttonSx}
            onClick={handleProcessButtonClick}
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
            onClick={handleProcessButtonClick}
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
      </Box>
      <MlOutput detectedimage= {detectedimage} imagetodetect={imagetodetect} code_generated={code_generated} />
    </>
  )
}

export default ProcessImage