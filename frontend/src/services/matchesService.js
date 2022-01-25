import Api from '@/services/Api'

export default {
    getMatches(credentials){        
        console.log('get matches Api')
        return Api().get('getMatches', credentials)
    }
}