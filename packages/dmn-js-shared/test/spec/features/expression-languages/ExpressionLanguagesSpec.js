import { bootstrap, getViewerJS } from '../../base/viewer/TestHelper';

import ExpressionLanguagesModule from 'src/features/expression-languages';


const DEFAULT_OPTIONS = [{
  label: 'FEEL',
  value: 'feel'
}];

const CUSTOM_OPTIONS = [{
  label: 'FEEL',
  value: 'feel'
}, {
  label: 'JUEL',
  value: 'juel'
}, {
  label: 'JavaScript',
  value: 'javascript'
}, {
  label: 'Groovy',
  value: 'groovy'
}, {
  label: 'Python',
  value: 'python'
}, {
  label: 'JRuby',
  value: 'jruby'
}];


describe('ExpressionLanguages', function() {

  describe('defaults', () => {

    it('should set default editor expression language to FEEL', () => {

      // given
      const expressionLanguages = createExpressionLanguages();

      // when
      const defaultLanguage = expressionLanguages.getDefault('editor');

      // then
      expect(defaultLanguage).to.eql({
        value: 'feel',
        label: 'FEEL'
      });
    });


    it('should set default input cell expression language to FEEL', () => {

      // given
      const expressionLanguages = createExpressionLanguages();

      // when
      const defaultLanguage = expressionLanguages.getDefault('inputCell');

      // then
      expect(defaultLanguage).to.eql({
        value: 'feel',
        label: 'FEEL'
      });
    });


    it('should use user provided defaults', () => {

      // given
      const expressionLanguages = createExpressionLanguages({
        expressionLanguages: {
          options: CUSTOM_OPTIONS,
          defaults: {
            editor: 'javascript',
            inputCell: 'jruby'
          }
        }
      });

      // when
      const editorDefault = expressionLanguages.getDefault('editor');
      const inputCellDefault = expressionLanguages.getDefault('inputCell');

      // then
      expect(inputCellDefault).to.eql({
        value: 'jruby',
        label: 'JRuby'
      });
      expect(editorDefault).to.eql({
        value: 'javascript',
        label: 'JavaScript'
      });
    });


    it('should support legacy defaults', () => {

      // given
      const expressionLanguages = createExpressionLanguages({
        expressionLanguages: {
          options: CUSTOM_OPTIONS,
        },
        defaultInputExpressionLanguage: 'jruby',
        defaultOutputExpressionLanguage: 'javascript'
      });

      // when
      const inputCellDefault = expressionLanguages.getDefault('inputCell');
      const outputCellDefault = expressionLanguages.getDefault('outputCell');

      // then
      expect(inputCellDefault).to.eql({
        value: 'jruby',
        label: 'JRuby'
      });
      expect(outputCellDefault).to.eql({
        value: 'javascript',
        label: 'JavaScript'
      });
    });
  });


  describe('options', () => {

    it('should correctly set default options', () => {

      // given
      const expressionLanguages = createExpressionLanguages();

      // when
      const options = expressionLanguages.getAll();

      // then
      expect(options).to.deep.eql(DEFAULT_OPTIONS);
    });


    it('should use provided options', () => {

      // given
      const expressionLanguages = createExpressionLanguages({
        expressionLanguages: {
          options: CUSTOM_OPTIONS
        }
      });

      // when
      const options = expressionLanguages.getAll();

      // then
      expect(options).to.deep.eql(CUSTOM_OPTIONS);
    });
  });
});



// helper
function createExpressionLanguages(config) {
  bootstrap({
    modules: [
      ExpressionLanguagesModule
    ],
    ...config
  })();

  return getViewerJS().get('expressionLanguages');
}
