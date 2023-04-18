import * as assert from "assert";

import { transform } from "./../../transform";

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from "vscode";
// import * as myExtension from '../../extension';

suite("Extension Test Suite", () => {
	vscode.window.showInformationMessage("Start all tests.");

	test("Transform to css one line", () => {
		assert.deepEqual(transform(`padding: spacing.X7S`).toCss, [
			"padding: var(--arahi-spacing-X7S);",
		]);
	});

	test("Transform to css multiple lines", () => {
		// @TODO (undg) 2023-04-18: last line in input cannot be empty
		assert.deepEqual(
			transform(`
	padding: spacing.X7S
background-color: fg.subtle
			padding-left: spacing.X5S
	padding-right: spacing.X5S `).toCss,
			[
				"padding: var(--arahi-spacing-X7S);",
				"background-color: var(--arahi-fg-subtle);",
				"padding-left: var(--arahi-spacing-X5S);",
				"padding-right: var(--arahi-spacing-X5S);",
			]
		);
	});

	test("Transform to js one line", () => {
		assert.deepEqual(transform(`padding: spacing.X7S`).toJs, [
			"padding: 'var(--arahi-spacing-X7S)',",
		]);
	});

	test("Transform to js multiple lines", () => {
		// @TODO (undg) 2023-04-18: last line in input cannot be empty
		assert.deepEqual(
			transform(`
	padding: spacing.X7S
background-color: fg.subtle
			padding-left: spacing.X5S
	padding-right: spacing.X5S
			`).toJs,
			[
				"padding: 'var(--arahi-spacing-X7S)',",
				"backgroundColor: 'var(--arahi-fg-subtle)',",
				"paddingLeft: 'var(--arahi-spacing-X5S)',",
				"paddingRight: 'var(--arahi-spacing-X5S)',",
			]
		);
	});
});
