import AccordionTransition from "./accordion";
import * as React from "react";
import "/src/assets/css/faqs.css";

interface Props {
  theme: string;
}

function Faqs({ theme }: Props) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  React.useEffect(() => {
    document.body.style.backgroundColor = theme === "light" ? "#fff" : "#000";
  }, [theme]);

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <h1
          className={theme === "light" ? "caps-head-light" : "caps-head-dark"}
        >
          Frequently Asked Questions
        </h1>
        <div className={theme === "light" ? "line-light" : "line-dark"}></div>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly">
        <div className={`accordion-wrapper ${theme === "light" ? "light-mode-wrapper" : "dark-mode-wrapper"}`}>
          <h3 className={`text-center fw-bold ${theme === "light" ? "text-black" : "text-white"}`}>What NCC is</h3>
          <br />
          <AccordionTransition
            header="What is the National Cadet Corps"
            paragraph={
              <>
                The National Cadet Corps (NCC) is a youth development movement.
                NCC provides opportunities to the country's youth for their
                all-around development with a sense of Duty, Commitment,
                Dedication, Discipline and moral values to become able leaders
                and useful citizens. NCC provides exposure to the cadets in a
                wide range of activities, with a distinct emphasis on Social
                Services, Discipline and Adventure Training. NCC is open to all
                regular students of schools and colleges voluntarily. The
                students have no liability for active military service.
              </>
            }
            theme={theme}
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          />
          <br />
          <AccordionTransition
            header="What is the motto of NCC"
            paragraph={
              <>
                The motto of NCC is <strong>“UNITY AND DISCIPLINE”</strong>.
              </>
            }
            theme={theme}
            expanded={expanded === "panel2"}
            onChange={handleChange("panel2")}
          />
          <br />
          <AccordionTransition
            header="What is/are the Aim(s) of NCC?"
            paragraph={
              <>
                <strong>a)</strong> To develop character, commandership,
                discipline, leadership, secular outlook, the spirit of adventure
                and the ideals of selfless service amongst the country's youth.
                <br />
                <strong>b)</strong> To create a human resource of organised,
                trained and motivated youth to provide leadership in all walks
                of life and always be available for the nation's service.
                <br />
                <strong>c)</strong> To provide a suitable environment to
                motivate the youth to take up a career in the Armed Forces.
              </>
            }
            theme={theme}
            expanded={expanded === "panel3"}
            onChange={handleChange("panel3")}
          />
        </div>
        <div className={`accordion-wrapper ${theme === "light" ? "light-mode-wrapper" : "dark-mode-wrapper"}`}>
          <h3 className={`text-center fw-bold ${theme === "light" ? "text-black" : "text-white"}`}>
            Sessions related queries
          </h3>
          <br />
          <AccordionTransition
            header="Will joining NCC affect academics?"
            paragraph={
              <>
                <strong>No</strong>, it won’t affect....
              </>
            }
            theme={theme}
            expanded={expanded === "panel4"}
            onChange={handleChange("panel4")}
          />
          <br />
          <AccordionTransition
            header="Who will arrange the NCC Uniforms?"
            paragraph={
              <>
                Army cadets wear khaki uniforms. The uniforms{" "}
                <strong> will be arranged by the NCC IITB</strong>.
              </>
            }
            theme={theme}
            expanded={expanded === "panel5"}
            onChange={handleChange("panel5")}
          />
          <br />
          <AccordionTransition
            header="How frequently will the sessions be conducted?"
            paragraph={
              <>
                <strong>Every Saturday, a session of 2 hours</strong> will be
                conducted consisting of the lecture series and drills session
                for the first-year cadets. Also, the{" "}
                <strong>sports session of 1 hour</strong> will be conducted
                where you get to learn and play a sport of your choice.
              </>
            }
            theme={theme}
            expanded={expanded === "panel6"}
            onChange={handleChange("panel6")}
          />
        </div>
        <div className={`accordion-wrapper ${theme === "light" ? "light-mode-wrapper" : "dark-mode-wrapper"}`}>
          <h3 className={`text-center fw-bold ${theme === "light" ? "text-black" : "text-white"}`}>
            How to join NCC IIT Bombay
          </h3>
          <br />
          <AccordionTransition
            header="Who can join NCC IIT Bombay?"
            paragraph={"Any student who belongs to IITB can join NCC IITB."}
            theme={theme}
            expanded={expanded === "panel7"}
            onChange={handleChange("panel7")}
          />
          <br />
          <AccordionTransition
            header="What is the selection process to join NCC IIT Bombay?"
            paragraph={
              "Students will be informed through webmail and orientations at the time of enrollment. Then they can undergo a selection process after submitting their preferences on the ASC portal which is a part of NOCS registration. ... "
            }
            theme={theme}
            expanded={expanded === "panel8"}
            onChange={handleChange("panel8")}
          />
          <br />
          <AccordionTransition
            header="How many students will be inducted into the NCC unit?"
            paragraph={
              <>
                In total, we have 280 cadets in the unit consisting of{" "}
                <strong> 210 cadets from the first year</strong>. Hence, 210
                students will be inducted as cadets in the first year.
              </>
            }
            theme={theme}
            expanded={expanded === "panel9"}
            onChange={handleChange("panel9")}
          />
          <br />
          <AccordionTransition
            header="Any Prerequisites?"
            paragraph={
              <>
                We just need <strong> tons of motivation</strong>.
              </>
            }
            theme={theme}
            expanded={expanded === "panel10"}
            onChange={handleChange("panel10")}
          />
        </div>
        <br />
        <div className={`accordion-wrapper ${theme === "light" ? "light-mode-wrapper" : "dark-mode-wrapper"}`}>
          <h3 className={`text-center fw-bold ${theme === "light" ? "text-black" : "text-white"}`}>
            Activities and experiences in NCC IITB
          </h3>
          <br />
          <AccordionTransition
            header="What's special at NCC IITB?"
            paragraph={
              "Along with personality development and military training, NCC IITB also offers cultural activities and sports. You acquire life skills along the road through our General Championships, which comprise..."
            }
            theme={theme}
            expanded={expanded === "panel11"}
            onChange={handleChange("panel11")}
          />
          <br />
          <AccordionTransition
            header="What sort of activities and competitions are held at NCC IITB?"
            paragraph={
              <>
                At NCC IITB, we have three companies: Alpha, Bravo and Charlie.
                These companies compete amongst themselves while displaying high
                sportsmanship and a healthy competitive spirit. The year-long
                competitions are categorised as <br />
                <strong> a)</strong> Cultural GC (includes film, photography,
                debate, lifestyle, dance music, poetry, cooking GCs and many
                more.) <br />
                <strong> b)</strong> Training GC ( includes different kinds of
                drills, map reading and other on-ground activities) <br />
                <strong>c)</strong> Sports GC ( includes all kinds of sports
                from kabaddi and kho kho to basketball, badminton, football,
                cricket and many more) Apart from this, we have many activities
                such as informal nights, social service, adventure trips and
                basic learning, personality development and various other
                activities that you can think of...
              </>
            }
            theme={theme}
            expanded={expanded === "panel12"}
            onChange={handleChange("panel12")}
          />
          <br />
          <AccordionTransition
            header="Does the NCC IITB organise any adventure trips?"
            paragraph={
              <>
                Yes, 3 to 4 adventure trips and treks are conducted annually at
                an affordable price.
              </>
            }
            theme={theme}
            expanded={expanded === "panel13"}
            onChange={handleChange("panel13")}
          />
          <br />
          <AccordionTransition
            header="Do the Cadets get an opportunity to participate in the Republic Day (RD) Parade held in the Gymkhana ground?"
            paragraph={
              <>
                Yes, each year, two contingents- an SW(girls) and an SD(boys)
                contingent of NCC IITB participate in the RD Parade held in the
                Gymkhana ground. Also, we have a special Guard of Honour
                contingent.
              </>
            }
            theme={theme}
            expanded={expanded === "panel14"}
            onChange={handleChange("panel14")}
          />
          <AccordionTransition
            header="What is the most awaited event at NCC IIT Bombay?"
            paragraph={
              <>The Annual Training Camp is the flagship event of NCC IITB...</>
            }
            theme={theme}
            expanded={expanded === "panel15"}
            onChange={handleChange("panel15")}
          />
        </div>
        <div className={`accordion-wrapper ${theme === "light" ? "light-mode-wrapper" : "dark-mode-wrapper"}`}>
          <h3 className={`text-center fw-bold ${theme === "light" ? "text-black" : "text-white"}`}>
          Other Frequently Asked Questions
          </h3>
          <br />
          <AccordionTransition
            header="Can we go to Inter IIT only if we join NSO?"
            paragraph={"No, you can go to inter IIT even after joining NCC, and the selections are purely based on skills and talent. We have many cadets who have been to inter IIT while being in NCC in the first year."}
            theme={theme}
            expanded={expanded === "panel16"}
            onChange={handleChange("panel16")}
          />
          <br />
          <AccordionTransition
            header="Do the cadets here get an opportunity to visit the firing range and fire bullets?"
            paragraph={
              "Yes, cadets in NCC IITB get a chance at least once a year to practice firing with a rifle at the Colaba Firing Range. "
            }
            theme={theme}
            expanded={expanded === "panel17"}
            onChange={handleChange("panel17")}
          />
          <br />
          <AccordionTransition
            header="Can I take NCC after 1st year?"
            paragraph={
              <>
                Yes, Students who were in NCC in 1st year can continue in their 2nd year (based on selections), and those who didn’t have NCC in their first year can take it up in 2nd year, too, provided they have high motivation for NCC.
              </>
            }
            theme={theme}
            expanded={expanded === "panel18"}
            onChange={handleChange("panel18")}
          />
        </div>
      </div>
    </div>
  );
}

export default Faqs;
