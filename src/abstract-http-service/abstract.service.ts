import { environment } from "../environments/environment.ts";
import axios from "axios";
import { pipe, map, catchError } from "rxjs";

export class AbstractService {
  apiUrl = environment.api;
  constructor() {
    console.log("this is called for fun and the api url is", this.apiUrl);
    console.log(environment);
  }

  get() {
    return axios.get(this.apiUrl, { timeout: 1000 }).catch((err: Response) => {
      console.log("error is ther");
      this.handleError(err)
    });
  }

  private handleError(data: any) {
    console.log(data);

    if (data.response.status === 500){
      console.log("the response is 500")
    }
  }
}
