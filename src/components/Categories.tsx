import {
    ArrayField,
    BooleanField,
    BooleanInput,
    ChipField,
    Create,
    Datagrid,
    Edit,
    List,
    ReferenceArrayField,
    ReferenceArrayInput,
    ReferenceField,
    SelectArrayInput,
    SimpleForm,
    SingleFieldList,
    TextField,
    TextInput,
} from "react-admin";

export const CategoryList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="thumbnail" />
            <TextField source="primaryColor" />
            <BooleanField source="status" />
        </Datagrid>
    </List>
);

export const CategoryEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="id" disabled />
            <TextInput source="name" />
            <TextInput source="thumbnail" />
            <TextInput source="primaryColor" />
            <BooleanInput source="status" />
            <ReferenceArrayField reference="questions" source="questions">
                <SingleFieldList>
                    <ChipField source="name" />
                </SingleFieldList>
            </ReferenceArrayField>
            <ArrayField source="questions" label="Questions">
                <Datagrid>
                    <ReferenceField
                        source="id"
                        reference="questions"
                        label="Question name"
                    />
                </Datagrid>
            </ArrayField>
        </SimpleForm>
    </Edit>
);

export const CategoryCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="thumbnail" />
            <TextInput source="primaryColor" />
            <BooleanInput source="status" />
        </SimpleForm>

        {/* <SimpleForm>
            <TextInput source="name" />
            <TextInput source="label" />
            <ReferenceArrayInput reference="products" source="productIDs">
                <SelectArrayInput optionText="name" />
            </ReferenceArrayInput>
            {/* <TextInput source="productIDs" />
            <TextInput source="products" /> */}
        {/* </SimpleForm> */}
    </Create>
);
