// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import { Box } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import MenuItem from '@mui/material/MenuItem';

// const pages = ['Booking w2', 'Booking', 'Track','Workshop'];

// function ResponsiveAppBar() {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
 

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

 
//   return (
//     <AppBar position="static">
//       <Container maxWidth="xl" sx={{backgroundColor:'#9061f9'}}>
//         <Toolbar disableGutters>
//           <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="/"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'sans-serif',
//               fontSize:16,
//               fontWeight: 600,
//               color: '#ffff',
//               textDecoration: 'none',
//               paddingLeft:8
//             }}
//           >
//             Joytel
//           </Typography>

//           <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//               {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem>
//               ))}
//             </Menu>
//           </Box>
//           <Typography
//             variant="h5"
//             noWrap
//             component="a"
//             href=""
//             sx={{
//               mr: 2,
//               display: { xs: 'flex', md: 'none' },
//               flexGrow: 1,
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//              Joytel
//           </Typography>
//           <Box sx={{ flexGrow: 1, paddingRight:5, display: { xs: 'none', md: 'flex',justifyContent:'end' } }}>
//             {pages.map((page) => (
//               <Button
//                 key={page}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2,  
//                 fontFamily: 'sans-serif',
//                 fontSize:16,
//                 fontWeight: 600,
//                 color: '#ffff',
//                 paddingLeft:4,
//                 textTransform:'capitalize',
//              }}
//               >
//                 {page}
//               </Button>
//             ))}
//           </Box>

        
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// }
// export default ResponsiveAppBar;
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
  return (
    <div>     
      <Navbar style={{backgroundColor:'#a855f7',padding:20}} variant="dark">
        <Container>
          <Navbar.Brand href="#home">Joytel</Navbar.Brand>
          <Nav style={{float:'right',color:'#fff',fontSize:'18px',fontWeight:'700'}}>
            <Nav.Link href="#home">Booking W2</Nav.Link>
            <Nav.Link href="#features">Booking</Nav.Link>
            <Nav.Link href="#pricing">Track</Nav.Link>
            <Nav.Link href="#pricing">WorkShop</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </div>
  );
}

export default ColorSchemesExample;
