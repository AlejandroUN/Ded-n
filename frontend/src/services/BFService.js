import Api from '@/services/Api'

export default {
    guardarBigFive(answers){
        console.log('Servicio BF')
        return Api().post('guardarBigFive', answers)
    }
}