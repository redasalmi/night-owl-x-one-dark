/** Font style options for token colors */
export type FontStyle =
  | ""
  | "italic"
  | "bold"
  | "underline"
  | "italic bold"
  | "bold italic";

/** Settings for a token color rule */
export type TokenColorSettings = {
  foreground?: string;
  background?: string;
  fontStyle?: FontStyle;
};

/** A token color rule that defines syntax highlighting */
export type TokenColor = {
  /** Optional name describing this rule */
  name?: string;
  /** TextMate scope selector(s) - can be a string or array of strings */
  scope?: string | string[];
  /** Color and style settings for matched tokens */
  settings: TokenColorSettings;
};

/** Semantic token color configuration */
export type SemanticTokenColors = {
  [tokenType: string]: string | { foreground?: string; fontStyle?: FontStyle };
};

/** VS Code editor and UI colors */
export type ThemeColors = {
  // Activity Bar
  "activityBar.background"?: string | null;
  "activityBar.border"?: string | null;
  "activityBar.foreground"?: string | null;
  "activityBar.dropBackground"?: string | null;
  "activityBarBadge.background"?: string | null;
  "activityBarBadge.foreground"?: string | null;

  // Badge
  "badge.background"?: string | null;
  "badge.foreground"?: string | null;

  // Breadcrumb
  "breadcrumb.foreground"?: string | null;
  "breadcrumb.focusForeground"?: string | null;
  "breadcrumb.activeSelectionForeground"?: string | null;
  "breadcrumbPicker.background"?: string | null;

  // Button
  "button.background"?: string | null;
  "button.foreground"?: string | null;
  "button.hoverBackground"?: string | null;
  "button.secondaryBackground"?: string | null;
  "button.secondaryForeground"?: string | null;

  // Checkbox
  "checkbox.border"?: string | null;

  // Contrast & Focus
  contrastBorder?: string | null;
  focusBorder?: string | null;
  foreground?: string | null;

  // Debug
  "debugToolBar.background"?: string | null;
  "debugExceptionWidget.background"?: string | null;
  "debugExceptionWidget.border"?: string | null;

  // Description
  descriptionForeground?: string | null;

  // Diff Editor
  "diffEditor.insertedTextBackground"?: string | null;
  "diffEditor.removedTextBackground"?: string | null;

  // Dropdown
  "dropdown.background"?: string | null;
  "dropdown.border"?: string | null;
  "dropdown.foreground"?: string | null;

  // Editor
  "editor.background"?: string | null;
  "editor.foreground"?: string | null;
  "editor.findMatchBackground"?: string | null;
  "editor.findMatchBorder"?: string | null;
  "editor.findMatchHighlightBackground"?: string | null;
  "editor.findRangeHighlightBackground"?: string | null;
  "editor.hoverHighlightBackground"?: string | null;
  "editor.inactiveSelectionBackground"?: string | null;
  "editor.lineHighlightBackground"?: string | null;
  "editor.lineHighlightBorder"?: string | null;
  "editor.rangeHighlightBackground"?: string | null;
  "editor.selectionBackground"?: string | null;
  "editor.selectionHighlightBackground"?: string | null;
  "editor.selectionHighlightBorder"?: string | null;
  "editor.wordHighlightBackground"?: string | null;
  "editor.wordHighlightBorder"?: string | null;
  "editor.wordHighlightStrongBackground"?: string | null;
  "editor.wordHighlightStrongBorder"?: string | null;

  // Editor Bracket Highlight
  "editorBracketHighlight.foreground1"?: string | null;
  "editorBracketHighlight.foreground2"?: string | null;
  "editorBracketHighlight.foreground3"?: string | null;

  // Editor Bracket Match
  "editorBracketMatch.background"?: string | null;
  "editorBracketMatch.border"?: string | null;

  // Editor Code Lens
  "editorCodeLens.foreground"?: string | null;

  // Editor Cursor
  "editorCursor.background"?: string | null;
  "editorCursor.foreground"?: string | null;

  // Editor Error & Warning
  "editorError.foreground"?: string | null;
  "editorError.border"?: string | null;
  "editorWarning.foreground"?: string | null;
  "editorWarning.border"?: string | null;

  // Editor Group
  "editorGroup.background"?: string | null;
  "editorGroup.border"?: string | null;
  "editorGroup.dropBackground"?: string | null;
  "editorGroup.emptyBackground"?: string | null;
  "editorGroupHeader.noTabsBackground"?: string | null;
  "editorGroupHeader.tabsBackground"?: string | null;
  "editorGroupHeader.tabsBorder"?: string | null;

  // Editor Gutter
  "editorGutter.background"?: string | null;
  "editorGutter.addedBackground"?: string | null;
  "editorGutter.deletedBackground"?: string | null;
  "editorGutter.modifiedBackground"?: string | null;

  // Editor Hover Widget
  "editorHoverWidget.background"?: string | null;
  "editorHoverWidget.border"?: string | null;
  "editorHoverWidget.highlightForeground"?: string | null;

  // Editor Indent Guide
  "editorIndentGuide.background"?: string | null;
  "editorIndentGuide.activeBackground"?: string | null;
  "editorIndentGuide.background1"?: string | null;
  "editorIndentGuide.activeBackground1"?: string | null;

  // Editor Inlay Hint
  "editorInlayHint.background"?: string | null;
  "editorInlayHint.foreground"?: string | null;

  // Editor Line Number
  "editorLineNumber.foreground"?: string | null;
  "editorLineNumber.activeForeground"?: string | null;

  // Editor Link
  "editorLink.activeForeground"?: string | null;

  // Editor Marker Navigation
  "editorMarkerNavigation.background"?: string | null;
  "editorMarkerNavigationError.background"?: string | null;
  "editorMarkerNavigationWarning.background"?: string | null;

  // Editor Overview Ruler
  "editorOverviewRuler.addedBackground"?: string | null;
  "editorOverviewRuler.commonContentForeground"?: string | null;
  "editorOverviewRuler.currentContentForeground"?: string | null;
  "editorOverviewRuler.deletedBackground"?: string | null;
  "editorOverviewRuler.incomingContentForeground"?: string | null;
  "editorOverviewRuler.modifiedBackground"?: string | null;

  // Editor Ruler
  "editorRuler.foreground"?: string | null;

  // Editor Suggest Widget
  "editorSuggestWidget.background"?: string | null;
  "editorSuggestWidget.border"?: string | null;
  "editorSuggestWidget.foreground"?: string | null;
  "editorSuggestWidget.highlightForeground"?: string | null;
  "editorSuggestWidget.selectedBackground"?: string | null;

  // Editor Whitespace
  "editorWhitespace.foreground"?: string | null;

  // Editor Widget
  "editorWidget.background"?: string | null;
  "editorWidget.border"?: string | null;

  // Error
  errorForeground?: string | null;

  // Extension Button
  "extensionButton.prominentBackground"?: string | null;
  "extensionButton.prominentForeground"?: string | null;
  "extensionButton.prominentHoverBackground"?: string | null;

  // Git Decoration
  "gitDecoration.conflictingResourceForeground"?: string | null;
  "gitDecoration.deletedResourceForeground"?: string | null;
  "gitDecoration.ignoredResourceForeground"?: string | null;
  "gitDecoration.modifiedResourceForeground"?: string | null;
  "gitDecoration.untrackedResourceForeground"?: string | null;

  // Input
  "input.background"?: string | null;
  "input.border"?: string | null;
  "input.foreground"?: string | null;
  "input.placeholderForeground"?: string | null;
  "inputOption.activeBorder"?: string | null;
  "inputValidation.errorBackground"?: string | null;
  "inputValidation.errorBorder"?: string | null;
  "inputValidation.infoBackground"?: string | null;
  "inputValidation.infoBorder"?: string | null;
  "inputValidation.warningBackground"?: string | null;
  "inputValidation.warningBorder"?: string | null;

  // List
  "list.activeSelectionBackground"?: string | null;
  "list.activeSelectionForeground"?: string | null;
  "list.dropBackground"?: string | null;
  "list.focusBackground"?: string | null;
  "list.focusForeground"?: string | null;
  "list.highlightForeground"?: string | null;
  "list.hoverBackground"?: string | null;
  "list.hoverForeground"?: string | null;
  "list.inactiveSelectionBackground"?: string | null;
  "list.inactiveSelectionForeground"?: string | null;
  "list.invalidItemForeground"?: string | null;
  "list.warningForeground"?: string | null;

  // Menu
  "menu.foreground"?: string | null;
  "menu.separatorBackground"?: string | null;

  // Merge
  "merge.border"?: string | null;
  "merge.currentContentBackground"?: string | null;
  "merge.currentHeaderBackground"?: string | null;
  "merge.incomingContentBackground"?: string | null;
  "merge.incomingHeaderBackground"?: string | null;

  // Minimap
  "minimapGutter.addedBackground"?: string | null;
  "minimapGutter.deletedBackground"?: string | null;
  "minimapGutter.modifiedBackground"?: string | null;

  // Multi Diff Editor
  "multiDiffEditor.headerBackground"?: string | null;

  // Notifications
  "notifications.background"?: string | null;
  "notifications.border"?: string | null;
  "notifications.foreground"?: string | null;
  "notificationCenter.border"?: string | null;
  "notificationLink.foreground"?: string | null;
  "notificationToast.border"?: string | null;

  // Panel
  "panel.background"?: string | null;
  "panel.border"?: string | null;
  "panelSectionHeader.background"?: string | null;
  "panelTitle.activeBorder"?: string | null;
  "panelTitle.activeForeground"?: string | null;
  "panelTitle.inactiveForeground"?: string | null;

  // Peek View
  "peekView.border"?: string | null;
  "peekViewEditor.background"?: string | null;
  "peekViewEditor.matchHighlightBackground"?: string | null;
  "peekViewResult.background"?: string | null;
  "peekViewResult.fileForeground"?: string | null;
  "peekViewResult.lineForeground"?: string | null;
  "peekViewResult.matchHighlightBackground"?: string | null;
  "peekViewResult.selectionBackground"?: string | null;
  "peekViewResult.selectionForeground"?: string | null;
  "peekViewTitle.background"?: string | null;
  "peekViewTitleDescription.foreground"?: string | null;
  "peekViewTitleLabel.foreground"?: string | null;

  // Picker Group
  "pickerGroup.border"?: string | null;
  "pickerGroup.foreground"?: string | null;

  // Progress
  "progress.background"?: string | null;

  // Scrollbar
  "scrollbar.shadow"?: string | null;
  "scrollbarSlider.activeBackground"?: string | null;
  "scrollbarSlider.background"?: string | null;
  "scrollbarSlider.hoverBackground"?: string | null;

  // Selection
  "selection.background"?: string | null;

  // Settings
  "settings.focusedRowBackground"?: string | null;
  "settings.headerForeground"?: string | null;

  // Side Bar
  "sideBar.background"?: string | null;
  "sideBar.border"?: string | null;
  "sideBar.foreground"?: string | null;
  "sideBarSectionHeader.background"?: string | null;
  "sideBarSectionHeader.foreground"?: string | null;
  "sideBarTitle.foreground"?: string | null;

  // Status Bar
  "statusBar.background"?: string | null;
  "statusBar.border"?: string | null;
  "statusBar.debuggingBackground"?: string | null;
  "statusBar.debuggingBorder"?: string | null;
  "statusBar.debuggingForeground"?: string | null;
  "statusBar.foreground"?: string | null;
  "statusBar.noFolderBackground"?: string | null;
  "statusBar.noFolderBorder"?: string | null;
  "statusBar.noFolderForeground"?: string | null;
  "statusBarItem.activeBackground"?: string | null;
  "statusBarItem.hoverBackground"?: string | null;
  "statusBarItem.prominentBackground"?: string | null;
  "statusBarItem.prominentHoverBackground"?: string | null;
  "statusBarItem.remoteBackground"?: string | null;
  "statusBarItem.remoteForeground"?: string | null;

  // Tab
  "tab.activeBackground"?: string | null;
  "tab.activeBorder"?: string | null;
  "tab.activeForeground"?: string | null;
  "tab.border"?: string | null;
  "tab.hoverBackground"?: string | null;
  "tab.inactiveBackground"?: string | null;
  "tab.inactiveForeground"?: string | null;
  "tab.unfocusedActiveBorder"?: string | null;
  "tab.unfocusedActiveForeground"?: string | null;
  "tab.unfocusedHoverBackground"?: string | null;
  "tab.unfocusedInactiveForeground"?: string | null;

  // Terminal
  "terminal.ansiBlack"?: string | null;
  "terminal.ansiBlue"?: string | null;
  "terminal.ansiBrightBlack"?: string | null;
  "terminal.ansiBrightBlue"?: string | null;
  "terminal.ansiBrightCyan"?: string | null;
  "terminal.ansiBrightGreen"?: string | null;
  "terminal.ansiBrightMagenta"?: string | null;
  "terminal.ansiBrightRed"?: string | null;
  "terminal.ansiBrightWhite"?: string | null;
  "terminal.ansiBrightYellow"?: string | null;
  "terminal.ansiCyan"?: string | null;
  "terminal.ansiGreen"?: string | null;
  "terminal.ansiMagenta"?: string | null;
  "terminal.ansiRed"?: string | null;
  "terminal.ansiWhite"?: string | null;
  "terminal.ansiYellow"?: string | null;
  "terminal.background"?: string | null;
  "terminal.border"?: string | null;
  "terminal.foreground"?: string | null;
  "terminal.selectionBackground"?: string | null;
  "terminalCursor.background"?: string | null;

  // Text
  "textBlockQuote.background"?: string | null;
  "textBlockQuote.border"?: string | null;
  "textCodeBlock.background"?: string | null;
  "textLink.foreground"?: string | null;
  "textPreformat.foreground"?: string | null;

  // Title Bar
  "titleBar.activeBackground"?: string | null;
  "titleBar.activeForeground"?: string | null;
  "titleBar.inactiveBackground"?: string | null;
  "titleBar.inactiveForeground"?: string | null;

  // Tree
  "tree.indentGuidesStroke"?: string | null;

  // Walk Through
  "walkThrough.embeddedEditorBackground"?: string | null;

  // Welcome Page
  "welcomePage.buttonBackground"?: string | null;
  "welcomePage.buttonHoverBackground"?: string | null;

  // Widget
  "widget.shadow"?: string | null;

  // Action Bar
  "actionBar.toggledBackground"?: string | null;

  // Allow any other color keys
  [key: string]: string | null | undefined;
};

/** Base VS Code theme structure */
export interface VSCodeTheme {
  /** Display name of the theme */
  name: string;
  /** Theme type: "dark", "light", or "hc" (high contrast) */
  type: "dark" | "light" | "hc";
  /** Enable semantic highlighting */
  semanticHighlighting?: boolean;
  /** Semantic token colors for language-aware highlighting */
  semanticTokenColors?: SemanticTokenColors;
  /** Token colors for TextMate-style syntax highlighting */
  tokenColors: TokenColor[];
  /** Editor and UI colors */
  colors: ThemeColors;
}

/** Night Owl theme specific structure */
export interface NightOwlTheme extends VSCodeTheme {
  name: "Night Owl";
  type: "dark";
  semanticHighlighting: false;
}

/** OneDark Pro theme specific structure */
export interface OneDarkProTheme extends VSCodeTheme {
  name: "One Dark Pro";
  type: "dark";
  semanticHighlighting: true;
  semanticTokenColors: SemanticTokenColors;
}

/** Night Owl X One Dark Pro theme output structure */
export interface NightOwlXOneDarkProTheme extends VSCodeTheme {
  name: "Night Owl X One Dark";
  type: "dark";
  semanticHighlighting: true;
}
