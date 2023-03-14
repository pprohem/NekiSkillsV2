import { api } from "../api";



const getAll = () => {
    return api.get("skill");
};

const get = (id :number) => {
    return api.get(`skill/${id}`);
};

const create = (data : object) => {
    return api.post("skill", data);
};

const update = (id : number, data :object) => {
    return api.put(`skill/${id}`, data);
};

const remove = (id: number) => {
    return api.delete(`skill/${id}`);
};
const skillsService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default skillsService;