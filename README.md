# tokenizer

Adding two commands to you vscode `tokenizer toJs` and `tokenizer toCss` 

Transform tokens from format `font-weight: fontWeights.bodyRegular` into
* css: `font-weight: var(--arahi-fontWeights-bodyRegular);`
* js: `fontWeight: 'var(--arahi-fontWeights-bodyRegular)',`

# Instalation
 
Launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

```
ext install undg.tokenizer
```

Alternatively download it from [github.com](https://github.com/undg/tokenizer/releases/latest) or [marketplace.visualstudio.com](https://marketplace.visualstudio.com/items?itemName=undg.tokenizer)

**Enjoy!**


## todo

* [x] publish on visualstudio marketplace
* [ ] settings page with parameterized namespace
