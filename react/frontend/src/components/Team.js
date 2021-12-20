import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Box from '@mui/material/Box';

import amro from './amro.jpeg'

export const Team = () => {
  let className = 'teamcard';

  return (
    <Box sx={{ display: 'inline-flex', alignItems: 'center', marginTop:5 }}>
      <Card sx={{ maxWidth: 345, margin:5}} className={className} >
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={amro}
            alt="Amro Abouelenein"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Amro Abouelenein
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Engineer.
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin:5}} className={className}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={amro}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Amro Abouelenein
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Engineer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card sx={{ maxWidth: 345, margin:3}} className={className}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={amro}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Amro Abouelenein
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Software Engineer
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  )
}

export default Team
