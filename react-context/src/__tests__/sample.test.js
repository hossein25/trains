import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LanguageProvider } from '../components/Language';
import LanguageContext from '../contexts/index';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('sample_test_check_create_context', async () => {
  const tree = (
    <LanguageProvider>
      <LanguageContext.Consumer>
        {(value) => (
          <div>
            <span data-testid="lan">{value.language}</span>
            <span data-testid="home">{value.words.home}</span>
            <span data-testid="events">{value.words.events}</span>
            <span data-testid="about">{value.words.aboutUs}</span>
            <span data-testid="contact">{value.words.contactUs}</span>
            <span data-testid="-lan">{value.words.language}</span>
            <button data-testid="changeToEnglish" onClick={value.changeToEnglish}>
              changeToEnglish
            </button>
            <button data-testid="changeToPersian" onClick={value.changeToPersian}>
              changeToPersian
            </button>
          </div>
        )}
      </LanguageContext.Consumer>
    </LanguageProvider>
  );
  const wrapper = render(tree);
  const { getByTestId } = wrapper;
});
