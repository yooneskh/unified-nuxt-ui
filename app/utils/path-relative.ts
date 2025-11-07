import { fileURLToPath } from 'node:url';


export function pathRelativeToBase(base: string, path: string) {
  return fileURLToPath(new URL(path, base));
}
