

export const handleStream = async (prompt: string) => {
    // Construct the absolute URL
    const baseUrl = 'http://localhost:3000'
    const url = `${baseUrl}/api/chat`

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
    })

    if (!response.body) throw new Error("No response")
    const reader = response.body.getReader()
    return reader
}