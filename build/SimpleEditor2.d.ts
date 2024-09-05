import { ClassicEditor as ClassicEditorBase, HtmlEmbed, WordCount, Essentials, PastePlainText, Paragraph, AccessibilityHelp, Markdown, Undo, SelectAll } from "ckeditor5";
export default class SimpleEditor3 extends ClassicEditorBase {
    static builtinPlugins: (typeof AccessibilityHelp | typeof PastePlainText | typeof SelectAll | typeof Undo | typeof Essentials | typeof Paragraph | typeof HtmlEmbed | typeof Markdown | typeof WordCount)[];
    static defaultConfig: {
        toolbar: any;
        placeholder: string;
        language: string;
    };
}
