import * as fs from 'fs/promises';
import path from 'path';

const dataDir = path.join(process.cwd(), 'data');

export interface ISchool {
  name: string;
  years: string;
  description: string;
  classwork: string[];
}

export const getEducationData = async (): Promise<ISchool[]> => {
  const projectsFilePath = path.join(dataDir, 'education.json');
  const file = await fs.readFile(projectsFilePath, 'utf-8');
  return JSON.parse(file).education;
};
