import Api from '@/services/Api'

export default {
    getMatches(credentials){        
        return Api().get('getMatches/'+credentials.email/*, {params: {
            email:credentials.email
          }}*/)
    },

    getRightMatches(credentials){        
        console.log('get right matches Api')
        return Api().get('getRightMatches', credentials)
    }
}