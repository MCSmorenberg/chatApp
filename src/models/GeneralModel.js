import BaseModel from './BaseModel';

class GeneralModel extends BaseModel {
  default() {
    return {
      title: "New general message"
    };
  }

  constructor() {
    super('general');
  }
}

export default GeneralModel;
