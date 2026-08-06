import axios from "axios";

export const showAllEmp = () => axios.get(`http://localhost:8080/shy/fetch`);

export const SingleEmp = (id) => axios.get(`http://localhost:8080/shy/Single/${id}`);

export const insertEmp= (e) => axios.post(`http://localhost:8080/shy/insert` , e);

export const updateEmp = (id,e) => axios.put(`http://localhost:8080/shy/update/${id}`, e);

export const deleteEmp = (id) => axios.delete(`http://localhost:8080/shy/delete/${id}`);
