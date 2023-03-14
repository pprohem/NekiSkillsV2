import { api, api2 } from "../api";

type props = { 
    id?: number, 
}

type dataProps = { 
    username: string,
    password: string
}



const getAll = () => {
    return api.get("users");
};

const get = (id: string|number|null) => {
    return api.get(`users/${id}`);
};

const create = (data : dataProps) => {
    return api2.post("users", data);
};

const update = (id :number, data :object) => {
    return api.put(`users/${id}`, data);
};

const remove = (id :props) => {
    return api.delete(`users/${id}`);
};
const userService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default userService;