export interface SignupData
{
email: string
password: string
confirmPassword: string
}

export async function signup(
  signupData: SignupData
) : Promise<number> {
  try{
    const response = await fetch("http://localhost:8080/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ signupData }),
    })

    if (response.ok) {
      return 0;
    } else {
      return 1;
    }
  }
  catch (error) {
    console.error("Error sending login message:", error)
    return 2;
  }
}
