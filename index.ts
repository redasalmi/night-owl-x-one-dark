import type {
	VSCodeTheme,
	NightOwlTheme,
	OneDarkProTheme,
	ThemeColors,
	NightOwlXOneDarkProTheme,
} from './types';

const themeLinks = {
	nightOwl:
		'https://raw.githubusercontent.com/sdras/night-owl-vscode-theme/main/themes/Night%20Owl-color-theme.json',
	oneDarkProDarker:
		'https://raw.githubusercontent.com/Binaryify/OneDark-Pro/master/themes/OneDark-Pro-darker.json',
} as const;

const customColors: Partial<ThemeColors> = {
	'activityBar.background': '#000C1D',
	'activityBar.border': '#102a44',
	'sideBar.background': '#001122',
	'sideBar.border': '#102a44',
	'sideBar.foreground': '#8BADC1',
	'editorGroup.border': '#102a44',
};

async function getThemeJson<T extends VSCodeTheme>(
	themeLink: string,
): Promise<T> {
	const resp = await fetch(themeLink);
	if (!resp.ok) {
		throw new Error(`Failed to fetch theme JSON: ${resp.statusText}`);
	}
	const json = await resp.json();

	return json as T;
}

async function generateTheme() {
	try {
		const [nightOwlTheme, oneDarkProDarkerTheme] = await Promise.all([
			getThemeJson<NightOwlTheme>(themeLinks.nightOwl),
			getThemeJson<OneDarkProTheme>(themeLinks.oneDarkProDarker),
		]);

		const { semanticTokenColors, tokenColors } = oneDarkProDarkerTheme;
		const { colors: defaultColors } = nightOwlTheme;

		const colors = Object.keys(defaultColors)
			.sort()
			.reduce<ThemeColors>((accumulator, key) => {
				if (defaultColors[key] === null) {
					return accumulator;
				}

				if (key in customColors) {
					accumulator[key] = customColors[key];
				} else {
					accumulator[key] = defaultColors[key];
				}

				return accumulator;
			}, {});

		const theme: NightOwlXOneDarkProTheme = {
			name: 'Night Owl X One Dark',
			type: 'dark',
			semanticHighlighting: true,
			semanticTokenColors,
			tokenColors,
			colors,
		};

		const themeString = JSON.stringify(theme, null, 2);
		await Bun.write(
			`${import.meta.dir}/themes/night-owl-x-one-dark.json`,
			themeString,
		);
	} catch (err) {
		console.log(err);
	}
}

generateTheme();
