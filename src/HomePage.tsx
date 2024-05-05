import { CardInput, FormHeader, SideBar } from "./components"

const HomePage = () => {
  return (
    <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
        <SideBar/>
        <div className="grid gap-4">
        <FormHeader onCancel={()=>{}} onSave={()=>{}} />
        <CardInput onDelete={()=>{}} cardNumber={1}/>
        <CardInput onDelete={()=>{}} cardNumber={2}/>
        <CardInput onDelete={()=>{}} cardNumber={3}/>
        <CardInput onDelete={()=>{}} cardNumber={4}/>
        </div>
    </div>
  )
}

export default HomePage