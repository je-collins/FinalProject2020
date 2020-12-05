import http from "../http-common";

class UserDataService {


    create(data) {
        return http.post("/users", data);
    }

    login(data){
        return http.post('/users/login', data)
   }

    delete(id) {
        return http.delete(`/users/${id}`);
    }



}

export default new UserDataService();