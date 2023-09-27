import { Stack, Typography } from "@mui/material";
import { makeStyles } from 'tss-react/mui';
import HeroBannerImage from '../assets/images/HeroBannerImage.png';

const useStyles = makeStyles()(theme => ({
  hero: {
    background: `url(${HeroBannerImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    width: '100%',
    padding: '3rem 0',
    backgroundPosition: '50% 60%',
    height: 'clamp(20rem,55vw,45rem)',
    textAlign: 'center',
    opacity: '0.7'
  }
}));

const HeroBanner = () => {
  const { classes } = useStyles();

  return (
    <Stack justifyContent='center' alignItems='center' className={classes.hero}>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '55px', xs: '40px' } }} mb='23px' mt='30px' color='#e74848'>
        {/* Unleash Your Inner Athlete! */}
      </Typography>
      <Typography fontSize='22px' lineHeight='35px' mb={4} color='#e74848'>
        {/* check out the most effective exercises */}
      </Typography>
      <Stack>
        {/* <a href="#exercises" style={{
            marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#e74848', padding: '14px', fontSize: '22px', textTransform: 'none', color: '#000000', borderRadius: '4px'
        }}>Explore Exercises</a> */}
      </Stack>
    </Stack >
  )
}

export default HeroBanner