import http from "../http-common";

class UserDataService {


    create(data) {
        return http.post("/users", data);
    }

    get(data){
        return http.get('/users', data)
   }

    delete(id) {
        return http.delete(`/users/${id}`);
    }



}

export default new UserDataService();