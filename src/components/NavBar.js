import { Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import Logo from '../assets/icons/Logo.png';

const useStyles = makeStyles()(theme => ({
    mainNavbar: {
        position: 'fixed',
        fontWeight: '550',
        padding: '0.5rem 1.5rem',
        width: '100%',
        zIndex: 1,
        opacity: 1,
        transition: 'all .3s',
    },
    scrollNavbar: {
        position: 'fixed',
        fontWeight: '550',
        width: '100%',
        zIndex: 1,
        opacity: 1,
        background: '#ffc8238a',
        transition: 'all .3s',
        padding: '0.5rem 1.5rem',
        boxShadow: '0 0 10px #0000001a'

    },
    navbarLink: {
        textDecoration: 'none',
        color: '#e01721',
        fontSize: 24,
        '&:hover': {
            color: '#e96e6e'
        }
    },
    logo: {
        display: 'block',
        maxHeight: '100%',
        maxWidth: '100%',
        width: 110,
        height: 'auto',
        objectFit: 'contain'
    }
}))
const NavBar = () => {
    const { classes } = useStyles();
    const [scrollNavbar, setScrollNavbar] = useState(false);


    const changeBGWhenScroll = () => {
        if (window.scrollY >= 66) {
            setScrollNavbar(true)
        } else {
            setScrollNavbar(false)
        }
    }

    useEffect(() => {
        changeBGWhenScroll();
        window.addEventListener("scroll", changeBGWhenScroll);
    })

    return (
        <Stack direction='row' justifyContent='space-around' alignItems='center' className={scrollNavbar ? classes.scrollNavbar : classes.mainNavbar}>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <img src={Logo} alt='logo' className={classes.logo} />
            </Link>
            <Link to='/' className={classes.navbarLink}>
                Home
            </Link>
            <Link to='/menu' className={classes.navbarLink}>
                Menu
            </Link>
            <Link to='/branches' className={classes.navbarLink}>
                Branches
            </Link>
            <Link to='/about' className={classes.navbarLink}>
                About
            </Link>
            <Link to='/contact' className={classes.navbarLink}>
                Contact Us
            </Link>
        </Stack>
    )
}

export default NavBar