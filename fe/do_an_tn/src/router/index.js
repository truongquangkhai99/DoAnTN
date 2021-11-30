import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import ListAccount from '../components/Account/ListAccount.vue'
import CreateAccount from '../components/Account/CreateAccount.vue'
import EditAccount from '../components/Account/EditAccount.vue'
import ListQuestion from '../components/Question/ListQuestion.vue'
import CreateQuestion from '../components/Question/CreateQuestion.vue'
import EditQuestion from '../components/Question/EditQuestion.vue'
import Information from '../components/Information/Information.vue'
import Class from '../components/Teacher/Class.vue'
import ListExam from '../components/Teacher/ListExam.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [{
            path: '/',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home,
            children: [{
                    path: 'admin/account',
                    name: 'ListAccount',
                    component: ListAccount
                },
                {
                    path: 'admin/account/create',
                    name: 'CreateAccount',
                    component: CreateAccount
                },
                {
                    path: 'admin/account/edit',
                    name: 'EditAccount',
                    component: EditAccount
                },
                {
                    path: 'teacher/question',
                    name: 'ListQuestion',
                    component: ListQuestion
                },
                {
                    path: 'teacher/question/create',
                    name: 'CreateQuestion',
                    component: CreateQuestion
                },
                {
                    path: 'teacher/question/edit',
                    name: 'EditQuestion',
                    component: EditQuestion
                },
                {
                    path: 'teacher/class',
                    name: 'Class',
                    component: Class
                },
                {
                    path: 'teacher/exam',
                    name: 'ListExam',
                    component: ListExam
                },
                {
                    path: 'information',
                    name: 'Information',
                    component: Information
                }
            ]
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
    ]
})