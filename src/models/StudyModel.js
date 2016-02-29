import BaseModel from './BaseModel';

class StudyModel extends BaseModel {
    defaults() {
      return {
        title: "New Study"
      };
    }

    constructor() {
      super('study');
    }
}

export default StudyModel;
