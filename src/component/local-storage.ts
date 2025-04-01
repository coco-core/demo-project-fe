import {component} from "coco-mvc";

@component()
class LocalStorage {
  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }
}

export default LocalStorage;