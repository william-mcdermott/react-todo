var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp')

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });
  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = 'test text';
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
    // Expect createdAt to be a number
    expect(typeof todoApp.state.todos[0].createdAt).toBe('number');

  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 0,
      completedAt: undefined
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(false);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(true);
    // Expect completedAt to be a number
    expect(typeof todoApp.state.todos[0].completedAt).toBe('number');

  });
  // Test that when toggle from true to false completedAt gets removed

  it('should remove completedAt value when completed is toggled from true to false', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 0,
      completedAt: 5
    }
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    // Expect completedAt to be a number
    expect(todoApp.state.todos[0].completedAt).toNotExist();

  });

});
