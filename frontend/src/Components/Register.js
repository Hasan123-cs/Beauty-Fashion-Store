import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
import { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { FaPhone } from "react-icons/fa";
export default function RegisterPage() {
  // states
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [check, setCheck] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const [errormasseg, seterrormasseg] = useState([]);
  const navigate = useNavigate();
  // handlers
  const handleRegister = async () => {
    const userData = {
      firstName: firstName,
      lastName: LastName,
      email: email,
      phone: phone,
      password: password,
    };
    try {
      const response = await fetch("https://localhost:7066/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      if (data.success) {
        alert(data.message);
        navigate("/login");
      } else {
        alert(data.message);
        // if your backend returns errors:
        if (data.errors) {
          seterrormasseg(data.errors);
          console.log(errormasseg);
        }
      }
    } catch (error) {
      console.log(error);
      alert("Server error");
    }
  };
  //=== handlers===
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        px: 2,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: "rgba(0,0,0,0.45)",
        }}
      />

      {/* Card */}
      <Paper
        elevation={0}
        sx={{
          position: "relative",
          width: 420,
          maxWidth: "100%",
          borderRadius: 4,
          p: 5,
          bgcolor: "rgba(255,255,255,0.95)",
        }}
      >
        <Typography
          align="center"
          sx={{
            letterSpacing: 3,
            color: "#9E9E9E",
            mb: 1,
          }}
        >
          JOIN US TODAY
        </Typography>
        <Typography
          align="center"
          sx={{
            fontSize: 52,
            fontWeight: 700,
            fontFamily: "CormorantGaramond",
            mb: 4,
          }}
        >
          Create Account
          <ul style={{ color: "#d16b86", fontSize: "15px", mt: 2 }}>
            <li>Passwords must be at least 6 characters.</li>
            <li>
              Passwords must have at least one non alphanumeric character.
            </li>
            <li>Passwords must have at least one digit ('0'-'9').</li>
            <li>Passwords must have at least one uppercase ('A'-'Z').</li>
            <li>Passwords must have at least one lowercase ('a'-'z').</li>
          </ul>
        </Typography>
        <Stack direction="row" spacing={2}>
          <TextField
            fullWidth
            label="First name"
            variant="outlined"
            size="small"
            value={firstName}
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#d16b86",
                  borderWidth: 2,
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d16b86",
              },
            }}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <TextField
            fullWidth
            label="Last name"
            variant="outlined"
            sx={{
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused fieldset": {
                  borderColor: "#d16b86",
                  borderWidth: 2,
                },
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#d16b86",
              },
            }}
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
            size="small"
          />
        </Stack>
        <TextField
          fullWidth
          label="Email address"
          margin="normal"
          size="small"
          value={email}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#d16b86",
                borderWidth: 2,
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#d16b86",
            },
          }}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          size="small"
          value={phone}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#d16b86",
                borderWidth: 2,
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#d16b86",
            },
          }}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type={showPassword ? "text" : "password"}
          margin="normal"
          size="small"
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "#d16b86",
                borderWidth: 2,
              },
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "#d16b86",
            },
          }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <VisibilityOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        <FormControlLabel
          sx={{ mt: 1 }}
          control={
            <Checkbox
              size="small"
              checked={check}
              onClick={() => setCheck(!check)}
              sx={{
                color: "#d16b86",
                "&.Mui-checked": {
                  color: "#d16b86",
                },
              }}
            />
          }
          label={
            <Typography sx={{ flex: 1 }} fontSize={13}>
              I agree to the{" "}
              <Link underline="none" to="terms" style={{ color: "#d16b86" }}>
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link underline="none" to="privacy" style={{ color: "#d16b86" }}>
                Privacy Policy
              </Link>
            </Typography>
          }
        />

        <Button
          fullWidth
          onClick={handleRegister}
          sx={{
            mt: 2,
            py: 1.4,
            borderRadius: 2,
            bgcolor: "#d16b86",
            textTransform: "none",
            fontWeight: 600,
            "&:hover": {
              bgcolor: "#c45d79",
            },
          }}
          variant="contained"
          disabled={!check || !firstName || !LastName || !email || !password}
        >
          Create Account →
        </Button>
        <br></br>
        <ol style={{ color: "red", fontSize: 12, mt: 2 }}>
          {errormasseg.map((error, index) => (
            <li>{error}</li>
          ))}
        </ol>
        <Typography
          align="center"
          sx={{
            mt: 3,
            fontFamily: "Playfair Display",
            fontSize: 14,
            color: "text.secondary",
          }}
        >
          Already have an account?{" "}
          <Link
            to="/login"
            style={{ color: "#d16b86", textDecoration: "none" }}
          >
            Sign in
          </Link>
        </Typography>
      </Paper>
    </Box>
  );
}
