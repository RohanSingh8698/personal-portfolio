import styles from './SkillsStyles.module.css';
import checkMarkIconDark from '../../assets/checkmark-dark.svg';
import checkMarkIconLight from '../../assets/checkmark-light.svg';
import SkillList from '../../common/SkillList';
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
      <SkillList src={checkMarkIcon} skill="TypeScript" />
        <SkillList src={checkMarkIcon} skill="React" />
        <SkillList src={checkMarkIcon} skill="NodeJS" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="Express" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Pandas" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="AWS SageMaker" />
        <SkillList src={checkMarkIcon} skill="AWS S3" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Kubernetes" />
        <SkillList src={checkMarkIcon} skill="Git" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Power BI" />
        <SkillList src={checkMarkIcon} skill="Tableau" />
        <SkillList src={checkMarkIcon} skill="Microsoft Excel" />
        <SkillList src={checkMarkIcon} skill="Looker" />
        <SkillList src={checkMarkIcon} skill="Apache Super Set" />
        <SkillList src={checkMarkIcon} skill="DataBricks" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Google Big Query" />
        <SkillList src={checkMarkIcon} skill="Azure Dev Ops" />
        <SkillList src={checkMarkIcon} skill="Jenkins" />
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="SAAP ERP" />
        <SkillList src={checkMarkIcon} skill="Oracle SAP" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
