import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      
      <Box display="flex"  flexDirection="column" className="homeImg" alignItems="center" textAlign="center">
      <h5 style={{alignItems:"center",justifyContent:"center",
      fontFamily:"cursive", 
      fontSize:'30px',
      letterSpacing:'1px',
    textShadow:'2px 2px 4px #EC5A5A'}}
      >Recipe Books</h5>
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{ marginTop: 20, padding:"20", background:"#EC5A5A", fontFamily:'Arial' }}
          variant="contained"
        >
          <Typography style={{fontFamily:'cursive', fontSize:'50'}}>View All RecipeBooks</Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;