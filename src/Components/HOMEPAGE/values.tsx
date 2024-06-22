interface Props {
  theme: string;
}

function Values({ theme }: Props) {
  return (
    <div
      className="px-5"
      style={{
        color: theme === "light" ? "black" : "white",
        fontFamily: "Raleway",
      }}
    >
      The NCC is a responsive, learning and continuously evolving organization.
      Its activity is guided by certain Core Values that we endeavour to instill
      among all ranks of the NCC. These include the following: <br />
      <br />
      <ul>
        <li>A sense of patriotic commitment to encourage cadets to
        contribute to national development.{" "}</li>
        <li>
          Respect for diversities in religion, language, culture, ethnicity,
          life style and habitat to instill a sense of National unity and social
          cohesion.{" "}
          <li>
            Abiding commitment to learn and adhere to the norms and values
            enshrined in the Indian Constitution.{" "}
            <li>
              Understanding the value of a just and impartial exercise of
              authority.{" "}
              <li>
                Ability to participate in community development and other social
                programme.{" "}
                <li>
                  A healthy life style free of substance abuse and other
                  unhealthy practices.{" "}
                  <li>
                    Sensitivity to the needs of poor and socially disadvantaged
                    fellow citizens.{" "}
                    <li>
                      Inculcating habits of restraint and self-awareness.{" "}
                      <li>
                        Understanding the values of honesty, truthfulness,
                        self-sacrifice, perseverance and hard work.{" "}
                        <li>
                          Respect for knowledge, wisdom and the power of ideas.
                        </li>
                      </li>
                    </li>
                  </li>
                </li>
              </li>
            </li>
          </li>
        </li>
      </ul>
    </div>
  );
}

export default Values;
