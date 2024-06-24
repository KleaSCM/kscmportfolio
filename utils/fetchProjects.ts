// utils/fetchProjects.ts
import axios from 'axios';
import { Project } from '../types/Project';

const GITHUB_USERNAME = 'Jay-SCM';

export const fetchProjects = async (): Promise<Project[]> => {
  try {
    const response = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    return response.data.map((repo: any) => ({
      title: repo.name,
      description: repo.description,
      demoLink: repo.homepage,
      sourceCodeLink: repo.html_url,
      type: 'Web', // Customize this as needed
      status: repo.archived ? 'Archived' : 'Active',
      imageUrl: `/images/${repo.name}.jpg` // Assume image file names are based on repo names
    }));
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
};
