import { CommandDto, CommandName } from "src/app/dto/command.dto";
import { Command } from "src/utils/command";
import styles from "@/styles/components/commands/contact.module.scss";
import chevron from "@/styles/components/chevron.module.scss";
import carousel from "@/styles/components/carousel.module.scss";
import { useEffect, useRef, useState } from "react";

function LeaveAMessage() {
  return (
    <div className={styles.cc}>
      <div style={{ height: "90%" }}>
        <h3>Leave a message</h3>
        <div>
          <hr className={styles.hr} />
          <hr className={[styles.hr, styles.bottom].join(" ")} />
        </div>
        <form style={{ height: "100%" }}>
          <div style={{ flexDirection: "row" }}>
            <input
              className={styles.name}
              type="text"
              placeholder="Name"
              required
            />
            <span className={styles.span} />
            <input
              className={styles.name}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <textarea placeholder="Message" required></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
function ContactMe() {
  return (
    <div className={styles.cc}>
      <h3>Contact me</h3>
      <div className={styles.division}>
        <hr className={styles.hr} />
        <hr className={[styles.hr, styles.bottom].join(" ")} />
      </div>
      <table>
        <tbody>
          <tr>
            <td>
              <div className={styles.icon}>&#xf2a0;</div>
            </td>
            <td>&nbsp;</td>
            <td>+420 775 339 568</td>
          </tr>
          <tr>
            <td>
              <div className={styles.icon}>&#xf0e0;</div>
            </td>
            <td>&nbsp;</td>
            <td>jakucermak@gmail.com</td>
          </tr>
          <tr>
            <td>
              <div className={styles.icon}>
                <span>&#xed00;</span>
              </div>
            </td>
            <td>&nbsp;</td>
            <td>
              V Luzích 2841/3, <br /> 466 02 Jablonec nad Nisou <br /> Czech
              Republic
            </td>
          </tr>
        </tbody>
      </table>
      <div className={styles.division}>
        <hr className={styles.hr} />
        <hr className={[styles.hr, styles.bottom].join(" ")} />
      </div>
      <div className={styles.link}>
        <a
          href="https://www.linkedin.com/in/jakub-čermák/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ fontSize: "2.5rem" }} className={styles.icon}>
            &#xf08c;
          </div>
        </a>
        <a
          href="https://github.com/jakucermak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div style={{ fontSize: "2.5rem" }} className={styles.icon}>
            &#xe65b;
          </div>
        </a>
      </div>
    </div>
  );
}

function Chevron() {
  const chevronRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    if (chevronRef.current) {
      chevronRef.current.classList.toggle(chevron.active);
    }
  };

  return (
    <div
      ref={chevronRef}
      onClick={handleClick}
      className={[chevron.chevron, chevron.chevron_1].join(" ")}
    >
      <span></span>
      <span></span>
    </div>
  );
}

function CcCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [slide, setSlide] = useState(0);

  const goToSlide = () => {
    if (slide === 0) {
      setSlide(2);
    }
    if (slide === 2) {
      setSlide(0);
    }
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollTo({
        left: carouselRef.current.clientWidth * slide,
        behavior: "smooth",
      });
    }
  }, [slide]);

  const listComponents = [
    <li key={0} className={[carousel.li, carousel.visibleFirst].join(" ")}>
      <ContactMe />
    </li>,
    <li
      key={1}
      className={[carousel.li, carousel.visible].join(" ")}
      style={{ minWidth: "20%" }}
      onClick={() => goToSlide()}
    >
      <Chevron />
    </li>,
    <li key={2} className={[carousel.li, carousel.hiddenLast].join(" ")}>
      <LeaveAMessage />
    </li>,
  ];
  return (
    <div className={carousel.carousel_root} ref={carouselRef}>
      <ul className={carousel.ul}>{listComponents.map((comp, idx) => comp)}</ul>
    </div>
  );
}

export default class Contact implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.CC,
      description: "Contact me",
    };
  }
  execute(): JSX.Element {
    return <CcCarousel />;
  }
}
