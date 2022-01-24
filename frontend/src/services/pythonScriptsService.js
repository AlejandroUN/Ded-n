import Api from '@/services/Api'

//An object that allows us to call a register method
export default {
    bigFiveP(){
        //We're doing a post request to the register page aka endpoint ans sending some credentials
		console.log('We are in services')
        return Api().get('bigFiveP')
    }    
}