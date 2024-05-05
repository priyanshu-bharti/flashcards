import { CardInput, FormHeader, SideBar } from "./components";

const HomePage = () => {
    return (
        <div className="container grid grid-cols-2 gap-12 mx-auto p-4 ">
            <SideBar />
            <div className="grid gap-4">
                <FormHeader onCancel={() => {}} onSave={() => {}} />
                <CardInput onDelete={() => {}} orderNumber={1} />
                <CardInput onDelete={() => {}} orderNumber={2} />
                <CardInput onDelete={() => {}} orderNumber={3} />
                <CardInput onDelete={() => {}} orderNumber={4} />
            </div>
        </div>
    );
};

export default HomePage;
