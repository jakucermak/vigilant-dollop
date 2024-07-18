import { Command } from "src/utils/command";
import { CommandDto } from "src/app/dto/command.dto";
import { CommandName } from "src/app/dto/command.dto";
import { CommandDescription } from "src/app/dto/command.dto";
import styles from "@/styles/components/commands/ed.module.scss";

type Education = {
  school: string;
  fieldOfStudy: string;
  degree: Degree;
  dateStart: string;
  dateEnd?: string;
};

enum Degree {
  LEAVING_EXAM = "School-leaving exam",
  CERTIFICATE = "Certificate",
}

const school: Education = {
  school: "Obchodní akademie, Hotelová škola a Střední odborná škola, Turnov",
  degree: Degree.LEAVING_EXAM,
  dateStart: "2011",
  dateEnd: "2014",
  fieldOfStudy: "Hospitality",
};

const courses: Education[] = [
  {
    school: "Green Fox Academy",
    degree: Degree.CERTIFICATE,
    dateStart: "9/2021",
    dateEnd: "2/2022",
    fieldOfStudy: "Backend Developer",
  },
  {
    school: "Gopas",
    degree: Degree.CERTIFICATE,
    fieldOfStudy: "Basics of C/C++",
    dateStart: "2023",
  },
];

const education: Education[] = [school];

export class Ed implements Command {
  command: CommandDto;
  constructor() {
    this.command = {
      name: CommandName.ED,
      description: CommandDescription.ED,
    };
  }
  execute(): JSX.Element {
    return (
      <div className={styles.container}>
        <h2>Education</h2>
        <blockquote className={styles.blockquote}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>
                  <div className={styles.date}>
                    <p>{school.dateStart}</p>
                    <p> - </p>
                    <p>{school.dateEnd}</p>
                  </div>
                  <div className={styles.school}>
                    <h3>{school.school}</h3>
                    <div style={{ display: "flex" }}>
                      <p className={styles.study}>{school.fieldOfStudy}</p>
                      <p className={styles.degree}>{school.degree}</p>
                    </div>
                  </div>
                </td>
              </tr>
              {courses.map((course, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.date}>
                      <p>{course.dateStart}</p>
                      {course.dateEnd ? <p> - </p> : null}
                      {course.dateEnd ? <p>{course.dateEnd}</p> : null}
                    </div>
                    <div className={styles.school}>
                      <h3>{course.school}</h3>
                      <div style={{ display: "flex" }}>
                        <p className={styles.study}>{course.fieldOfStudy}</p>
                        <p className={styles.degree}>{course.degree}</p>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </blockquote>
      </div>
    );
  }
}
