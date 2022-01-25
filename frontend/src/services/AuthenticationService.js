import Api from '@/services/Api'

//An object that allows us to call a register method
export default {
    register(credentials){
        //We're doing a post request to the register page aka endpoint ans sending some credentials
         return Api().post('register', credentials)
    },
    login(credentials){        
        console.log('Yolo a Api login')
        return Api().post('login', credentials)
    }
}

