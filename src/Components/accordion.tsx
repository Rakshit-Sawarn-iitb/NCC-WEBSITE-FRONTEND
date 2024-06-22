import * as React from 'react';
import Accordion, { AccordionSlots } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

interface Props {
  header: string;
  paragraph: React.ReactNode;
  theme: string;
  expanded: boolean;
  onChange: (event: React.SyntheticEvent, isExpanded: boolean) => void;
}

export default function AccordionTransition({ header, paragraph, theme, expanded, onChange }: Props) {
  const darkMode = theme === 'dark';

  return (
    <div>
      <Accordion
        expanded={expanded}
        onChange={onChange}
        slots={{ transition: Fade as AccordionSlots['transition'] }}
        slotProps={{ transition: { timeout: 400 } }}
        sx={{
          backgroundColor: darkMode ? '#333' : '#fff',
          color: darkMode ? '#fff' : '#000',
          '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
          '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
        }}
        className='shadow'
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{ color: darkMode ? '#fff' : '#000' }} />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>{header}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {paragraph}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
