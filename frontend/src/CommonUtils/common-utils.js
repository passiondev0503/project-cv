export const getToken = async () => {
    const token = await localStorage.getItem('token');
    const parsedData = JSON.parse(token);
    return parsedData;
}