import axios from "axios";
import {component} from "coco-mvc";

@component()
class Axios {

  async get(url: string): Promise<any> {
    return await axios.get(url);
  }

  async post(url: string, data: any): Promise<any> {
    return await axios.post(url, data);
  }
}

export default Axios;