import React from 'react';
import { Jumbotron } from '../Layouts/Jumbotron';

export const SignIn = () => (
    <div>
    <div class="form-collection">
    <div class="card elevation-3 limit-width log-in-card below turned">
      <div class="card-body">
        <div class="input-group email">
          <input type="text" placeholder="Email"/>
        </div>
        <div class="input-group password">
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="login-btn">Sign In</button>
      </div>
    </div>

    <div class="card elevation-2 limit-width sign-up-card above">
      <div class="card-body">
        <div class="input-group fullname">
          <input type="text" placeholder="Full Name"/>
        </div>
        <div class="input-group email">
          <input type="email" placeholder="Email"/>
        </div>
        <div class="input-group password">
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div class="card-footer">
        <button type="submit" class="signup-btn">Sign Up</button>
      </div>
    </div>
  </div>
  <Jumbotron />
  </div>
)