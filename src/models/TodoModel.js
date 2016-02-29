import BaseModel from './BaseModel';

class TodoModel extends BaseModel {
  default() {
    return {
      title: "New Todo",
      completed: false
    };
  }

  constructor() {
    super('todo');
  }
}
