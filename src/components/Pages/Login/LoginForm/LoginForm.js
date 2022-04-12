import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import StylizedFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

import firebase from '../../../../firebase'

import Input from '../../../UI/Input/Input'
import Button from '../../../UI/Button/Button'
import ErrorDisplay from '../../../Util/ErrorDisplay/ErrorDisplay'
import Spinner from '../../../UI/Spinner/Spinner'

import * as actions from '../../../../store/actions/actions'
import { Redirect } from 'react-router'


const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
        {
          provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          scopes: [
            'https://www.googleapis.com/auth/contacts.readonly'
          ],
          customParameters: {
            // Forces account selection even when one account
            // is available.
            prompt: 'select_account'
          }
        },
        {
          provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          scopes: [
            'public_profile',
            'email',
            'user_likes',
            'user_friends'
          ],
          customParameters: {
            // Forces password re-entry.
            auth_type: 'reauthenticate'
          }
        },
        firebase.auth.TwitterAuthProvider.PROVIDER_ID, // Twitter does not support scopes.
        firebase.auth.EmailAuthProvider.PROVIDER_ID // Other providers don't need to be given as object.
      ],
    callbacks: {
        signInSuccessWithAuthResult: () => false
    }
}

function LoginForm(props) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const updateHandler = (event) => {
        event.preventDefault()

        if (email.length > 0 &&
            password.length > 0) {
            props.emailAuth(email, password)
        } else {
            props.emailAuthFail("Please fill up all fields")
        }
    }

    return (
        <div>
            {props.registered ?
                <Redirect to="/login" /> : null}
            {props.isLoading ? <Spinner /> :
                <>
                    <form onSubmit={updateHandler}>
                        <Input
                            val={email}
                            onChangeFunc={setEmail}
                            placeholder="Email"
                            type="email"
                        />
                        <Input
                            val={password}
                            onChangeFunc={setPassword}
                            placeholder="Password"
                            type="password"
                        />
                        {props.error ? <ErrorDisplay>
                            {props.error}
                        </ErrorDisplay> : null}

                        <p className="font-weight-bold my-2">
                            Not yet registered? <Link to="/register">Register</Link>
                        </p>

                        <Button>
                            Login
                    </Button>
                    </form>
                    <div align="center">
                        <strong>
                            OR
                        </strong>
                    </div>

                    <StylizedFirebaseAuth
                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()} />
                </>}
        </div>
    )
}

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
    emailAuth: (email, password) => dispatch(actions.emailAuth(email, password)),
    emailAuthFail: (error) => dispatch(actions.emailAuthFail(error))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)