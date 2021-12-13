import ImageToDetect from "./ImageToDetect"
import DetectedImage from "./DetectedImage"
import OutputCodeGenerated from "./OutputCodeGenerated"
import Box from '@mui/material/Box';

export const MlOutput = ({detectedimage, imagetodetect}) => {
  return (
    <div>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop:5 }}>
        <ImageToDetect imagetodetect = {imagetodetect}/>
        <img width={100} src= 'http://127.0.0.1:8000/media/images/download.png'/>
        <DetectedImage detectedimage = {detectedimage}/>
      </Box>

      <OutputCodeGenerated/>
    </div>
  )
}

export default MlOutput