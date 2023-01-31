#!/bin/bash

npx tsx pandoc/icons/icons.ts
npx tsx pandoc/github.ts
curl -s https://wakatime.com/share/@iamdb/9d4f49c3-737c-4cc6-b178-1a3abc5dd2e3.json | yq e -P '.data | .[] | select(.name != "Other" and .name != "conf" and .name != "JSON" and .name != "JSX" and .name != "SCSS" and .name != "INI" and .name != "Liquid") | [.]' | yq -e -P '{"languages": .[0:10]}' > ./pandoc/languages.yaml
pandoc ./pandoc/resume.md -o ./resume.pdf --from markdown+smart --template ./pandoc/resume.latex --pdf-engine=xelatex --pdf-engine-opt=--shell-escape --metadata-file=./src/lib/content/work-experience.yaml --metadata-file=./pandoc/languages.yaml --metadata-file=./pandoc/github-repos.yaml

rm pandoc/{github-repos,languages}.yaml
