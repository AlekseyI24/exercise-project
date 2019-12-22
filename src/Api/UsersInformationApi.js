export async function loadUsers(loadUrl) {
    const res = await fetch(loadUrl);
    if (res.ok) {
        return await res.json();
    } else {
        throw new Error("something went wrong...");
    }
}
