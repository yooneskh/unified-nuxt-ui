import { fileURLToPath } from 'node:url';


export function pathRelativeToBase(path: string, base: string) {
  return fileURLToPath(new URL(path, base));
}
