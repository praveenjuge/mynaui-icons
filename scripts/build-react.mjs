#!/usr/bin/env node

import { buildIcons } from "./build-icons.mjs";

const componentTemplate = ({ name, namePascal, children }) => `\
import createReactComponent from '../createReactComponent';
export default createReactComponent('${name}', '${namePascal}', ${JSON.stringify(
  children
)});`;

const indexItemTemplate = ({ name, namePascal }) =>
  `export { default as ${namePascal} } from './icons/${namePascal}';`;

const typeDefinitionsTemplate = () => `/// <reference types="react" />
import { SVGAttributes } from 'react'

declare module '@myna/icons-react'

// Create interface extending SVGProps
export interface MynaIconsProps extends Partial<Omit<React.SVGProps<SVGSVGElement>, 'stroke'>> {
    size?: string | number,
    stroke?: string | number
}

export declare const createReactComponent: (iconName: string, iconNamePascal: string, iconNode: any[]) => (props: MynaIconsProps) => JSX.Element;

export type Icon = React.FC<MynaIconsProps>;

// Generated icons`;

const indexTypeTemplate = ({ namePascal }) =>
  `export declare const ${namePascal}: (props: MynaIconsProps) => JSX.Element;`;

buildIcons({
  name: "icons-react",
  componentTemplate,
  indexItemTemplate,
  typeDefinitionsTemplate,
  indexTypeTemplate,
  pascalCase: true,
});
