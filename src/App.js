import "./App.css";
import { AbstractService } from "./abstract-http-service/abstract.service.ts";
function App() {
  let test = new AbstractService();
  test.get().then((req,res)=>{
    console.log("data fetched successfully");
  }).catch((err)=>{
    console.log("the error is",err)
  })

}

export default App;
