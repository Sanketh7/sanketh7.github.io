import * as fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export interface IProject {
  title: string;
  description: string;
  skills: string[];
  github: string;
  url?: string;
}

export const getProjectsData = async (): Promise<IProject[]> => {
  const projectsFilePath = path.join(dataDir, 'projects.json');
  const file = await fs.readFile(projectsFilePath, 'utf-8');
  return JSON.parse(file).projects;
};
