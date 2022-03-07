import {
  FileBlockProps,
  FileContext,
  getLanguageFromFilename,
} from "@githubnext/utils";
import "./index.css";
import Editor, {
  DiffEditor,
  useMonaco,
  loader,
  Monaco,
} from "@monaco-editor/react";
import {
  editor,
  IMarkdownString,
  languages,
  Position,
  Uri,
} from "monaco-editor";
import { useEffect } from "react";

export default function (props: FileBlockProps) {
  const { context, content, metadata, onUpdateMetadata } = props;
  const language = Boolean(context.path)
    ? context.path.endsWith(".rs")
      ? "rust"
      : getLanguageFromFilename(context.path).toLowerCase()
    : "N/A";

  const monaco: Monaco | null = useMonaco();
  console.log(language);

  useEffect(() => {
    if (monaco) {
      // monaco.languages.registerHoverProvider("rust", hoverProvider);
      // monaco.languages.registerDefinitionProvider("rust", definitionProvider);
    }
  }, [monaco]);

  return (
    <Editor
      height="90vh"
      defaultLanguage={language}
      defaultValue={content}
      options={{
        readOnly: true,
      }}
      beforeMount={async (monaco: Monaco) => {
        // return await beforeMountHandler(monaco, context);
      }}
    />
  );
}
