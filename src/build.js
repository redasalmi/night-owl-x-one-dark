const fs = require('fs');

const nightOwlLink =
  'https://raw.githubusercontent.com/sdras/night-owl-vscode-theme/main/themes/Night%20Owl-color-theme.json';
const oneDarkProDarkerLink =
  'https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/themes/OneDark-Pro-darker.json';

async function getThemeJson(themeLink) {
  const resp = await fetch(themeLink);
  const json = await resp.json();

  return json;
}

async function generateTheme() {
  try {
    const [nightOwlTheme, oneDarkProDarkerTheme] = await Promise.all([
      getThemeJson(nightOwlLink),
      getThemeJson(oneDarkProDarkerLink),
    ]);

    const { semanticTokenColors, tokenColors } = oneDarkProDarkerTheme;
    const { colors: defaultColors } = nightOwlTheme;

    const themeOverrides = fs.readFileSync(`${__dirname}/theme-overrides.json`);
    const { colors: colorsOverrides } = JSON.parse(themeOverrides.toString());

    const colors = Object.keys(defaultColors)
      .sort()
      .reduce((accumulator, key) => {
        if (defaultColors[key] === null) {
          return accumulator;
        }

        if (key in colorsOverrides) {
          accumulator[key] = colorsOverrides[key];
        } else {
          accumulator[key] = defaultColors[key];
        }

        return accumulator;
      }, {});

    const theme = {
      name: 'Night Owl X One Dark',
      type: 'dark',
      semanticHighlighting: true,
      semanticTokenColors,
      tokenColors,
      colors,
    };

    const themeString = JSON.stringify(theme, null, 2);
    fs.writeFileSync(
      `${__dirname}/../themes/night-owl-x-one-dark.json`,
      themeString,
    );
  } catch (err) {
    console.error('No theme generated LOL');
    console.error(err);
  }
}

generateTheme();
