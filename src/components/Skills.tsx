'use client';

import { motion } from 'framer-motion';
import { FaAws, FaMicrosoft } from 'react-icons/fa';
import {
  SiSolidity,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiEthereum,
  SiPython,
  SiAngular,
  SiOpenjdk,
  SiAndroid,
  SiFlutter,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiVaadin,
  SiNodedotjs,
  SiReact,
  SiGit,
  SiDocker,
  SiMqtt,
  SiInfluxdb,
  SiPostgresql,
  SiJira,
  SiGitlab,
  SiHibernate,
  SiDjango,
  SiOracle,
  SiMongodb,
  SiSpringboot,
  SiGithub,
} from 'react-icons/si';

interface SkillProps {
  name: string;
  icon: React.ReactNode;
  category: 'web' | 'mobile' | 'blockchain' | 'tools';
}

const SkillCard = ({ name, icon }: SkillProps) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1)',
      }}
      className='bg-gray-800/50 backdrop-blur p-4 rounded-lg border border-gray-700 hover:border-blue-600/50 transition-all flex items-center gap-3'
    >
      <div className='text-2xl text-blue-500'>{icon}</div>
      <h3 className='font-medium text-white'>{name}</h3>
    </motion.div>
  );
};

const SkillCategory = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className='mb-8'>
    <h3 className='text-xl font-bold text-gray-200 mb-4 border-b border-gray-700 pb-2'>
      {title}
    </h3>
    <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {children}
    </div>
  </div>
);

const Skills = () => {
  const skillsData: SkillProps[] = [
    // Web Development
    { name: 'JavaScript', icon: <SiJavascript />, category: 'web' },
    { name: 'TypeScript', icon: <SiTypescript />, category: 'web' },
    { name: 'React', icon: <SiReact />, category: 'web' },
    { name: 'Next.js', icon: <SiNextdotjs />, category: 'web' },
    { name: 'Vaadin', icon: <SiVaadin />, category: 'web' },
    { name: 'HTML', icon: <SiHtml5 />, category: 'web' },
    { name: 'CSS', icon: <SiCss3 />, category: 'web' },
    { name: 'Node.js', icon: <SiNodedotjs />, category: 'web' },
    { name: 'Angular', icon: <SiAngular />, category: 'web' },
    { name: 'Django', icon: <SiDjango />, category: 'web' },
    { name: 'Python', icon: <SiPython />, category: 'web' },
    { name: 'Java', icon: <SiOpenjdk />, category: 'web' },
    { name: 'Spring Boot', icon: <SiSpringboot />, category: 'web' },
    { name: 'Hibernate', icon: <SiHibernate />, category: 'web' },

    // Mobile Development
    { name: 'React Native', icon: <SiReact />, category: 'mobile' },
    { name: 'Android', icon: <SiAndroid />, category: 'mobile' },
    { name: 'Flutter', icon: <SiFlutter />, category: 'mobile' },
    { name: 'Firebase', icon: <SiFirebase />, category: 'mobile' },

    // Blockchain
    { name: 'Solidity', icon: <SiSolidity />, category: 'blockchain' },
    { name: 'Ethereum', icon: <SiEthereum />, category: 'blockchain' },
    { name: 'Hardhat', icon: <SiEthereum />, category: 'blockchain' },
    { name: 'Foundry', icon: <SiEthereum />, category: 'blockchain' },

    // Tools & Infrastructure
    { name: 'Git', icon: <SiGit />, category: 'tools' },
    { name: 'Docker', icon: <SiDocker />, category: 'tools' },
    { name: 'MQTT', icon: <SiMqtt />, category: 'tools' },
    { name: 'InfluxDB', icon: <SiInfluxdb />, category: 'tools' },
    { name: 'AWS', icon: <FaAws />, category: 'tools' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, category: 'tools' },
    { name: 'SQL Server', icon: <FaMicrosoft />, category: 'tools' },
    { name: 'Oracle', icon: <SiOracle />, category: 'tools' },
    { name: 'MongoDB', icon: <SiMongodb />, category: 'tools' },
    { name: 'Jira', icon: <SiJira />, category: 'tools' },
    { name: 'Azure DevOps', icon: <FaMicrosoft />, category: 'tools' },
    { name: 'GitLab', icon: <SiGitlab />, category: 'tools' },
    { name: 'GitHub', icon: <SiGithub />, category: 'tools' },
  ];

  const webSkills = skillsData.filter((skill) => skill.category === 'web');
  const mobileSkills = skillsData.filter(
    (skill) => skill.category === 'mobile'
  );
  const blockchainSkills = skillsData.filter(
    (skill) => skill.category === 'blockchain'
  );
  const toolsSkills = skillsData.filter((skill) => skill.category === 'tools');

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id='skills'
      className='py-20 bg-gray-900 w-full flex justify-center'
    >
      <div className='container mx-auto px-4 max-w-6xl'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='text-center mb-12'
        >
          <h2 className='text-3xl md:text-4xl font-bold mb-2 text-white'>
            Skills
          </h2>
          <div className='w-16 h-1 bg-blue-600 mx-auto'></div>
        </motion.div>

        <motion.div
          className='space-y-8'
          variants={container}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true }}
        >
          <SkillCategory title='Web Development'>
            {webSkills.map((skill, index) => (
              <motion.div key={`web-${index}`} variants={item}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  category={skill.category}
                />
              </motion.div>
            ))}
          </SkillCategory>

          <SkillCategory title='Mobile Development'>
            {mobileSkills.map((skill, index) => (
              <motion.div key={`mobile-${index}`} variants={item}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  category={skill.category}
                />
              </motion.div>
            ))}
          </SkillCategory>

          <SkillCategory title='Blockchain'>
            {blockchainSkills.map((skill, index) => (
              <motion.div key={`blockchain-${index}`} variants={item}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  category={skill.category}
                />
              </motion.div>
            ))}
          </SkillCategory>

          <SkillCategory title='Tools & Infrastructure'>
            {toolsSkills.map((skill, index) => (
              <motion.div key={`tools-${index}`} variants={item}>
                <SkillCard
                  name={skill.name}
                  icon={skill.icon}
                  category={skill.category}
                />
              </motion.div>
            ))}
          </SkillCategory>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
