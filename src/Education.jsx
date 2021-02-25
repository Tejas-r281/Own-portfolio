import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
    <div className="heading mt-5 mb-4">
        <span className=" shadow pb-3 px-5 rounded ">EDUCATION</span>
    </div>
    <div className="container shadow-lg py-3 rounded" >
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Sept 2009 <span className="text-danger w-50"><ArrowRightAltIcon/></span>  March 2012</Typography>
          <Typography className={classes.secondaryHeading}>ADARSH VIDYA BHARTI, BARBIGHA (BIHAR)</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
             In this time period i did academic activity in hostel. This tenure was Golden life for me because from this hostel i started academic journey . And from this hostel i got slected for Netarhat in the year of 2012. For more details about the hostel <a href="https://www.facebook.com/avbbarbigha/" target="_blank"> Click here</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>July 2012  <span className="text-danger w-50"><ArrowRightAltIcon/></span> March 2016 </Typography>
          <Typography className={classes.secondaryHeading}>
          Netarhat Residential School
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Netarhat Residential School is very famous school in india . I did secondary education from here . I scored 89.5% in the 10th board . For more details about Netarhat <a href="https://en.wikipedia.org/wiki/Netarhat_Residential_School" target="_blank" rel="noopener noreferrer">Click here</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>July 2016  <span className="text-danger w-50"><ArrowRightAltIcon/></span> March 2018</Typography>
          <Typography className={classes.secondaryHeading}>
            Fitjee South Delhi
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           In the begning of 2016 , i decided to prepare for the IIT-JEE examination although my Science background was not so good. For this region i took admission in Fitjee South delhi  in the year of 2016 and In the year of 2018 , i  was just able to cross the cutoff of JEE MAIN.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>August 2018 <span className="text-danger w-50"><ArrowRightAltIcon/></span> March 2019</Typography>
          <Typography className={classes.secondaryHeading}>
            Vibrant Academy Kota
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Taking one more chance i went to Kota for preparing IIT-JEE and took admission in vibrant academy . And in the year of 2019 , i was able to score enough marks to get adimission in governmental college.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel5bh-content"
          id="panel5bh-header"
        >
          <Typography className={classes.heading}>July 2019 <span className="text-danger w-50"><ArrowRightAltIcon/></span>Till Now</Typography>
          <Typography className={classes.secondaryHeading}>
          Indian Institute of Engineering Science and Technology, Shibpur
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
           And in the year of 2019 i took admission in one of the best NIT in india named IIEST Shibpur in INFORMATION TECHNOLOGY branch . For details about the college <a href="https://en.wikipedia.org/wiki/Indian_Institute_of_Engineering_Science_and_Technology,_Shibpur" target="_blank" rel="noopener noreferrer"> Click here</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    </>
  );

}
