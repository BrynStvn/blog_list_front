const Login = ({ handleInputChange }) => {
    return (
        <>
        <div>
            <label>username </label>
            <input
                type="text"
                onChange={handleInputChange}
                placeholder=""
            />
        </div>
        <div>
            <label>password </label>
            <input
                type="password"
                /* onChange={handleInputChange} */
                placeholder=""
            />
        </div>
        </>
    )
}

export default Login