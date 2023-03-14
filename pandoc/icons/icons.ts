import yaml from 'yaml'
import { resolve } from 'path'
import fs from 'fs'
import { icons as skillIcons } from '@iconify-json/skill-icons';
import { icons as simpleIcons } from '@iconify-json/simple-icons';
import { icons as fileIcons } from '@iconify-json/file-icons';
import { icons as boxIcons } from '@iconify-json/bx';
import { icons as mdiIcons } from '@iconify-json/mdi';
import { getIconData, iconToSVG, replaceIDs } from '@iconify/utils';
import type { ExtendedIconifyIcon } from '@iconify/types';

const file = fs.readFileSync(resolve("src", "lib", "content", "resume.yaml"));
const { icons } = yaml.parse(file.toString());
const iconPath = resolve("src", "lib", "icons");

if (fs.existsSync(iconPath)) {
  fs.rmSync(iconPath, { recursive: true });
}
fs.mkdirSync(iconPath, { recursive: true });

for (const i in icons) {
  const splitName = icons[i].split(':');
  const iconSetName = splitName[0]
  const iconName = splitName[1]

  // Get content for icon
  const iconData = getIcon(iconSetName, iconName);
  if (!iconData) {
    throw new Error(`Icon "${iconName}" is missing`);
  }

  // Use it to render icon
  const renderData = iconToSVG(iconData, {
    height: 'auto',
  });

  // Generate attributes for SVG element
  const svgAttributes = {
    'xmlns': 'http://www.w3.org/2000/svg',
    'xmlns:xlink': 'http://www.w3.org/1999/xlink',
    ...renderData.attributes,
  };
  const svgAttributesStr = Object.keys(svgAttributes)
    .map(
      (attr) =>
        // No need to check attributes for special characters, such as quotes,
        // they cannot contain anything that needs escaping.
        `${attr}="${svgAttributes[attr]}"`
    )
    .join(' ');

  // Generate SVG
  const svg = `<svg ${svgAttributesStr}>${replaceIDs(renderData.body)}</svg>`;

  fs.writeFileSync(resolve("src", "lib", "icons", `${i.toLocaleLowerCase()}.svg`), svg);
}

function getIcon(set: string, name: string): ExtendedIconifyIcon | null {
  switch (set) {
    case 'skill-icons':
      return getIconData(skillIcons, name)
    case 'simple-icons':
      return getIconData(simpleIcons, name);
    case 'file-icons':
      return getIconData(fileIcons, name);
    case 'bx':
      return getIconData(boxIcons, name);
    case 'mdi':
      return getIconData(mdiIcons, name);
  }

  return null
}
