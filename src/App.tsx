import { Admin, EditGuesser, Resource, ShowGuesser } from "react-admin";
import "./App.css";
import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
} from "./components/Categories";
import { ChatgptBriefEdit, ChatgptBriefList } from "./components/ChatgptBrief";
import {
    QuestionCreate,
    QuestionEdit,
    QuestionList,
} from "./components/Questions";
import dataProvider from "./utils/dataProvider";

// const dataProvider = dataJsonServer("http://localhost:3000/api");

function App() {
    return (
        <Admin dataProvider={dataProvider}>
            {/* <Resource name="recipes" list={RecipeList} edit={RecipeEdit} /> */}
            <Resource
                name="categories"
                list={CategoryList}
                edit={CategoryEdit}
                create={CategoryCreate}
                show={ShowGuesser}
                recordRepresentation="name"
            />
            <Resource
                name="questions"
                list={QuestionList}
                edit={QuestionEdit}
                create={QuestionCreate}
                recordRepresentation="name"
            />
            <Resource
                name="chatgpt/briefs"
                list={ChatgptBriefList}
                edit={ChatgptBriefEdit}
            />
        </Admin>
    );
}

export default App;
