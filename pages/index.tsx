import Head from 'next/head';
import {EducationItem} from '../components/EducationItem';
import {EducationList} from '../components/EducationList';
import {EmailIcon} from '../components/icons/EmailIcon';
import {GithubIcon} from '../components/icons/GithubIcon';
import {HeartIcon} from '../components/icons/HeartIcon';
import {LinkedinIcon} from '../components/icons/LinkedinIcon';
import {ProjectItem} from '../components/ProjectItem';
import {ProjectList} from '../components/ProjectList';
import {SectionHeader} from '../components/SectionHeader';
import {getEducationData, ISchool} from '../lib/education';
import {getProjectsData, IProject} from '../lib/projects';

interface Props {
  projects: IProject[];
  education: ISchool[];
}

const Home: React.FC<Props> = ({projects, education}: Props) => {
  return (
    <div>
      <Head>
        <title>Sanketh Varamballi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* HERO */}
      <div className="flex flex-col gap-y-8 items-center justify-center h-screen bg-gradient-to-b from-green-400 to-blue-500">
        <img src="/favicon.ico" className="rounded-full h-20 md:h-36 shadow-lg border-8" alt="icon" />
        <div className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-100 font-mono">Sanketh Varamballi</div>
        <div className="flex items-center justify-around w-1/2">
          <GithubIcon styles="w-8 sm:w-12 md:w-16 fill-current text-gray-100 hover:text-green-300" href="https://www.github.com/sanketh7"/>
          <LinkedinIcon styles="w-8 sm:w-12 md:w-16 fill-current text-gray-100 hover:text-green-300" href="https://www.linkedin.com/in/sankethvaramballi"/>
          <EmailIcon styles="w-8 sm:w-12 md:w-16 fill-current text-gray-100 hover:text-green-300" href="mailto:sankethv@umd.edu"/>
        </div>
      </div>

      <div className="bg-blue-500">
        <div className="mb-32 px-8">
          <SectionHeader title="Projects" />
          <ProjectList>
            {projects.map((p) => <ProjectItem key={p.title} project={p} />)}
          </ProjectList>
        </div>

        <div className="mb-32">
          <SectionHeader title="Education" />
          <EducationList>
            {education.map((e) => <EducationItem key={e.name} name={e.name} description={e.description} years={e.years} classwork={e.classwork}/>)}
          </EducationList>
        </div>

        <footer className="font-mono text-center text-gray-300 p-4 border-t">
          Made with <HeartIcon styles="fill-current text-red-500 w-4 inline" /> by Sanketh Varamballi
        </footer>
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  const projectData = await getProjectsData();
  const educationData = await getEducationData();
  return {
    props: {
      projects: projectData,
      education: educationData,
    },
  };
};

export default Home;
