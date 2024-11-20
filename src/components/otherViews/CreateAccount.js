import React from 'react'
import { ContentFormAccount } from '../../componentsSC/CreateAccountSC'

export default function CreateAccount() {

    

  return (
    <ContentFormAccount>
      <div>
        <h2>formulario creacion de cuenta</h2>
        <form>
            <section>
                <label for='name'>name</label>
                <input type='text' id='name' placeholder='name'/>
            </section>
            <section>
                <label for='lastname'>lastname</label>
                <input type='text' id='lastname' placeholder='lastname'/>
            </section>
            <section>
                <label for='email'>email</label>
                <input type='text' id='email' placeholder='email'/>
            </section>
            <section>
                <label for='phone'>phone</label>
                <input type='text' id='phone' placeholder='phone'/>
            </section>
            <section>
                <label for='password'>password</label>
                <input type='password' id='password' placeholder='password'/>
            </section>
        </form>
        <button>crear</button>
      </div>
    </ContentFormAccount>
  )
}
