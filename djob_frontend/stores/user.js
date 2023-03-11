import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        user: {
            isAuthenticated: false,
            email: null,
            token: null
        }
    }),

    actions: {
        initStore() {
            this.user.isAuthenticated = false

            if (localStorage.getItem('user.token')) {
                this.user.token = localStorage.getItem('user.token')
                this.user.email = localStorage.getItem('user.email')
                this.user.isAuthenticated = true

                console.log('Initalized user:', this.user)
            }
        },
        setToken(token, email) {
            console.log('setToken', token, email)

            this.user.token = token
            this.user.email = email
            this.user.isAuthenticated = true

            localStorage.setItem('user.token', token)
            localStorage.setItem('user.email', email)
        },
        removeToken() {
            console.log('removeToken')

            this.user.token = null
            this.user.email = null
            this.user.isAuthenticated = false

            localStorage.setItem('user.token', '')
            localStorage.setItem('user.email', '')
        }
    }
})