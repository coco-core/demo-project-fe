import { service } from "coco-mvc";

@service()
class LocalStorageService {
  set(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: string): any {
    return localStorage.getItem(key);
  }
}

export default LocalStorageService;