// import * as React from 'react';
// import { Box } from '@mui/material';
// import Typography from '@mui/material/Typography';

// export default function Types() {
//   return (
//     <Box sx={{ width: '100%',marginTop:20,textAlign:'center' }}>
//       <Typography variant="h4" >
//       Frequently Asked Questions
//       </Typography>
//       <Typography variant="p" sx={{color:'grey'}} >
//       The most common questions about how our works.
//       </Typography>
//     </Box>
//   );
// }

import React from 'react';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', marginTop: 20, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ fontSize: '2rem', marginBottom: '1rem', '@media (max-width: 600px)': { fontSize: '1.5rem' } }}>
        Frequently Asked Questions
      </Typography>
      <Typography variant="body1" sx={{ color: 'grey', '@media (max-width: 600px)': { fontSize: '0.9rem' } }}>
        The most common questions about how our works.
      </Typography>
    </Box>
  );
}

