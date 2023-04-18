type Style = { property: string; cssVar: string };

export function transform(input: string, namespace = "arahi") {
	const lines: Style[] = input
		.split("\n")
		.filter(nonEmpty)
		.map((line) => {
			const [property, cssVar = ""] = line
				.split(":")
				.filter(nonEmpty)
				.map((txt: string) => txt.trim());

			return { property, cssVar };
		});

	const themeStyles = lines.map(
		lineToCss({ namespace, delimiter: ";", wrapper: "" })
	);

	const muiStyles = lines.map(({ property, cssVar }) => {
		return lineToCss({
			namespace,
			delimiter: ",",
			wrapper: "'",
		})({ property: kebabToCamelCase(property), cssVar });
	});

	return {
		toCss: themeStyles,
		toJs: muiStyles,
	};
}

function kebabToCamelCase(input: string): string {
	return input.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

function dotToDash(input: string): string {
	return input.replace(/\./g, "-");
}

const nonEmpty = (txt: string) => !!txt.trim();

function lineToCss({
	namespace,
	delimiter,
	wrapper,
}: {
	namespace: string;
	delimiter: string;
	wrapper: string;
}) {
	return ({ property, cssVar }: Style) =>
		`${property}: ${wrapper}var(--${namespace}-${dotToDash(
			cssVar
		)})${wrapper}${delimiter}`;
}
