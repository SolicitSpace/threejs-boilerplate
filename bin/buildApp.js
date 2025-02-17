#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import { execSync } from 'child_process';

// validate arguments
if (process.argv.length < 3) {
  console.log('You have to provide a name for your project.');
  console.log('For example :');
  console.log('    npx build-threejs-app <project-name>');
  process.exit(1);
}

// constants
const currentPath = process.cwd();
const projectName = process.argv[2];
const projectPath = path.join(currentPath, projectName);
const git_repo = 'https://github.com/bibashmgr/threejs-boilerplate.git';

// check if directory already exists
try {
  fs.mkdirSync(projectPath);
} catch (err) {
  if (err.code === 'EEXIST') {
    console.log(
      `The file ${projectName} already exist in the current directory, please give it another name.`
    );
  } else {
    console.log(err);
  }
  process.exit(1);
}

const setup = async () => {
  try {
    // clone repo
    console.log('Downloading files...');
    execSync(`git clone --depth 1 ${git_repo} ${projectPath}`);

    // change directory
    process.chdir(projectPath);

    // install dependencies
    console.log('Installing dependencies...');
    execSync('npm install');

    // remove files
    console.log('Removing useless files...');
    execSync('npx rimraf ./.git');
    fs.rmSync(path.join(projectPath, 'bin'), { recursive: true });

    console.log();
    console.log('Done. Now run:');
    console.log();
    console.log(`    cd ${projectName}`);
    console.log('    npm run dev');
  } catch (error) {
    console.log(error);
  }
};

setup();
