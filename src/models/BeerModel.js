import BaseModel from './BaseModel';

class BeerModel extends BaseModel {
    defaults() {
      return {
        title: "New Beer"
      };
    }

    constructor() {
      super('beer');
    }
}

export default BeerModel;
