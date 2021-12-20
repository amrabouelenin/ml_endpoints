import ImageToDetect from "./ImageToDetect"
import DetectedImage from "./DetectedImage"
import Box from '@mui/material/Box';
import download from './download.png'
import { PrismCode } from "./PrismCode";
import Typography from '@mui/material/Typography';


export const MlOutput = ({detectedimage, imagetodetect, code_generated}) => {
  console.log(imagetodetect)
  return (
    <div>
      <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop:5 }}>
        {
          imagetodetect !== undefined ? (
            <>
              <ImageToDetect imagetodetect = {imagetodetect}/>
              <img alt='Arrow Process' width={100} src= {download}/>
              <DetectedImage detectedimage = {detectedimage}/>
            </>

          ) : (
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Output of the Ui Detection process.
              </Typography>
        )}     
      </Box>
      <PrismCode
        code={code_generated}
        language="python"
        plugins={["line-numbers"]}
      >
      </PrismCode>
    </div>
  )
}

export default MlOutput