interface Props {
  theme: string;
}

function Genesis({ theme }: Props) {
  return (
    <div
      style={{ color: theme === "light" ? "black" : "white", fontFamily:'Raleway' }}
      className="px-5"
    >
      The Kashmir War of 1948 taught a very important lesson to India, that
      freedom needs to be protected by strong Armed Forces. Its immediate
      manifestation was that the recommendations of Kunzuru committee were
      placed before the Constituent Assembly (Legislature) on 13 Mar 1948. A
      draft Bill was sent to the Constituent Assembly (Legislative) on 19 Mar
      1948, which evoked great interest and enthusiasm amongst all members.
      After due deliberations and amendments, the Bill was passed by the
      Assembly on 08 Apr 1948. The Central Govt accepted the opinion of the
      Provincial Govts and the Standing Committee’s recommendations for the
      formation of a Cadet Corps which was to be named as “National Cadet
      Corps”, as recommended by the Kunzuru Committee. <br /> <br /> The Bill received the
      assent of the Governor General on 16 Apr 1948, and the National Cadet
      Corps came into being by an Act of the Parliament Act No. XXXI of 1948
      designated ‘The National Cadet Corps Act 1948’. This Act with 13 clauses,
      prescribed the formation of the National Cadet Corps in India. <br /> <br /> The first
      step in the process of raising of the NCC was setting up of the NCC
      Secretariat now called Headquarters Directorate General NCC. In fact, even
      before the NCC Bill was passed by the Constituent Assembly (Legislative),
      the Ministry of Defence had set up the nucleus of the NCC Secretariat,
      with Col (later retired as Chief of Army Staff) Gopal Gurunath Bewoor as
      the first Director of the NCC. He took over as the Director of NCC on 31
      Mar 1948. <br /><br />The schools and colleges opened after summer vacation and the
      NCC of Independent India was inaugurated on 15 Jul 1948. The journey of
      this Indian youth organisation, which has now become the largest uniformed
      youth organisation in the world had begun.
    </div>
  );
}

export default Genesis;
