import { Box, Typography } from "@mui/material";
import React from "react";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';

const About = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography sx={{ fontFamily: "fantasy" }} variant="h2">
          Thanks For visting..!  
        </Typography>
        <Typography sx={{ fontFamily: "fantasy", color:'#EC5A5A' }} variant="h3">
          By Thenmozhi L
        </Typography>
        <div className="alllinks">
            <a href="https://youtube.com" target="_blank" className="linkcss" >
               <SubscriptionsIcon/>
            </a>
            <a href="https://twitter.com" target="_blank" className="linkcss">
              <TwitterIcon/>
            </a>
            <a href="https://google.com" target="_blank" className="linkcss">
              <GoogleIcon/>
            </a>
        </div>
       
        
      </Box>
    </div>
  );
};

export default About;