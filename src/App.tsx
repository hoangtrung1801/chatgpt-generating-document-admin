import {
    Admin,
    Resource,
    ListGuesser,
    EditGuesser,
    ResourceContext,
    List,
} from "react-admin";
import {
    CategoryCreate,
    CategoryEdit,
    CategoryList,
} from "./components/Categories";
import {
    DonationCreate,
    DonationEdit,
    DonationList,
} from "./components/Donation";
import { OrderCreate, OrderEdit, OrderList } from "./components/Orders";
import { PaymentCreate, PaymentEdit, PaymentList } from "./components/Payments";
import { ProductCreate, ProductEdit, ProductList } from "./components/Products";
import { RecipeEdit, RecipeList } from "./components/Recipes";
import dataProvider from "./utils/dataProvider";
import "./App.css";
import {
    QuestionCreate,
    QuestionEdit,
    QuestionList,
} from "./components/Questions";

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
                recordRepresentation="name"
            />
            <Resource
                name="questions"
                list={QuestionList}
                edit={QuestionEdit}
                create={QuestionCreate}
            />
        </Admin>
    );
}

export default App;
