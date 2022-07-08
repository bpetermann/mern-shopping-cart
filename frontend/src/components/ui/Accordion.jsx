import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({ color, backgroundColor, headline }) {
  return (
    <div>
      <Accordion
        sx={{
          margin: '1.5rem 0',
          boxShadow: 'none',
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: color }} />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography>{headline[0]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: color,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: '1.5rem 0',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: color }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>{headline[1]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: color,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          margin: '1.5rem 0',
          boxShadow: 'none',
          '&:before': {
            display: 'none',
          },
          backgroundColor: backgroundColor,
          color: color,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon style={{ color: color }} />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography>{headline[2]}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
            sx={{
              fontSize: '0.8rem',
              color: color,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

SimpleAccordion.defaultProps = {
  color: '#000',
  headline: ['About us', 'Contact & FAQ', 'Careers'],
};
