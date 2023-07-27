export const getToken = async () => {
    const token:any = await localStorage.getItem('token');
    const parsedData = JSON.parse(token);
    return parsedData;
}