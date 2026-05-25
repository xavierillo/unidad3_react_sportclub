function Login() {
    return (
        <div className="bg-light d-flex align-items-center justify-content-center vh-100">

            <div className="card shadow p-4" style={{"width": '350px'}}>
                <h3 className="text-center mb-4">Iniciar Sesión</h3>

                <form>
                    <div className="mb-3">
                        <label className="form-label">Correo electrónico</label>
                        <input type="email" className="form-control" placeholder="ejemplo@correo.com" required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" placeholder="********" required />
                    </div>

                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Recordarme</label>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Entrar</button>

                    <div className="text-center mt-3">
                        <a href="#" className="small">¿Olvidaste tu contraseña?</a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login 