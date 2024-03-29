import React, {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import {auth} from '../_actions/user_action'

export default function Auth(SpecificComponent, option, adminRoute = null) {

    //option => 각각의 페이지 권한 설정
    //null => 아무나 출입 가능
    //true => 로그인한 유저만 가능
    //false => 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props) {

        const dispatch = useDispatch()

        useEffect(() => {
            
            dispatch(auth()).then(response => {
                console.log('>>>>', response)

                //로그인 안한 상태
                if(!response.payload.isAuth) {
                    if(option) {
                        props.history.push('/login')
                    }
                } else {
                    //로그인 한 상태
                    if(adminRoute && !response.payload.isAdmin) {
                        props.history.push('/')
                    } else if(!option) {
                        props.history.push('/')
                    }
                }

            })

        })

        return (
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}
