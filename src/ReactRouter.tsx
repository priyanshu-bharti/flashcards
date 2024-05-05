import { RouterProvider,Route,createRoutesFromElements, createBrowserRouter, Router } from "react-router-dom";
import App from './App';
import PracticeFlashCards from './PracticeFlashCards';
import HomePage from './HomePage';


const router = createBrowserRouter(createRoutesFromElements(

    <Route path='/' element={<App/>}>
         <Route path='/' element={<HomePage/>} />
         <Route path='/practice' element={<PracticeFlashCards/>} />
        
    </Route>
))

const ReactRouter = () => {
  
    return (
    <RouterProvider router={router} />
  )
}

export default ReactRouter