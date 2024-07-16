"use client";
import { CommandDto, CommandName } from "src/app/dto/command.dto";
import { Command } from "src/utils/command";
import styles from "@/styles/components/commands/contact.module.scss";
import chevron from "@/styles/components/chevron.module.scss";
import carousel from "@/styles/components/carousel.module.scss";
import { useEffect, useRef, useState } from "react";
import { sendEmail } from "src/utils/sendEmail";
import colors from "@/styles/_colors.module.scss";
import { useForm } from "react-hook-form";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

function LeaveAMessage() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    sendEmail(data)
      .then((res) => res.json())
      .then((response) => {
        alert(response.message);
        reset({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div className={styles.cc}>
      <div style={{ height: "90%" }}>
        <h3>Leave a message</h3>
        <div>
          <hr className={styles.hr} />
          <hr className={[styles.hr, styles.bottom].join(" ")} />
        </div>
        <form style={{ height: "100%" }} onSubmit={handleSubmit(onSubmit)}>
          <div style={{ flexDirection: "row" }}>
            <input
              className={styles.name}
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
            />
            <span className={styles.span} />
            <input
              className={styles.name}
              type="email"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          </div>
          <textarea
            placeholder="Message"
            {...register("message", { required: true })}
          ></textarea>
          <button type="submit">Send</button>
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
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/jakub-čermák/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{ fontSize: "2.5rem" }}
            className={[styles.icon, styles.link].join(" ")}
          >
            &#xf08c;
          </div>
        </a>
        <a
          href="https://github.com/jakucermak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            style={{ fontSize: "2.5rem" }}
            className={[styles.icon, styles.link].join(" ")}
          >
            &#xe65b;
          </div>
        </a>
      </div>
    </div>
  );
}

function Chevron() {
  const chevronRef = useRef<HTMLDivElement>(null);
  const [isShown, setIsShown] = useState(false);

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
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <span
        style={
          isShown
            ? { backgroundColor: colors.primary }
            : { backgroundColor: colors.text }
        }
      ></span>
      <span
        style={
          isShown
            ? { backgroundColor: colors.primary }
            : { backgroundColor: colors.text }
        }
      ></span>
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
    <li key={0} className={carousel.li}>
      <ContactMe />
    </li>,
    <div
      className={styles.chevron_container}
      key={1}
      onClick={() => goToSlide()}
    >
      <li className={[carousel.li, styles.chevron].join(" ")}>
        <Chevron />
      </li>{" "}
    </div>,
    <li key={2} className={carousel.li}>
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
