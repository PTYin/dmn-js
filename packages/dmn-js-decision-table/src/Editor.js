import Viewer from './Viewer';

import addRuleModule from './features/add-rule';
import annotationsEditorModule from './features/annotations/editor';
import contextMenuModule from 'table-js/lib/features/context-menu';
import copyCutPasteModule from './features/copy-cut-paste';
import copyCutPasteKeybindingsModule from './features/copy-cut-paste/key-bindings';
import createInputsModule from './features/create-inputs';
import dataTypesModule from 'dmn-js-shared/lib/features/data-types';
import decisionTableContextMenu from './features/context-menu';
import decisionTableEditorActionsModule from './features/editor-actions';
import decisionTableHeadEditorModule from './features/decision-table-head/editor';
import dragAndDropModule from './features/drag-and-drop';
import descriptionModule from './features/description';
import expressionLanguageModule from './features/expression-language';
import expressionLanguagesModule from 'dmn-js-shared/lib/features/expression-languages';
import tablePropertiesEditorModule from './features/decision-table-properties/editor';
import editorActionsModule from 'table-js/lib/features/editor-actions';
import hitPolicyEditorModule from './features/hit-policy/editor';
import interactionEventsModule from 'table-js/lib/features/interaction-events';
import keyboardModule from './features/keyboard';
import modelingModule from './features/modeling';
import decisionRulesEditorModule from './features/decision-rules/editor';
import selectionModule from 'table-js/lib/features/selection';
import simpleModeModule from './features/simple-mode';
import simpleBooleanEditModule from './features/simple-boolean-edit';
import simpleDateEditModule from './features/simple-date-edit';
import simpleDateTimeEditModule from './features/simple-date-time-edit';
import simpleDurationEditModule from './features/simple-duration-edit';
import simpleNumberEditModule from './features/simple-number-edit';
import simpleStringEditModule from './features/simple-string-edit';
import simpleTimeEditModule from './features/simple-time-edit';
import cellSelectionModule from './features/cell-selection';
import columnResizeModule from './features/column-resize';


export default class Editor extends Viewer {

  getModules() {
    return [
      ...Viewer._getModules(),
      ...Editor._getModules()
    ];
  }

  static _getModules() {
    return [
      addRuleModule,
      annotationsEditorModule,
      cellSelectionModule,
      contextMenuModule,
      copyCutPasteModule,
      copyCutPasteKeybindingsModule,
      createInputsModule,
      dataTypesModule,
      decisionTableContextMenu,
      decisionTableEditorActionsModule,
      decisionTableHeadEditorModule,
      columnResizeModule,
      dragAndDropModule,
      descriptionModule,
      expressionLanguageModule,
      expressionLanguagesModule,
      keyboardModule,
      tablePropertiesEditorModule,
      editorActionsModule,
      hitPolicyEditorModule,
      interactionEventsModule,
      modelingModule,
      decisionRulesEditorModule,
      selectionModule,
      simpleModeModule,
      simpleBooleanEditModule,
      simpleDateEditModule,
      simpleDateTimeEditModule,
      simpleDurationEditModule,
      simpleNumberEditModule,
      simpleStringEditModule,
      simpleTimeEditModule
    ];
  }

}