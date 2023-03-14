import { api } from "../api";
type props = { 
    id?: string, 
}

type dataProps = { 
    username: string,
    password: string
}
const getAll = () => {
    return api.get("userskill");
};

const get = (id : props) => {
    return api.get(`userskill/${id}`);
};

const create = (data :object) => {
    return api.post("userskill", data);
};

const update = (id: number, data :object) => {
    return api.put(`userskill/${id}`, data);
};

const remove = (id: number|undefined) => {
    return api.delete(`userskill/${id}`);
};
const userSkillsService = {
    getAll,
    get,
    create,
    update,
    remove,
};
export default userSkillsService;