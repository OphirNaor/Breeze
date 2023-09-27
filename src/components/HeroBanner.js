import { Stack, Typography } from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import HeroBannerImage from '../assets/images/HeroBannerImage.png';
import { Link } from "react-router-dom";

const useStyles = makeStyles()(theme => ({
  hero: {
    background: `url(${HeroBannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%',
    padding: '3rem 0',
    backgroundPosition: '50% 65%',
    height: 'clamp(20rem,55vw,45rem)',
    textAlign: 'center',
    // opacity: '0.7'
  }
}));

const HeroBanner = () => {
  const { classes } = useStyles();

  return (
    <Stack justifyContent='center' alignItems='center' className={classes.hero}>
      <Stack alignItems='center' position='absolute' bottom='18%'>
        <Typography fontWeight={700} sx={{ fontSize: { lg: '45px', xs: '40px' } }} mt='40px' color='#00000'>
          Blending Health and Flavor <br />
          One Sip at a Time
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4} color='#00000'>
          check out the best smoothies
        </Typography>
        <Stack>
          <Link to='/menu' style={{
            textDecoration: 'none', width: '200px', textAlign: 'center', background: '#e74848', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#000000', borderRadius: '4px'
          }}>I Want It!</Link>
        </Stack>
      </Stack>
    </Stack >
  )
}

export default HeroBanner