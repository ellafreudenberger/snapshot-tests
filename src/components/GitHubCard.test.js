import React from 'react';
import renderer from 'react-test-renderer';
import GitHubCard from './GitHubCard';

test('GitHubCard snapshot', () => {
  const component = renderer.create(<GitHubCard />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

