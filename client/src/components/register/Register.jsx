export default function Register() {
    return (
        <section id="register-page" class="content auth">
            <form id="register">
                <div class="container">
                    <div class="brand-logo"></div>
                    <h1>Register</h1>

                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" placeholder="Your Email" />

                    <label for="pass">Password:</label>
                    <input type="password" name="password" id="register-password" placeholder="Password" />

                    <label for="con-pass">Confirm Password:</label>
                    <input type="password" name="confirm-password" id="confirm-password" placeholder="Repeat Password" />

                    <input class="btn submit" type="submit" value="Register" />


                </div>
            </form>
        </section>
    );
}