import clsx, { type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cx(...classNames: ClassValue[]) {
  return twMerge(clsx(...classNames));
}