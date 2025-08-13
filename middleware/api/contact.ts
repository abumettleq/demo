export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export async function sendContactMessage(
  formData: ContactFormData
): Promise<boolean> {
  try {
    const response = await fetch("http://localhost:8080/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      return true
    } else {
      return false
    }
  } catch (error) {
    console.error("Error sending contact message:", error)
    return false
  }
}
