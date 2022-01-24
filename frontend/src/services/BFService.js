import Api from '@/services/Api'

export default {
    BigFive(answers){
        console.log('Servicio BF')
        return Api().post('BigFive', answers)
    },

    BigFive2(answers){
        console.log('Servicio BF2')
        return Api().post('BigFive2', answers)
    }
}