import Api from '@/services/Api'

export default {
    BigFive(answers){
        console.log('Servicio BF')
        return Api().post('BigFive', answers)
    }
}