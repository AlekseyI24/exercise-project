export async function loadData(loadUrl) {
    const res = await fetch(loadUrl);
    if (res.ok) {
        return await res.json();
    } else {
        throw res;
    }
}
