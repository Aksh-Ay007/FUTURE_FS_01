import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { BASE_URL } from "@/utils/constants";
import { loginRequest, loginSuccess, loginFailed } from "@/utils/userSlice";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    dispatch(loginRequest());
    try {
      const { data } = await axios.post(
        `${BASE_URL}/login`,
        { email, password },
        { withCredentials: true }
      );
      dispatch(loginSuccess(data.user));
      navigate("/");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      setError(errorMessage);
      dispatch(loginFailed(errorMessage));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full xl:grid xl:min-h-screen xl:grid-cols-2">
      <div className="flex justify-center items-center h-screen">
        <div className="w-full max-w-[400px] px-4 space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label>Password</Label>
                <Link to="/password/forgot" className="text-sm underline">
                  Forgot your password?
                </Link>
              </div>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button className="w-full" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </Button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
        </div>
      </div>
      <div className="hidden xl:flex justify-center items-center bg-muted">
        <img src="/login.png" alt="login" />
      </div>
    </div>
  );
};

export default Login;