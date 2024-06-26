import axios from 'axios';
import { Project } from '../types/Project';

const GITHUB_USERNAME = 'Jay-SCM';
const CODE_SNIPPET_FILE_PATH = 'code_snippet.txt';

// List of repositories to display with their respective links
const REPOS_TO_DISPLAY = [
  {
    name: 'EasyWorkApp',
    description: 'A simple application for easy access to work tools.',
    sourceCodeLink: 'https://github.com/Jay-SCM/EasyWorkApp',
    branch: 'master'
  },
  {
    name: 'EncryptDcrypt',
    description: 'An application to encrypt and decrypt files.',
    sourceCodeLink: 'https://github.com/Jay-SCM/EncryptDcrypt',
    branch: 'main'
  },
  {
    name: 'klieaweather',
    description: 'A weather application to get current weather information.',
    sourceCodeLink: 'https://github.com/Jay-SCM/klieaweather',
    branch: 'master'
  },
  {
    name: 'AutoKB',
    description: 'Automated knowledge base for quick reference.',
    sourceCodeLink: 'https://github.com/Jay-SCM/AutoKB',
    branch: 'main'
  },
  {
    name: 'KlieaProtfolio',
    description: 'Portfolio showcasing various projects.',
    sourceCodeLink: 'https://github.com/Jay-SCM/KlieaProtfolio',
    branch: 'main'
  },
  {
    name: 'BlueFrog',
    description: 'A launcher for various applications and tools.',
    sourceCodeLink: 'https://github.com/Jay-SCM/BlueFrog',
    branch: 'main'
  }
];

export const fetchProjects = async (): Promise<Project[]> => {
  const projects: Project[] = await Promise.all(REPOS_TO_DISPLAY.map(async (repo) => {
    let codeSnippet = 'No code snippet available.';

    try {
      const snippetUrl = `https://raw.githubusercontent.com/${GITHUB_USERNAME}/${repo.name}/${repo.branch}/${CODE_SNIPPET_FILE_PATH}`;
      console.log(`Fetching code snippet from: ${snippetUrl}`);
      const snippetResponse = await axios.get(snippetUrl);
      codeSnippet = snippetResponse.data;
    } catch (error) {
      console.error(`Error fetching code snippet for ${repo.name}:`, error);
    }

    return {
      title: repo.name,
      description: repo.description,
      sourceCodeLink: repo.sourceCodeLink,
      type: 'Web', // Customize this as needed
      status: 'Active', // Customize this as needed
      imageUrl: '/images/projects.jpg', // Ensure it points to the correct image path
      codeSnippet,
    };
  }));

  return projects;
};


