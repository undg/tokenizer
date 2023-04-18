import * as vscode from "vscode";
import { transform } from "./transform";

export function activate(context: vscode.ExtensionContext) {
	const tokenize2css = vscode.commands.registerCommand(
		"tokenizer.toCss",
		() => {
			const editor = vscode.window.activeTextEditor;
			const selection = editor?.selection;
			if (selection && !selection.isEmpty) {
				const selectionRange = new vscode.Range(
					selection.start.line,
					selection.start.character,
					selection.end.line,
					selection.end.character
				);
				const highlighted = editor.document.getText(selectionRange);
				editor.edit((builder) => {
					builder.delete(selection);
					builder.insert(
						selection.start,
						transform(highlighted).toCss.join("\n")
					);
				});
			}
		}
	);
	const tokenize2js = vscode.commands.registerCommand("tokenizer.toJs", () => {
		const editor = vscode.window.activeTextEditor;
		const selection = editor?.selection;
		if (selection && !selection.isEmpty) {
			const selectionRange = new vscode.Range(
				selection.start.line,
				selection.start.character,
				selection.end.line,
				selection.end.character
			);
			const highlighted = editor.document.getText(selectionRange);
			editor.edit((builder) => {
				builder.delete(selection);
				builder.insert(selection.start, transform(highlighted).toJs.join("\n"));
			});
		}
	});

	context.subscriptions.push(tokenize2css);
	context.subscriptions.push(tokenize2js);
}

// This method is called when your extension is deactivated
// export function deactivate() { }
