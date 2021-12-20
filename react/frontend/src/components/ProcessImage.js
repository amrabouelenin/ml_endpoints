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
import Checkbox from '@mui/material/Checkbox';
import MlOutput from './MlOutput';

export const ProcessImage = () => {

  // Define required constants for Ui Detector Form
  const [confidence, setConfidence] = useState('0.25')
  const [yolov5, setYolov5] = useState(false)
  const [yoloX, setYoloX] = useState(false)
  const [rcnn, setRcnn] = useState(false)
  const [uiimage, setImage ] = useState();
  const [detectedimage, setDetectedImage ] = useState();
  const [imagetodetect, setImagetoDetect ] = useState();
  const [code_generated, setCodeGenerated] = useState('Code to be generated');

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
  
  // useEffect(() => {
  //   return () => {
  //     clearTimeout(timer.current);
  //   };
  // }, []);
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
    uploadData.append('description', 'Amro Test');
    uploadData.append('ml_models', 'yolov5');
    uploadData.append('status', 'successfull');
    uploadData.append('image_to_detect', uiimage);
    uploadData.append('confidence', confidence);
    

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
          <div className='form-control'>
            <label>Model Confidence</label>
            <input
              type='text'
              placeholder='i.e 0.25'
              value={confidence}
              onChange={(e) => setConfidence(e.target.value)}
            />
          </div>
          <div className='form-control form-control-check'>
            <label>Yolov5</label>
            <Checkbox 
              checked={yolov5}
              value={yolov5}
              onChange={(e) => setYolov5(e.currentTarget.checked)}
            />
          </div>
          <div className='form-control form-control-check'>
            <label>YoloX</label>
            <Checkbox 
              checked={yoloX}
              value={yoloX}
              onChange={(e) => setYoloX(e.currentTarget.checked)}
            />
          </div>
          <div className='form-control form-control-check'>
            <label>R-CNN</label>
            <Checkbox 
              checked={rcnn}
              value={rcnn}
              onChange={(e) => setRcnn(e.currentTarget.checked)}
            />
          </div>
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