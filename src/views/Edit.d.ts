export interface IData {
    project: {[propKey: string]: any};
    projectValue: {[propKey: string]: any};
}

export interface Ifield {
  name: string;
  label: string;
  type: string;
  childFields?: Ifield[];
}

export interface IObj {
  [propKey: string]: any;
}