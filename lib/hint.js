const vscode = require('vscode');
const util = require('./util');

function provideCompletionItems (document, position, token, context) {
  const line = document.lineAt(position);
  const projectPath = util.getProjectPath(document);

  const lineText = line.text.substring(0, position.character);

  console.log(lineText, projectPath)

  // if (/(^|=| )\w+\.dependencies\.$/g.test(lineText)) {
  //   const json = require(`${projectPath}/package.json`);
  //   const dependencies = Object.keys(json.dependencies || {}).concat(Object.keys(json.devDependencies || {}));
  //   return dependencies.map(dep => {
  //     // vscode.CompletionItemKind 表示提示的类型
  //     return new vscode.CompletionItem(dep, vscode.CompletionItemKind.Field);
  //   })
  // }
}

function resolveCompletionItem (item, token) {
  return null;
}

module.exports = function (context) {
  // 注册代码建议提示，只有当按下“.”时才触发
  context.subscriptions.push(vscode.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems,
    resolveCompletionItem
  }, '.'));
};
