import { exec } from "@actions/exec"

export default async () => {
  await exec('npm', ['run', 'build']);
};
