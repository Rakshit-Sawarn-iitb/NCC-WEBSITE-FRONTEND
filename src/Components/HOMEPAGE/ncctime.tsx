import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import AOS from "aos";
import { useEffect } from "react";

interface Props{
  theme:string;
}
export default function BasicTimeline({theme}:Props) {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: false,     // whether animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
          <TimelineConnector sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>1964</div>
        Raised as No. 1 Maharashtra Engineers Regiment NCC.</div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
          <TimelineConnector sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>1965</div>
        Redesignated as No. 4 Mahararashtra Engineers Convoy NCC.</div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
          <TimelineConnector sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>1968</div>
        Redesignated as 1 Maharashtra Mixed Regiment NCC Dec. and later as Victoria Jubilee Technical Institute.</div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
          <TimelineConnector sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>1969</div>
        Redesignated 2 Maharashtra Engineers Regiment NCC in November 1969.</div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
          <TimelineConnector sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>1994</div>
        Regiment placed under suspended animation.</div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
          <TimelineConnector sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-right" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>2005</div>
        Efforts for revival started w.e.f. September 2005.</div></TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: theme==='light'?'#003399':'white' }}/>
        </TimelineSeparator>
        <TimelineContent data-aos="fade-left" data-aos-duration="500"><div className={theme==='light'?'timeline-wrapper-light':'timeline-wrapper-dark'}><div className={theme==='light'?'timeline-year-light':'timeline-year-dark'}>2006</div>
        The first parade after suspended animation, on 26th August 2006.</div></TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
