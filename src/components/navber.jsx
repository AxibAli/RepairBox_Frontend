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
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import HomeLogo from '../images/logohome.png'

// // import Button from 'react-bootstrap/Button';
// // import styles from './MyNavbar.module.css'
// import '../App.css'


// function ColorSchemesExample() {
//   return (
//     <div>     
//       <Navbar style={{backgroundColor:'#fff',padding:20}} >
//         <Container>
//           <Navbar.Brand href="/" ><img src={HomeLogo} style={{height:'100px',width:'100px'}} /></Navbar.Brand>
//           <Nav style={{float:'right',fontSize:'16px',fontWeight:'400'}}>
//             <Nav.Link  href="/about">About Us</Nav.Link>
//             <Nav.Link href="/book-repair">Booking</Nav.Link>
//             <Nav.Link href="/track">Track</Nav.Link>      
//            <Nav.Link className='LoginBtn'   href="/auth/login">LOGIN</Nav.Link> 
//           </Nav>
//         </Container>
//       </Navbar>
//       </div>
//   );
// }

// export default ColorSchemesExample;
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLogo from '../images/logohome.png';
import '../App.css';

function ColorSchemesExample() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#fff' }}>
      <Container>
        <Navbar.Brand href="/">
          <img src={HomeLogo} style={{ height: '100px', width: '100px' }} alt="Home Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/book-repair">Booking</Nav.Link>
            <Nav.Link href="/track" style={{paddingRight:30}}>Track</Nav.Link>
            <Nav.Link className="LoginBtn" href="/auth/login">LOGIN</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ColorSchemesExample;

