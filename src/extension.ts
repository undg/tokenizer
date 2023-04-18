// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tokenizer" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand(
		"tokenizer.helloWorld",
		() => {
			// The code you place here will be executed every time your command is executed
			// Display a message box to the user
			vscode.window.showInformationMessage("Hello World from tokenizer!");
		}
	);

	let tokenize2css = vscode.commands.registerCommand(
		"tokenizer.toCss",
		() => {
			const selected = vscode.Selection.toString();
			vscode.window.showInformationMessage(selected);
		}
	);
	let tokenize2js = vscode.commands.registerCommand(
		"tokenizer.toJs",
		() => {
			const selected = vscode.Selection.toString();
			vscode.window.showInformationMessage(selected);
		}
	);

	context.subscriptions.push(disposable);
	context.subscriptions.push(tokenize2css);
	context.subscriptions.push(tokenize2js);
}

// This method is called when your extension is deactivated
export function deactivate() { }
