import {type Config} from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

export type CreateTailwindConfigOptions = {
  content: string[];
};

export function createTailwindConfig({content}: CreateTailwindConfigOptions): Config {
  return {
    content,
    plugins: [
      plugin(({addVariant}) => {
        addVariant('ui-icon', [`&[data-icon]`, `:where([data-icon]) &`]);
      }),
    ],
  };
}
